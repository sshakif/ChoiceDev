<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectCategory extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'file_path',
        'status',
        'created_by',
        'updated_by'
    ];

    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_category_mappings', 'category_id', 'project_id');
    }

}