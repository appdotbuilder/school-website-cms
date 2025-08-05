<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\SchoolProfile
 *
 * @property int $id
 * @property string $name
 * @property string $address
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $logo
 * @property string|null $motto
 * @property string|null $vision
 * @property string|null $mission
 * @property string|null $history
 * @property string|null $values
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile query()
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereHistory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereMission($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereMotto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereValues($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereVision($value)
 * @method static \Database\Factories\SchoolProfileFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class SchoolProfile extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'address',
        'phone',
        'email',
        'logo',
        'motto',
        'vision',
        'mission',
        'history',
        'values',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}