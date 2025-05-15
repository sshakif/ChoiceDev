<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{    
    use HasFactory;
    
     protected $guarded = [];
    // protected $guarded=[
    //     'question',
    //     'answer',
    //     'is_active',
    // ];
    //  protected $casts = [
    //     'is_active' => 'boolean',
    // ];
}
