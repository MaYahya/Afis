<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiteController;

Route::get('/site-data', [SiteController::class, 'getSiteData']);
Route::post('/inquiry', [SiteController::class, 'submitInquiry'])->withoutMiddleware('auth:sanctum');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
