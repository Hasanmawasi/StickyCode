<?php

namespace App\Http\Controllers;

use App\Models\Code;
use App\Models\Tag;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // public function addCodeTag(Request $request){
    //     $code= new Code();
    //     $tag = Tag::find($request['tagid']);;
    //     $code->creatCode($request);
    //     $code->tags()->attach($tag->id);
    //     return response()->json([
    //         'success' => true,
    //         'code' =>$code
    //     ]);
    // }
}
