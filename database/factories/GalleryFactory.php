<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Kegiatan Akademik', 'Ekstrakurikuler', 'Olahraga', 'Seni', 'Upacara', 'Kompetisi'];
        $type = fake()->randomElement(['image', 'video']);
        
        return [
            'title' => fake()->sentence(4),
            'description' => fake()->paragraph(2),
            'file_path' => $type === 'image' 
                ? 'https://picsum.photos/800/600?random=' . fake()->numberBetween(1, 1000)
                : 'sample-video.mp4',
            'type' => $type,
            'category' => fake()->randomElement($categories),
            'sort_order' => fake()->numberBetween(1, 100),
        ];
    }

    /**
     * Indicate that the gallery item is an image.
     */
    public function image(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'image',
            'file_path' => 'https://picsum.photos/800/600?random=' . fake()->numberBetween(1, 1000),
        ]);
    }

    /**
     * Indicate that the gallery item is a video.
     */
    public function video(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'video',
            'file_path' => 'sample-video-' . fake()->numberBetween(1, 10) . '.mp4',
        ]);
    }
}