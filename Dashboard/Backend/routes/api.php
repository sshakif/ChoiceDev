<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// use App\Http\Controllers\ServicePageController;

// Route::post('/service-pages', [ServicePageController::class, 'store']);


 use App\Http\Controllers\MediaController;

 use App\Http\Controllers\ServicePageController;
// Route::prefix('media')->group(function () {
//     // Get media list for a model and record
//     Route::get('{model}/{id}', [MediaController::class, 'getMedia']);

//     // Upload media for a model and record
//     Route::post('{model}/{id}', [MediaController::class, 'uploadMedia']);

//     // Delete a media item by media ID
//     Route::delete('item/{mediaId}', [MediaController::class, 'deleteMediaItem']);
// });

 
    // Upload media for a model and record
  

// routes/api.php
// routes/web.php or routes/api.php
// Route::post('/media/upload/{model}/{id}', [MediaController::class, 'upload']);
// Route::get('/media/{model}/{id}', [MediaController::class, 'get']);
// Route::post('/media/load', [MediaController::class, 'loadMedia']);
// Route::get('/media/{model}/{id}', [MediaController::class, 'getMedia']);
// Route::post('/media/{model}/{id}', [MediaController::class, 'uploadMedia']);

// use App\Http\Controllers\CommonMediaController;

// Route::prefix('media')->group(function () {
//     Route::post('/{model}/{id}', [MediaController::class, 'upload']);
//     Route::get('/{model}/{id}', [MediaController::class, 'get']);
//     Route::delete('/{model}/{id}/{mediaId}', [MediaController::class, 'delete']);
// });

Route::post('/media/upload', [MediaController::class, 'upload']);
Route::get('/media/{model}/{id}', [MediaController::class, 'get']);
