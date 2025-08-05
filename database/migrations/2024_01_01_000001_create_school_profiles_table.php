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
        Schema::create('school_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('School name');
            $table->text('address')->comment('School address');
            $table->string('phone')->nullable()->comment('School phone number');
            $table->string('email')->nullable()->comment('School email');
            $table->string('logo')->nullable()->comment('School logo path');
            $table->string('motto')->nullable()->comment('School motto');
            $table->text('vision')->nullable()->comment('School vision');
            $table->text('mission')->nullable()->comment('School mission');
            $table->text('history')->nullable()->comment('School history');
            $table->text('values')->nullable()->comment('School values');
            $table->timestamps();
            
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('school_profiles');
    }
};