<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lugar extends Model
{
    protected $table = 'lugares';

    public function viajes()
    {
        return $this->hasMany(Viaje::class);
    }
}
