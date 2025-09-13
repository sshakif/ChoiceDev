<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectImage extends Model
{
    protected $fillable = [
        'project_id',
        'file_path',
        'created_by',
        'updated_by'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

}