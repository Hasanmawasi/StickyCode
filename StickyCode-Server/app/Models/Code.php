<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Code extends Model
{
    protected $fillable = [
        'code_text',
        'is_favorite',
        'language',
        'user_id',
    ];
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class,'code_tags',foreignPivotKey:'code_id',relatedPivotKey:'tag_id');
    }
    public function user(): BelongsTo{
        return $this->belongsTo(User::class,'user_id');
    }

}
