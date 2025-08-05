<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\PpdbRegistration
 *
 * @property int $id
 * @property string $registration_number
 * @property string $full_name
 * @property \Illuminate\Support\Carbon $date_of_birth
 * @property string $gender
 * @property string $address
 * @property string $phone
 * @property string $email
 * @property string|null $previous_school
 * @property string $parent_name
 * @property string $parent_phone
 * @property string|null $parent_email
 * @property string|null $parent_occupation
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration query()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereDateOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereParentEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereParentName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereParentOccupation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereParentPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration wherePreviousSchool($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereRegistrationNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration pending()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration approved()
 * @method static \Database\Factories\PpdbRegistrationFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class PpdbRegistration extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'registration_number',
        'full_name',
        'date_of_birth',
        'gender',
        'address',
        'phone',
        'email',
        'previous_school',
        'parent_name',
        'parent_phone',
        'parent_email',
        'parent_occupation',
        'status',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date_of_birth' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($registration) {
            if (empty($registration->registration_number)) {
                $registration->registration_number = 'PPDB' . date('Y') . str_pad(
                    (string)(static::whereYear('created_at', date('Y'))->count() + 1),
                    4,
                    '0',
                    STR_PAD_LEFT
                );
            }
        });
    }

    /**
     * Scope a query to only include pending registrations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    /**
     * Scope a query to only include approved registrations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }
}