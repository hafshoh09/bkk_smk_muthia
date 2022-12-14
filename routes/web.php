<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\BantuanController;
use App\Models\Job;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $data['job'] = Job::all();
    return view('welcome', $data);
});

Auth::routes();

Route::middleware(['isAdmin'])->group(function () {
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
});
Route::resource('profil', ProfilController::class);
Route::resource('jobs', JobController::class);
Route::resource('media', MediaController::class);
Route::resource('bantuan', BantuanController::class);
