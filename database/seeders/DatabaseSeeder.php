<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        $admin = User::factory()->create([
            'name' => 'Admin Sekolah',
            'email' => 'admin@sekolah.com',
        ]);

        // Create school profile
        \App\Models\SchoolProfile::factory()->create();

        // Create news articles
        \App\Models\News::factory(15)
            ->for($admin, 'author')
            ->create();

        // Create teachers
        \App\Models\Teacher::factory(20)->create();

        // Create facilities
        \App\Models\Facility::factory(12)->create();

        // Create gallery items
        \App\Models\Gallery::factory(30)->image()->create();
        \App\Models\Gallery::factory(10)->video()->create();

        // Create sample PPDB registrations
        \App\Models\PpdbRegistration::factory(25)->pending()->create();
        \App\Models\PpdbRegistration::factory(15)->approved()->create();
        \App\Models\PpdbRegistration::factory(5)->rejected()->create();
    }
}
