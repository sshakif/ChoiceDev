<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProjectImage;
use Illuminate\Support\Facades\Auth;

class ProjectImageController extends Controller
{
    // Store additional images
    public function store(Request $request)
{
    $request->validate([
        'project_id' => 'required|exists:projects,id',
        'project_images' => 'required|array',
        'project_images.*' => 'image|mimes:jpg,png,jpeg,svg|max:10240'
    ]);

    if($request->hasFile('project_images')) {
        foreach($request->file('project_images') as $image) {
            $imageName = time().'_'.$image->getClientOriginalName();
            $image->move(public_path('uploads/projects/gallery'), $imageName);
            $imagePath = 'uploads/projects/gallery/'.$imageName;
            
            ProjectImage::create([
                'project_id' => $request->project_id,
                'file_path' => $imagePath,
                'created_by' => Auth::id()
            ]);
        }
    }

    return back()->with('success', 'Images added successfully.');
}

    // Delete image
    public function destroy($id)
    {
        $image = ProjectImage::findOrFail($id);

        if(file_exists(public_path($image->file_path))) {
            unlink(public_path($image->file_path));
        }

        $image->delete();

        return back()->with('success', 'Image deleted successfully.');
    }
}