<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SchoolProfile;
use App\Models\News;
use App\Models\Gallery;
use App\Models\Teacher;
use App\Models\Facility;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $schoolProfile = SchoolProfile::first();
        $latestNews = News::published()->latest('published_at')->take(3)->get();
        $featuredGallery = Gallery::orderBy('sort_order')->take(6)->get();
        $featuredTeachers = Teacher::active()->take(4)->get();
        $facilities = Facility::available()->take(4)->get();

        return Inertia::render('welcome', [
            'schoolProfile' => $schoolProfile,
            'latestNews' => $latestNews,
            'featuredGallery' => $featuredGallery,
            'featuredTeachers' => $featuredTeachers,
            'facilities' => $facilities,
        ]);
    }
}