<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('code_tags',function(Blueprint $table){
           
            $table->dropColumn('tag_id');
            $table->dropColumn('code_id');
            $table->foreignId('tag_id')->constrained('tags')->onDelete('cascade');
            $table->foreignId('code_id')->constrained('codes')->onDelete('cascade');

           });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
