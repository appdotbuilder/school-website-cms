<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SchoolProfile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function index()
    {
        $schoolProfile = SchoolProfile::first();

        return Inertia::render('contact', [
            'schoolProfile' => $schoolProfile,
        ]);
    }

    /**
     * Handle contact form submission.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ], [
            'name.required' => 'Nama harus diisi.',
            'email.required' => 'Email harus diisi.',
            'email.email' => 'Format email tidak valid.',
            'subject.required' => 'Subjek harus diisi.',
            'message.required' => 'Pesan harus diisi.',
        ]);

        // Here you would typically send an email or store the message
        // For now, we'll just redirect back with a success message

        return redirect()->route('contact.index')
            ->with('success', 'Pesan Anda telah terkirim. Terima kasih!');
    }
}