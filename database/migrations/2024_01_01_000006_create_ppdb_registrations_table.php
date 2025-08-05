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
        Schema::create('ppdb_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('registration_number')->unique()->comment('Unique registration number');
            $table->string('full_name')->comment('Student full name');
            $table->date('date_of_birth')->comment('Student date of birth');
            $table->enum('gender', ['male', 'female'])->comment('Student gender');
            $table->text('address')->comment('Student address');
            $table->string('phone')->comment('Student phone number');
            $table->string('email')->comment('Student email');
            $table->string('previous_school')->nullable()->comment('Previous school name');
            $table->string('parent_name')->comment('Parent/Guardian name');
            $table->string('parent_phone')->comment('Parent/Guardian phone');
            $table->string('parent_email')->nullable()->comment('Parent/Guardian email');
            $table->string('parent_occupation')->nullable()->comment('Parent/Guardian occupation');
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending')->comment('Registration status');
            $table->text('notes')->nullable()->comment('Admin notes');
            $table->timestamps();
            
            $table->index('registration_number');
            $table->index('status');
            $table->index(['status', 'created_at']);
            $table->index('full_name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ppdb_registrations');
    }
};