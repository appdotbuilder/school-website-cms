<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SchoolProfile;
use App\Models\Teacher;
use App\Models\Facility;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display the about page.
     */
    public function index()
    {
        $schoolProfile = SchoolProfile::first();
        $teachers = Teacher::active()->get();
        $facilities = Facility::available()->get();

        return Inertia::render('about', [
            'schoolProfile' => $schoolProfile,
            'teachers' => $teachers,
            'facilities' => $facilities,
        ]);
    }
}