<?php

namespace App\Http\Controllers;

use App\Models\Viaje;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class ViajeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /** @var User $user */
        $user = Auth::user();
        return $user->viajes()->with('lugar')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'lugar_id' => 'required|exists:lugares,id',
            'fecha_viaje' => 'required|date|after_or_equal:today',
        ]);

        $viaje = Viaje::create([
            'user_id' => Auth::id(),
            'lugar_id' => $request->lugar_id,
            'fecha_viaje' => $request->fecha_viaje,
        ]);

        return response()->json([
            'message' => 'Viaje reservado con éxito',
            'viaje' => $viaje->load('lugar')
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Viaje $viaje)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Viaje $viaje)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Viaje $viaje)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        /** @var User $user */
        $user = Auth::user();
        $viaje = $user->viajes()->findOrFail($id);

        // Solo se puede cancelar si la fecha del viaje es posterior a hoy
        if ($viaje->fecha_viaje <= now()->format('Y-m-d')) {
            return response()->json([
                'message' => 'No puedes cancelar un viaje que ya ha pasado o es hoy.'
            ], 403);
        }

        $viaje->delete();

        return response()->json([
            'message' => 'Viaje cancelado correctamente.'
        ]);
    }
}
