<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePpdbRegistrationRequest;
use App\Models\PpdbRegistration;
use App\Models\SchoolProfile;
use Inertia\Inertia;

class PpdbController extends Controller
{
    /**
     * Display the PPDB information and registration form.
     */
    public function index()
    {
        $schoolProfile = SchoolProfile::first();

        return Inertia::render('ppdb', [
            'schoolProfile' => $schoolProfile,
        ]);
    }

    /**
     * Store a new PPDB registration.
     */
    public function store(StorePpdbRegistrationRequest $request)
    {
        $registration = PpdbRegistration::create($request->validated());

        return redirect()->route('ppdb.success', $registration->registration_number)
            ->with('success', 'Pendaftaran berhasil! Nomor registrasi Anda: ' . $registration->registration_number);
    }

    /**
     * Display success page after registration.
     */
    public function show(string $registrationNumber)
    {
        $registration = PpdbRegistration::where('registration_number', $registrationNumber)->firstOrFail();

        return Inertia::render('ppdb-success', [
            'registration' => $registration,
        ]);
    }
}