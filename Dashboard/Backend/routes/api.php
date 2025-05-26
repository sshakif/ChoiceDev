<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// use App\Http\Controllers\ServicePageController;

// Route::post('/service-pages', [ServicePageController::class, 'store']);


 use App\Http\Controllers\MediaController;

// Route::prefix('media')->group(function () {
//     // Get media list for a model and record
//     Route::get('{model}/{id}', [MediaController::class, 'getMedia']);

//     // Upload media for a model and record
//     Route::post('{model}/{id}', [MediaController::class, 'uploadMedia']);

//     // Delete a media item by media ID
//     Route::delete('item/{mediaId}', [MediaController::class, 'deleteMediaItem']);
// });

 
    // Upload media for a model and record
    Route::post('{model}/{id}', [MediaController::class, 'uploadMedia']);
