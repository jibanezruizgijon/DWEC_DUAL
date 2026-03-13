<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ViajeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Rutas públicas
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rutas protegidas 
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('viajes', ViajeController::class)->only(['index', 'store', 'destroy']);

    Route::get('/lugares', function() {
        return \App\Models\Lugar::all();
    });
});


// Route::get('/viajes', [ViajeController::class, 'index']);
// Route::post('/viajes', [ViajeController::class, 'store']);
// Route::delete('/viajes/{id}', [ViajeController::class, 'destroy']);
