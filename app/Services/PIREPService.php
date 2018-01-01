<?php

namespace App\Services;

use Log;

use App\Models\Acars;
use App\Models\Navdata;
use App\Models\Pirep;
use App\Models\PirepFieldValues;
use App\Models\User;

use App\Models\Enums\AcarsType;
use App\Models\Enums\PirepSource;
use App\Models\Enums\PirepState;

use App\Events\PirepAccepted;
use App\Events\PirepFiled;
use App\Events\PirepRejected;
use App\Events\UserStatsChanged;

use App\Repositories\NavdataRepository;
use App\Repositories\PirepRepository;

class PIREPService extends BaseService
{
    protected $geoSvc,
              $navRepo,
              $pilotSvc,
              $pirepRepo;

    /**
     * PIREPService constructor.
     * @param UserService $pilotSvc
     * @param GeoService $geoSvc
     * @param NavdataRepository $navRepo
     * @param PirepRepository $pirepRepo
     */
    public function __construct(
        UserService $pilotSvc,
        GeoService $geoSvc,
        NavdataRepository $navRepo,
        PirepRepository $pirepRepo
    ) {
        $this->geoSvc = $geoSvc;
        $this->pilotSvc = $pilotSvc;
        $this->navRepo = $navRepo;
        $this->pirepRepo = $pirepRepo;
    }

    /**
     * Save the route into the ACARS table with AcarsType::ROUTE
     * @param Pirep $pirep
     * @return Pirep
     */
    public function saveRoute(Pirep $pirep): Pirep
    {
        # Delete all the existing nav points
        Acars::where([
            'pirep_id'  => $pirep->id,
            'type'      => AcarsType::ROUTE,
        ])->delete();

        # Delete the route
        if(empty($pirep->route)) {
            return $pirep;
        }

        $route = $this->geoSvc->routeToNavPoints(
            $pirep->route,
            $pirep->dep_airport,
            $pirep->arr_airport
        );

        /**
         * @var $point Navdata
         */
        foreach($route as $point) {
            $acars = new Acars();
            $acars->pirep_id = $pirep->id;
            $acars->type = AcarsType::ROUTE;
            $acars->nav_type = $point->type;
            $acars->name = $point->id;
            $acars->lat = $point->lat;
            $acars->lon = $point->lon;

            $acars->save();
        }

        return $pirep;
    }

    /**
     * Create a new PIREP with some given fields
     *
     * @param Pirep $pirep
     * @param array [PirepFieldValues] $field_values
     *
     * @return Pirep
     */
    public function create(Pirep $pirep, array $field_values=[]): Pirep
    {
        if(empty($field_values)) {
            $field_values = [];
        }

        # Figure out what default state should be. Look at the default
        # behavior from the rank that the pilot is assigned to
        $default_state = PirepState::PENDING;
        if($pirep->source === PirepSource::ACARS) {
            if($pirep->pilot->rank->auto_approve_acars) {
                $default_state = PirepState::ACCEPTED;
            }
        } else {
            if($pirep->pilot->rank->auto_approve_manual) {
                $default_state = PirepState::ACCEPTED;
            }
        }

        # Save the PIREP route
        $pirep = $this->saveRoute($pirep);

        $pirep->save();
        $pirep->refresh();

        foreach ($field_values as $fv) {
            $v = new PirepFieldValues();
            $v->pirep_id = $pirep->id;
            $v->name = $fv['name'];
            $v->value = $fv['value'];
            $v->source = $fv['source'];
            $v->save();
        }

        Log::info('New PIREP filed', [$pirep]);
        event(new PirepFiled($pirep));

        # only update the pilot last state if they are accepted
        if ($default_state === PirepState::ACCEPTED) {
            $pirep = $this->accept($pirep);
            $this->setPilotState($pirep->pilot, $pirep);
        }

        return $pirep;
    }

    /**
     * @param Pirep $pirep
     * @param int $new_state
     * @return Pirep
     */
    public function changeState(Pirep $pirep, int $new_state)
    {
        Log::info('PIREP ' . $pirep->id . ' state change from '.$pirep->state.' to ' . $new_state);

        if ($pirep->state === $new_state) {
            return $pirep;
        }

        /**
         * Move from a PENDING status into either ACCEPTED or REJECTED
         */
        if ($pirep->state === PirepState::PENDING) {
            if ($new_state === PirepState::ACCEPTED) {
                return $this->accept($pirep);
            } elseif ($new_state === PirepState::REJECTED) {
                return $this->reject($pirep);
            } else {
                return $pirep;
            }
        }

        /*
         * Move from a ACCEPTED to REJECTED status
         */
        elseif ($pirep->state === PirepState::ACCEPTED) {
            $pirep = $this->reject($pirep);
            return $pirep;
        }

        /**
         * Move from REJECTED to ACCEPTED
         */
        elseif ($pirep->state === PirepState::REJECTED) {
            $pirep = $this->accept($pirep);
            return $pirep;
        }

        return $pirep->refresh();
    }

    /**
     * @param Pirep $pirep
     * @return Pirep
     */
    public function accept(Pirep $pirep): Pirep
    {
        # moving from a REJECTED state to ACCEPTED, reconcile statuses
        if ($pirep->state === PirepState::ACCEPTED) {
            return $pirep;
        }

        $ft = $pirep->flight_time;
        $pilot = $pirep->pilot;

        $this->pilotSvc->adjustFlightTime($pilot, $ft);
        $this->pilotSvc->adjustFlightCount($pilot, +1);
        $this->pilotSvc->calculatePilotRank($pilot);
        $pirep->pilot->refresh();

        # Change the status
        $pirep->state = PirepState::ACCEPTED;
        $pirep->save();
        $pirep->refresh();

        $this->setPilotState($pilot, $pirep);

        Log::info('PIREP '.$pirep->id.' state change to ACCEPTED');

        event(new PirepAccepted($pirep));

        return $pirep;
    }

    /**
     * @param Pirep $pirep
     * @return Pirep
     */
    public function reject(Pirep $pirep): Pirep
    {
        # If this was previously ACCEPTED, then reconcile the flight hours
        # that have already been counted, etc
        if ($pirep->state === PirepState::ACCEPTED) {
            $pilot = $pirep->pilot;
            $ft = $pirep->flight_time * -1;

            $this->pilotSvc->adjustFlightTime($pilot, $ft);
            $this->pilotSvc->adjustFlightCount($pilot, -1);
            $this->pilotSvc->calculatePilotRank($pilot);
            $pirep->pilot->refresh();
        }

        # Change the status
        $pirep->state = PirepState::REJECTED;
        $pirep->save();
        $pirep->refresh();

        Log::info('PIREP ' . $pirep->id . ' state change to REJECTED');

        event(new PirepRejected($pirep));

        return $pirep;
    }

    /**
     * @param Pirep $pirep
     */
    public function setPilotState(User $pilot, Pirep $pirep)
    {
        $pilot->refresh();

        $previous_airport = $pilot->curr_airport_id;
        $pilot->curr_airport_id = $pirep->arr_airport_id;
        $pilot->last_pirep_id = $pirep->id;
        $pilot->save();

        $pirep->refresh();

        event(new UserStatsChanged($pilot, 'airport', $previous_airport));
    }
}
