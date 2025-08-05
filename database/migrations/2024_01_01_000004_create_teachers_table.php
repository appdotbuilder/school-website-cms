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
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Teacher full name');
            $table->string('subject')->comment('Subject taught');
            $table->string('email')->nullable()->comment('Teacher email');
            $table->string('phone')->nullable()->comment('Teacher phone');
            $table->string('photo')->nullable()->comment('Teacher photo path');
            $table->text('bio')->nullable()->comment('Teacher biography');
            $table->string('qualification')->nullable()->comment('Educational qualification');
            $table->integer('experience_years')->nullable()->comment('Years of experience');
            $table->boolean('is_active')->default(true)->comment('Active status');
            $table->timestamps();
            
            $table->index('subject');
            $table->index('is_active');
            $table->index('name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};