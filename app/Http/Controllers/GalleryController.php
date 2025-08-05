<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display the gallery page.
     */
    public function index()
    {
        $images = Gallery::images()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->get();

        $videos = Gallery::videos()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->get();

        $categories = Gallery::select('category')
            ->whereNotNull('category')
            ->distinct()
            ->pluck('category');

        return Inertia::render('gallery', [
            'images' => $images,
            'videos' => $videos,
            'categories' => $categories,
        ]);
    }
}