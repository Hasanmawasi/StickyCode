<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(["prefix"=>"v0.1"], function(){

  Route::group(["middleware" => "auth:api"], function(){

      Route::get('/getusertags',[CodeController::class, "getUserTags"]);
      Route::get('/getusercodes',[CodeController::class, "getUserCodes"]);
      Route::post('/getcodetags',[CodeController::class, "getCodeTags"]);
      Route::post('/addcode',[CodeController::class, "creatCode"]);
      Route::post('/addtag',[TagController::class, "createTag"]);
      Route::post('/addcodetag',[CodeController::class, "addCodeTag"]);

    });





    Route::post('/login', [AuthController::class, "login"]);
    Route::post('/signup', [AuthController::class, "register"]);
});

