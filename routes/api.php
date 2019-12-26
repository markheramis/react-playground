<?php

Route::group(['middleware' => 'api-header'], function () {
    Route::post('login', 'UserController@login');
    Route::post('register', 'UserController@register');
});

Route::group([
    'prefix' => 'user',
    'middleware' => [
        'api-header',
        #'jwt.auth',
    ],
], function () {
    Route::get('/', 'UserController@all');
    Route::get('/{id}', 'UserController@get');
    Route::put('/{id}', 'UserController@update');
    Route::delete('/{id}', 'UserController@delete');
});
