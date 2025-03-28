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
    public function addCodeTag(Request $request){
        $validator = Validator::make($request->all(), [
            'tagids' => 'required|array',
            'tagids.*' => 'integer|exists:tags,id',
            'code_text' => 'required|string',
            'language' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }


        $code= $this->createCode($request);
        if (!$code) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create code'
            ], 500);
        }
        $code->tags()->attach($request['tagids']);
        return response()->json([
            'success' => true,
            'code' =>$code
        ]);
    }
   public function createCode(Request $request){
    if($this->validateCodeInput($request)->fails()){
        return response()->json([
            'success' => false,
            'message' =>  "required filled",
        ]);
    }
    $user = Auth::user();
    $code = new Code();
    $code->code_text = $request['code_text'];
    $code->language = $request['language'];
    $code->user_id = $user->id;
    $code->is_favorite = 0;
    $code->save();
    return $code;
    // response()->json([
    //     'success' => true,
    //     'codes' =>  $code,
    // ]);
   }
   public function getUserCodes(){
   $user = Auth::user();
   $codes= $user->codes->where('user_id',$user->id);
   $data =[];
    foreach ($codes as $code) {
     $data [] =  $code->tags->where('user_id',$user->id);
    }
    return response()->json([
        'success' => true,
        'codes' =>  $codes,
        // "data"=> $data,
    ]);
   }

   public function getCodeTags(Request $request){
    $id = $request['id'];
    $code = Code::find($id);
    if (!$code) {
        return response()->json([
            "success" => false,
            "message" => "Code not found"
        ], 404);
    }
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
   public function deleteCode(Request $request){

    $id = $request['id'];
    $code = Code::find($id);
    if (!$code) {
        return response()->json([
            "success" => false,
            "message" => "Code not found"
        ], 404);
    }
    $code->where('id',$id)->delete();
    return response()->json([
        "success" => true,
        "message" => "code deleted successfully",
        "code"=>$code,
    ]);
   }

   public function toggleFavorite(Request $request){
    $id = $request['id'];
    $code = Code::find($id);
    if (!$code) {
        return response()->json([
            "success" => false,
            "message" => "Code not found"
        ], 404);
    }
    $favorite = $code->is_favorite;
    $code->is_favorite= !$favorite;
    $code->save();
    return response()->json([
        "success" => true,
        "isFavorite" => $code->is_favorite
    ],200);
   }
   public function search(Request $request){
    $searchInput = $request['search'];
    $user = Auth::user();
    $result =Code::where('language', 'LIKE', "%{$searchInput}%")
                    ->Where('user_id', $user->id)
                    ->get();
    return response()->json([
        "success" => true,
        "search" => $result
    ],200);
   }
}
