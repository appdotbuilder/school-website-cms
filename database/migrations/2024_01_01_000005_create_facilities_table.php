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
        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Facility name');
            $table->text('description')->comment('Facility description');
            $table->string('image')->nullable()->comment('Facility image path');
            $table->string('category')->nullable()->comment('Facility category');
            $table->integer('capacity')->nullable()->comment('Facility capacity');
            $table->boolean('is_available')->default(true)->comment('Availability status');
            $table->timestamps();
            
            $table->index('category');
            $table->index('is_available');
            $table->index('name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facilities');
    }
};