<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
class Tag extends Model
{
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function codes() : BelongsToMany{
        return $this-> belongsToMany(Code::class,'code_tags','tag_id','code_id');
    }
}
