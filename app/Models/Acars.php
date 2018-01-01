<?php

namespace App\Models;

use App\Models\Traits\HashId;

class Acars extends BaseModel
{
    use HashId;

    public $table = 'acars';
    public $incrementing = false;

    public $fillable = [
        'pirep_id',
        'type',
        'nav_type',
        'name',
        'log',
        'lat',
        'lon',
        'heading',
        'altitude',
        'vs',
        'gs',
        'transponder',
        'autopilot',
        'fuel_flow',
        'sim_time',
    ];

    public $casts = [
        'type'          => 'integer',
        'nav_type'      => 'integer',
        'lat'           => 'float',
        'lon'           => 'float',
        'heading'       => 'integer',
        'altitude'      => 'integer',
        'vs'            => 'float',
        'gs'            => 'float',
        'transponder'   => 'integer',
        'fuel_flow'     => 'float',
    ];

    public static $rules = [
        'pirep_id'  => 'required',
    ];

    /**
     * FKs
     */

    public function pirep()
    {
        return $this->belongsTo('App\Models\Pirep', 'pirep_id');
    }
}
