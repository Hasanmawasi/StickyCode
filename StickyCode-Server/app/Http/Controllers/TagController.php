<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
class TagController extends Controller
{
    public function validateTagInput(Request $request){
        return Validator::make($request->all(),[
            "name"=>'required|string|max:255'
        ]);
    }
   public function createTag(Request $request){
    if($this->validateTagInput($request)->fails()){
        return response()->json([
            'success' => false,
            'message' =>  "required filled",
        ]);
    }
    $userID = Auth::user()->id;
    $tag = new Tag();
    $tag->name = $request['name'];
    $tag->user_id = $userID;
    $tag->save();
    return response()->json([
        'success' => true,
        'tag' =>  $tag,
    ]);
    }
    public function deleteTag(Request $request){
        $id = $request['id'];
        $tag= Tag::find($id);
        if (!$tag) {
            return response()->json([
                "success" => false,
                "message" => "Tag not found"
            ], 404);
        }
        $tag->where('id',$id)->delete();
        return response()->json([
            "success" => true,
            "message" => "Tag deleted successfully",
            "code"=>$tag,
        ]);
    }
}
