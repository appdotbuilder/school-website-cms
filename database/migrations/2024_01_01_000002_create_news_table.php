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
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('News title');
            $table->string('slug')->unique()->comment('URL-friendly version of title');
            $table->text('excerpt')->nullable()->comment('Short description');
            $table->longText('content')->comment('Full news content');
            $table->string('image')->nullable()->comment('Featured image path');
            $table->enum('status', ['draft', 'published'])->default('draft')->comment('Publication status');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamp('published_at')->nullable()->comment('Publication date');
            $table->timestamps();
            
            $table->index(['status', 'published_at']);
            $table->index('slug');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};