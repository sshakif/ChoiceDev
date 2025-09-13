<?php

// use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });


// routes/api.php অথবা routes/web.php এ এই routes গুলো add করুন

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MediaController;

// Media routes
Route::prefix('media')->group(function () {
    Route::post('/upload', [MediaController::class, 'upload']);
    Route::get('/{model}/{id}', [MediaController::class, 'get']);
    Route::delete('/{id}', [MediaController::class, 'delete']);
});

// অথবা যদি আপনার existing route structure অনুযায়ী করতে চান:
Route::post('media/upload', [MediaController::class, 'upload']);
Route::get('media/{model}/{id}', [MediaController::class, 'get']);
Route::delete('media/{id}', [MediaController::class, 'delete']);