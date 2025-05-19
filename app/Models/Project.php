<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'short_desc',
        'long_desc',
        'banner_image',
        'status',
        'created_by',
        'updated_by'
    ];

    public function categories()
    {
        return $this->belongsToMany(ProjectCategory::class, 'project_category_mappings', 'project_id', 'category_id');
    }

    public function images()
    {
        return $this->hasMany(ProjectImage::class);
    }

}