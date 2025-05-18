<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = 'category';
    protected $fillable = [
        'name',
        'note',
        'file_path',
        'mim_type',
        'created_by',
        'updated_by'

    ];

    public function events()
    {
        return $this->hasMany(Event::class);
    }
}
