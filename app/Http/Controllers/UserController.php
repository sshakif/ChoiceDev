<?php

namespace App\Http\Controllers;

use App\Models\AboutUs;
use App\Models\Project;
use App\Models\ProjectCategory;
use App\Models\Service;

class UserController extends Controller
{
    public function home()
    {
        $about = AboutUs::where('status', 1)->latest()->first();
        $categories = ProjectCategory::where('status', 1)->get();
        $projects = Project::with(['categories', 'images'])
            ->where('status', 1)
            ->latest()
            ->get();

        return view('frontend.home.index', compact('about', 'categories', 'projects'));
    }

    public function services()
    {
        $services = Service::where('status', 1)->latest()->get();
        return view('frontend.services.index', compact('services'));
    }
    public function resources()
    {
        return view('frontend.resources.index');
    }
    
    public function contact()
    {
        return view('frontend.contact.index');
    }
    
}
