<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
    'type',
    'title',
    'long_desc',
    'file_path',
    'status',
    'creative_title',
    'creative_desc',
    'created_by',
    'updated_by',
    ];

}
