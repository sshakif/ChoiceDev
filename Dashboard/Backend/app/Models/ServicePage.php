<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ServicePage extends Model implements HasMedia
{
    use InteractsWithMedia;
    protected $guarded = [];
    //  protected $fillable = [
    //     'title',
    //     'slug',
    //     'short_description',
    //     'long_description',
    //     // 'image',
    //     'is_active',
    // ];
    //  protected $casts = [
    //     'is_active' => 'boolean',
    // ];
      public function registerMediaCollections(): void
    {
        $this->addMediaCollection('image');
    }
}
