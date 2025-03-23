<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = [
            "email"=>$request['email'],
            "password"=>$request['password']
        ];

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized!!',
            ], 401);
        }
        $user = Auth::user();
        $user->token = $token;
        return response()->json([
                'success' => true,
                'user' => $user
            ]);

    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = new User;
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->password = $request['password'];
        $user->save();


        $token = Auth::login($user);
        $user->token = $token;
        return response()->json([
            'success' => true,
            'message' => 'User created successfully',
            'user' => $user,
        ]);
    }

    public function validatetoken(Request $request){
        $token = $request->bearerToken();
        if(!$token){
            return response()->json([
                "success"=>false,
                "message"=> "unAuthorized"]
            ,401);
        }
        $user = Auth::user();
        return response()->json([
            'success' => true,
            'message' => 'Token is valid',
            'data' => $user
        ], 200);
    }
}
