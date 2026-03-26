<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ViajeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Rutas públicas con límite de uso de 20 peticiones por minuto
Route::middleware('throttle:20,1')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/inicio-datos', [ViajeController::class, 'datosInicio']);
});
// Rutas protegidas 
Route::middleware('auth:sanctum', 'throttle:60,1')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('viajes', ViajeController::class)->only(['index', 'store', 'destroy']);

    Route::get('/lugares', function (Request $request) {
        $query = \App\Models\Lugar::query();

        // Comprueba si desde angular se ha hecho una busqueda
        if ($request->has('buscar') && $request->buscar != '') {
            $busqueda = $request->buscar;
            $query->where('nombre', 'LIKE', '%' . $busqueda . '%')
                  ->orWhere('pais', 'LIKE', '%' . $busqueda . '%');
        }

        return response()->json($query->paginate(12));
    });
});


// Route::get('/viajes', [ViajeController::class, 'index']);
// Route::post('/viajes', [ViajeController::class, 'store']);
// Route::delete('/viajes/{id}', [ViajeController::class, 'destroy']);
