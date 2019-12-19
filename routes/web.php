<?php

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
Route::get('/', 'FrontController@index');
Route::get('/login','FrontController@index');
Route::get('/register','FrontController@index');
Route::get('/dashboard', 'FrontController@index');
Route::prefix('campaign')->middleware(['web'])->group(function () {
    Route::get('list', 'FrontController@index');
    Route::get('create', 'FrontController@index');
    Route::get('edit/{id}', 'FrontController@index');
});
