<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CreateRankRequest;
use App\Http\Requests\UpdateRankRequest;
use App\Interfaces\Controller;
use App\Repositories\RankRepository;
use App\Repositories\SubfleetRepository;
use App\Services\FleetService;
use Cache;
use Flash;
use Illuminate\Http\Request;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class RankController
 * @package App\Http\Controllers\Admin
 */
class RankController extends Controller
{
    private $fleetSvc,
            $rankRepository,
            $subfleetRepo;

    /**
     * RankController constructor.
     * @param FleetService       $fleetSvc
     * @param RankRepository     $rankingRepo
     * @param SubfleetRepository $subfleetRepo
     */
    public function __construct(
        FleetService $fleetSvc,
        RankRepository $rankingRepo,
        SubfleetRepository $subfleetRepo
    ) {
        $this->fleetSvc = $fleetSvc;
        $this->rankRepository = $rankingRepo;
        $this->subfleetRepo = $subfleetRepo;
    }

    /**
     * Get the available subfleets for a rank
     * @param $rank
     * @return array
     */
    protected function getAvailSubfleets($rank)
    {
        $retval = [];
        $all_subfleets = $this->subfleetRepo->all();
        $avail_subfleets = $all_subfleets->except($rank->subfleets->modelKeys());
        foreach ($avail_subfleets as $subfleet) {
            $retval[$subfleet->id] = $subfleet->name.
                ' (airline: '.$subfleet->airline->code.')';
        }

        return $retval;
    }

    /**
     * Display a listing of the Ranking.
     * @param Request $request
     * @return Response
     * @throws \Prettus\Repository\Exceptions\RepositoryException
     */
    public function index(Request $request)
    {
        $this->rankRepository->pushCriteria(new RequestCriteria($request));
        $ranks = $this->rankRepository->all();

        return view('admin.ranks.index', [
            'ranks' => $ranks,
        ]);
    }

    /**
     * Show the form for creating a new Ranking.
     *
     * @return Response
     */
    public function create()
    {
        return view('admin.ranks.create');
    }

    /**
     * Store a newly created Ranking in storage.
     * @param CreateRankRequest $request
     * @return Response
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(CreateRankRequest $request)
    {
        $input = $request->all();

        $model = $this->rankRepository->create($input);
        Flash::success('Ranking saved successfully.');

        Cache::forget(config('cache.keys.RANKS_PILOT_LIST.key'));

        return redirect(route('admin.ranks.edit', ['id' => $model->id]));
    }

    /**
     * Display the specified Ranking.
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        $rank = $this->rankRepository->findWithoutFail($id);

        if (empty($rank)) {
            Flash::error('Ranking not found');

            return redirect(route('admin.ranks.index'));
        }

        return view('admin.ranks.show', [
            'rank' => $rank
        ]);
    }

    /**
     * Show the form for editing the specified Ranking.
     * @param  int $id
     * @return Response
     */
    public function edit($id)
    {
        $rank = $this->rankRepository->findWithoutFail($id);

        if (empty($rank)) {
            Flash::error('Ranking not found');

            return redirect(route('admin.ranks.index'));
        }

        $avail_subfleets = $this->getAvailSubfleets($rank);

        return view('admin.ranks.edit', [
            'rank'            => $rank,
            'avail_subfleets' => $avail_subfleets,
        ]);
    }

    /**
     * Update the specified Ranking in storage.
     * @param  int              $id
     * @param UpdateRankRequest $request
     * @return Response
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update($id, UpdateRankRequest $request)
    {
        $rank = $this->rankRepository->findWithoutFail($id);

        if (empty($rank)) {
            Flash::error('Ranking not found');

            return redirect(route('admin.ranks.index'));
        }

        $rank = $this->rankRepository->update($request->all(), $id);
        Cache::forget(config('cache.keys.RANKS_PILOT_LIST.key'));

        Flash::success('Ranking updated successfully.');

        return redirect(route('admin.ranks.index'));
    }

    /**
     * Remove the specified Ranking from storage.
     * @param  int $id
     * @return Response
     */
    public function destroy($id)
    {
        $rank = $this->rankRepository->findWithoutFail($id);

        if (empty($rank)) {
            Flash::error('Ranking not found');

            return redirect(route('admin.ranks.index'));
        }

        $this->rankRepository->delete($id);

        Flash::success('Ranking deleted successfully.');

        return redirect(route('admin.ranks.index'));
    }

    /**
     * @param $rank
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    protected function return_subfleet_view($rank)
    {
        $avail_subfleets = $this->getAvailSubfleets($rank);

        return view('admin.ranks.subfleets', [
            'rank'            => $rank,
            'avail_subfleets' => $avail_subfleets,
        ]);
    }

    /**
     * Subfleet operations on a rank
     * @param         $id
     * @param Request $request
     * @return mixed
     */
    public function subfleets($id, Request $request)
    {
        $rank = $this->rankRepository->findWithoutFail($id);
        if (empty($rank)) {
            Flash::error('Rank not found!');
            return redirect(route('admin.ranks.index'));
        }

        // add aircraft to flight
        if ($request->isMethod('post')) {
            $subfleet = $this->subfleetRepo->find($request->input('subfleet_id'));
            $this->fleetSvc->addSubfleetToRank($subfleet, $rank);
        } elseif ($request->isMethod('put')) {
            $override = [];
            $override[$request->name] = $request->value;
            $subfleet = $this->subfleetRepo->find($request->input('subfleet_id'));

            $this->fleetSvc->addSubfleetToRank($subfleet, $rank);
        } // remove aircraft from flight
        elseif ($request->isMethod('delete')) {
            $subfleet = $this->subfleetRepo->find($request->input('subfleet_id'));
            $this->fleetSvc->removeSubfleetFromRank($subfleet, $rank);
        }

        return $this->return_subfleet_view($rank);
    }
}
