<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Code;
use App\Models\Tag;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class CodeController extends Controller
{
    public function validateCodeInput(Request $request){
        return Validator::make($request->all(),[
           'code_text' => 'required|string',
           'language' => 'required|string|max:255',
        ]);
    }
   public function creatCode(Request $request){
    if($this->validateCodeInput($request)->fails()){
        return response()->json([
            'success' => false,
            'message' =>  "required filled",
        ]);
    }
    $user = Auth::user();
    $code = new Code;
    $code->code_text = $request['code_text'];
    $code->language = $request['language'];
    $code->user_id = $user->id;
    $code->is_favorite = 0;
    $code->save();
    return response()->json([
        'success' => true,
        'codes' =>  $code,
    ]);
   }
   public function getUserCodes(){
   $user = Auth::user();
   $codes= $user->codes;

    return response()->json([
        'status' => true,
        'codes' =>  $codes,
    ]);
   }

   public function getCodeTags(Request $request){
    $code = Code::find($request['id']);
    $tags=  $code->tags;
    return response()->json([
        "success"=>true,
        "tags"=>$tags,
    ]);
   }

   public function getUserTags(){
    $user = Auth::user();
    $tags = $user->tags;
    return response()->json([
        "success"=>true,
        "tags"=>$tags,
    ]);
   }
}
