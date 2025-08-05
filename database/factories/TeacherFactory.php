<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $subjects = [
            'Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Fisika', 'Kimia', 
            'Biologi', 'Sejarah', 'Geografi', 'Ekonomi', 'Sosiologi', 
            'PKn', 'Seni Budaya', 'Pendidikan Jasmani', 'TIK'
        ];

        $qualifications = [
            'S1 Pendidikan Matematika',
            'S1 Pendidikan Bahasa Indonesia',
            'S1 Pendidikan Bahasa Inggris',
            'S1 Pendidikan Fisika',
            'S1 Pendidikan Kimia',
            'S1 Pendidikan Biologi',
            'S1 Pendidikan Sejarah',
            'S1 Pendidikan Geografi',
            'S2 Pendidikan',
        ];

        return [
            'name' => fake()->name(),
            'subject' => fake()->randomElement($subjects),
            'email' => fake()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'photo' => null,
            'bio' => fake()->paragraph(3),
            'qualification' => fake()->randomElement($qualifications),
            'experience_years' => fake()->numberBetween(1, 25),
            'is_active' => true,
        ];
    }

    /**
     * Indicate that the teacher is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}