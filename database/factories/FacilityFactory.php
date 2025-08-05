<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Facility>
 */
class FacilityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $facilities = [
            ['name' => 'Laboratorium Komputer', 'category' => 'Laboratorium', 'capacity' => 40],
            ['name' => 'Laboratorium Fisika', 'category' => 'Laboratorium', 'capacity' => 35],
            ['name' => 'Laboratorium Kimia', 'category' => 'Laboratorium', 'capacity' => 35],
            ['name' => 'Laboratorium Biologi', 'category' => 'Laboratorium', 'capacity' => 35],
            ['name' => 'Perpustakaan', 'category' => 'Akademik', 'capacity' => 100],
            ['name' => 'Aula Serbaguna', 'category' => 'Umum', 'capacity' => 500],
            ['name' => 'Lapangan Basket', 'category' => 'Olahraga', 'capacity' => 50],
            ['name' => 'Lapangan Badminton', 'category' => 'Olahraga', 'capacity' => 30],
            ['name' => 'Studio Musik', 'category' => 'Seni', 'capacity' => 25],
            ['name' => 'Ruang Kelas', 'category' => 'Akademik', 'capacity' => 36],
        ];

        $facility = fake()->randomElement($facilities);

        return [
            'name' => $facility['name'],
            'description' => fake()->paragraph(2),
            'image' => null,
            'category' => $facility['category'],
            'capacity' => $facility['capacity'],
            'is_available' => true,
        ];
    }

    /**
     * Indicate that the facility is not available.
     */
    public function unavailable(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_available' => false,
        ]);
    }
}