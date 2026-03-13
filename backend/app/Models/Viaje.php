<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Viaje extends Model
{
    protected $table = 'viajes';
    protected $fillable = ['user_id', 'lugar_id', 'fecha_viaje'];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function lugar()
    {
        return $this->belongsTo(Lugar::class, 'lugar_id');
    }
}
