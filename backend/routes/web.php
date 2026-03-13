<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use App\Http\Controllers\ViajeController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

Route::get('/viajes', [ViajeController::class, 'index']);
    Route::post('/viajes', [ViajeController::class, 'store']);
    Route::delete('/viajes/{id}', [ViajeController::class, 'destroy']);
    