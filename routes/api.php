<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', 'UserController@get');
Route::group(['middleware' => ['jwt.auth', 'api-header']], function () {

    // all routes to protected resources are registered here  
    Route::get('users/list', 'UserController@list');
});
Route::group(['middleware' => 'api-header'], function () {

    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('login', 'UserController@login');
    Route::post('register', 'UserController@register');
});
