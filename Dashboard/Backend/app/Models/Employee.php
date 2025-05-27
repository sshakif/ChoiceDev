<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use App\Traits\HasCustomId;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Flat3\Lodata\Attributes\LodataRelationship;
class Employee extends Model implements HasMedia
{
     use InteractsWithMedia {
        media as protected trait_media;
    }

    protected $guarded = [];

    #[LodataRelationship]
    public function media(): MorphMany
    {
        return $this->trait_media();
    }
   public function employee()
    {
        return $this->belongsTo(Employee::class);
    }


}
