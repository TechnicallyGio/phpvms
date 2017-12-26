<?php

namespace App\Services;

use Log;

use \GeoJson\Geometry\Point;
use \GeoJson\Geometry\LineString;
use \GeoJson\Feature\Feature;
use \GeoJson\Feature\FeatureCollection;

use \League\Geotools\Geotools;
use \League\Geotools\Coordinate\Coordinate;

use App\Models\Flight;
use App\Repositories\NavdataRepository;

/**
 * Return all of the coordinates, start to finish
 * Returned in the GeoJSON format
 * https://tools.ietf.org/html/rfc7946
 *
 * TODO: Save this data:
 * Once a PIREP is accepted, save this returned structure as a
 * JSON-encoded string into the raw_data field of the PIREP row
 *
 */
class GeoService extends BaseService
{
    private $navRepo;

    public function __construct(NavdataRepository $navRepo)
    {
        $this->navRepo = $navRepo;
    }

    public function getClosestCoords($coordStart, $all_coords, $measure='flat')
    {
        $distance = [];
        $geotools = new Geotools();
        $start = new Coordinate($coordStart);

        foreach($all_coords as $coords) {
            $coord = new Coordinate($coords);
            $dist = $geotools->distance()->setFrom($start)->setTo($coord);

            if($measure === 'flat') {
                $distance[] = $dist->flat();
            } elseif ($measure === 'greatcircle') {
                $distance[] = $dist->greatCircle();
            }
        }

        $distance = collect($distance);
        $min = $distance->min();
        return $all_coords[ $distance->search($min, true) ];
    }

    /**
     * @param $dep_icao     string  ICAO to ignore
     * @param $arr_icao     string  ICAO to ignore
     * @param $start_coords array   [x, y]
     * @param $route        string  Textual route
     * @return array
     */
    public function getCoordsFromRoute($dep_icao, $arr_icao, $start_coords, $route)
    {
        $coords = [];
        $split_route = explode(' ', $route);

        $skip = [
            $dep_icao,
            $arr_icao,
            'SID',
            'STAR'
        ];

        foreach ($split_route as $route_point) {

            $route_point = trim($route_point);

            if (\in_array($route_point, $skip, true)) {
                continue;
            }

            try {
                Log::info('Looking for ' . $route_point);

                $points = $this->navRepo->findWhere(['id' => $route_point]);
                $size = \count($points);

                if($size === 0) {
                    continue;
                } else if($size === 1) {
                    $point = $points[0];
                    Log::info('name: ' . $point->id . ' - ' . $point->lat . 'x' . $point->lon);
                    $coords[] = $point;
                    continue;
                }

                # Find the point with the shortest distance
                Log::info('found ' . $size . ' for '. $route_point);

                # Get the start point and then reverse the lat/lon reference
                # If the first point happens to have multiple possibilities, use
                # the starting point that was passed in
                if (\count($coords) > 0) {
                    $start_point = $coords[\count($coords) - 1];
                    $start_point = [$start_point->lat, $start_point->lon];
                } else {
                    $start_point = $start_coords;
                }

                # Put all of the lat/lon sets into an array to pick of what's clsest
                # to the starting point
                $potential_coords = [];
                foreach($points as $point) {
                    $potential_coords[] = [$point->lat, $point->lon];
                }

                # returns an array with the closest lat/lon to start point
                $closest_coords = $this->getClosestCoords($start_point, $potential_coords);
                foreach($points as $point) {
                    if($point->lat === $closest_coords[0] && $point->lon === $closest_coords[1]) {
                        break;
                    }
                }

                $coords[] = $point;

            } catch (\Exception $e) {
                Log::error($e);
                continue;
            }
        }

        return $coords;
    }

    /**
     * Return a FeatureCollection GeoJSON object
     * @param Flight $flight
     * @return array
     */
    public function flightGeoJson(Flight $flight): array
    {
        $route_coords = [];
        $route_points = [];
        #$features = [];

        ## Departure Airport
        $route_coords[] = [$flight->dpt_airport->lon, $flight->dpt_airport->lat];

        $route_points[] = new Feature(
            new Point([$flight->dpt_airport->lon, $flight->dpt_airport->lat]), [
                'name'  => $flight->dpt_airport->icao,
                'popup' => $flight->dpt_airport->full_name,
                'icon'  => 'airport',
            ]
        );

        if($flight->route) {
            $all_route_points = $this->getCoordsFromRoute(
                $flight->dpt_airport->icao,
                $flight->arr_airport->icao,
                [$flight->dpt_airport->lat, $flight->dpt_airport->lon],
                $flight->route);

            // lat, lon needs to be reversed for GeoJSON
            foreach($all_route_points as $point) {
                $route_coords[] = [$point->lon, $point->lat];
                $route_points[] = new Feature(new Point([$point->lon, $point->lat]), [
                    'name'  => $point->name,
                    'popup' => $point->name . ' (' . $point->name . ')',
                    'icon'  => ''
                ]);
            }
        }

        ## Arrival Airport
        $route_coords[] = [$flight->arr_airport->lon, $flight->arr_airport->lat,];

        $route_points[] = new Feature(
            new Point([$flight->arr_airport->lon, $flight->arr_airport->lat]), [
                'name'  => $flight->arr_airport->icao,
                'popup' => $flight->arr_airport->full_name,
                'icon'  => 'airport',
            ]
        );

        $route_points = new FeatureCollection($route_points);
        $planned_route_line = new FeatureCollection([new Feature(new LineString($route_coords), [])]);

        return [
            'route_points' => $route_points,
            'planned_route_line' => $planned_route_line,
        ];
    }

    /**
     * Return a GeoJSON FeatureCollection for a PIREP
     * @param Pirep $pirep
     * @return array
     */
    public function pirepGeoJson($pirep)
    {
        $route_points = [];
        $planned_rte_coords = [];

        $planned_rte_coords[] = [$pirep->dpt_airport->lon, $pirep->dpt_airport->lat];
        $route_points[] = new Feature(
            new Point([$pirep->dpt_airport->lon, $pirep->dpt_airport->lat]), [
                'name' => $pirep->dpt_airport->icao,
                'popup' => $pirep->dpt_airport->full_name,
                'icon' => 'airport',
            ]
        );

        // TODO: Add markers for the start/end airports

        // TODO: Check if there's data in the ACARS table
        if (!empty($pirep->route)) {
            $all_route_points = $this->getCoordsFromRoute(
                $pirep->dpt_airport->icao,
                $pirep->arr_airport->icao,
                [$pirep->dpt_airport->lat, $pirep->dpt_airport->lon],
                $pirep->route);

            // lat, lon needs to be reversed for GeoJSON
            foreach ($all_route_points as $point) {
                $planned_rte_coords[] = [$point->lon, $point->lat];
                $route_points[] = new Feature(new Point([$point->lon, $point->lat]), [
                    'name' => $point->name,
                    'popup' => $point->name . ' (' . $point->name . ')',
                    'icon' => ''
                ]);
            }
        }

        $planned_rte_coords[] = [$pirep->arr_airport->lon, $pirep->arr_airport->lat];
        $route_points[] = new Feature(
            new Point([$pirep->arr_airport->lon, $pirep->arr_airport->lat]), [
                'name' => $pirep->arr_airport->icao,
                'popup' => $pirep->arr_airport->full_name,
                'icon' => 'airport',
            ]
        );

        $route_points = new FeatureCollection($route_points);

        $planned_route_line = new LineString($planned_rte_coords);

        $planned_route = new FeatureCollection([
            new Feature($planned_route_line, [], 1)
        ]);

        return [
            'actual_route' => false,
            'route_points' => $route_points,
            'planned_route_line' => $planned_route,
        ];
    }

    /**
     * Determine the center point between two sets of coordinates
     * @param $latA
     * @param $lonA
     * @param $latB
     * @param $lonB
     * @return array
     * @throws \League\Geotools\Exception\InvalidArgumentException
     */
    public function getCenter($latA, $lonA, $latB, $lonB)
    {
        $geotools = new Geotools();
        $coordA = new Coordinate([$latA, $lonA]);
        $coordB = new Coordinate([$latB, $lonB]);

        $vertex = $geotools->vertex()->setFrom($coordA)->setTo($coordB);
        $middlePoint = $vertex->middle();

        $center = [
            $middlePoint->getLatitude(),
            $middlePoint->getLongitude()
        ];

        return $center;
    }
}