<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectCategory;
use App\Models\ProjectImage;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with('categories')->orderBy('created_at', 'desc')->get();
        $categories = ProjectCategory::where('status', 1)->get();
        return view('admin.backend.project.projectList', compact('projects', 'categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'short_desc' => 'required|string|max:255',
            'long_desc' => 'nullable|string',
            'banner_image' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
            'status' => 'required|boolean',
            'categories' => 'nullable|array',
            'categories.*' => 'exists:project_categories,id',
            'project_images' => 'nullable|array',
            'project_images.*' => 'image|mimes:jpg,png,jpeg,svg|max:10240'
        ]);

        $imagePath = null;

        if ($request->hasFile('banner_image')) {
            $image = $request->file('banner_image');
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/project'))) {
                mkdir(public_path('upload/project'), 0777, true);
            }

            $image->move(public_path('upload/project'), $imageName);
            $imagePath = 'upload/project/' . $imageName;
        }

        $project = Project::create([
            'title' => $request->title,
            'short_desc' => $request->short_desc,
            'long_desc' => $request->long_desc,
            'banner_image' => $imagePath,
            'status' => $request->status,
            'created_by' => Auth::id(),
        ]);

        // Sync categories
        if ($request->has('categories')) {
            $project->categories()->sync($request->categories);
        }

        if ($request->hasFile('project_images')) {
            foreach ($request->file('project_images') as $image) {
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->move(public_path('uploads/projects/gallery'), $imageName);
                $imagePath = 'uploads/projects/gallery/' . $imageName;

                ProjectImage::create([
                    'project_id' => $project->id,
                    'file_path' => $imagePath,
                    'created_by' => Auth::id()
                ]);
            }
        }

        return redirect()->route('project.list')->with('success', 'Project created successfully.');
    }

    public function show($id)
    {
        $project = Project::with(['categories', 'images'])->findOrFail($id);
        return view('admin.backend.project.projectDetails', compact('project'));
    }

    public function edit($id)
    {
        $project = Project::with('categories')->findOrFail($id);
        $categories = ProjectCategory::where('status', 1)->get();
        return view('admin.backend.project.editProject', compact('project', 'categories'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'short_desc' => 'required|string|max:255',
            'long_desc' => 'nullable|string',
            'banner_image' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
            'status' => 'required|boolean',
            'categories' => 'nullable|array',
            'categories.*' => 'exists:project_categories,id',
            'project_images.*' => 'nullable|image|mimes:jpg,png,jpeg|max:5120',
        ]);

        $project = Project::findOrFail($id);
        $imagePath = $project->banner_image;

        // Handle banner image update
        if ($request->hasFile('banner_image')) {
            // Delete old image
            if ($project->banner_image && file_exists(public_path($project->banner_image))) {
                unlink(public_path($project->banner_image));
            }

            $image = $request->file('banner_image');
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/project'))) {
                mkdir(public_path('upload/project'), 0777, true);
            }

            $image->move(public_path('upload/project'), $imageName);
            $imagePath = 'upload/project/' . $imageName;
        }

        // Update project details
        $project->update([
            'title' => $request->title,
            'short_desc' => $request->short_desc,
            'long_desc' => $request->long_desc,
            'banner_image' => $imagePath,
            'status' => $request->status,
            'updated_by' => Auth::id(),
        ]);

        // Sync categories
        $project->categories()->sync($request->categories ?? []);

        // Handle removed images
        if ($request->removed_images) {
            $removedIds = explode(',', $request->removed_images);
            foreach ($removedIds as $id) {
                $image = ProjectImage::find($id);
                if ($image && file_exists(public_path($image->file_path))) {
                    unlink(public_path($image->file_path));
                }
                $image->delete();
            }
        }

        // Handle new images upload
        if ($request->hasFile('project_images')) {
            foreach ($request->file('project_images') as $file) {
                $imageName = hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path('upload/project/gallery'), $imageName);

                ProjectImage::create([
                    'project_id' => $project->id,
                    'file_path' => 'upload/project/gallery/' . $imageName,
                ]);
            }
        }

        return redirect()->route('project.list')->with('success', 'Project updated successfully.');
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);

        if ($project->banner_image && file_exists(public_path($project->banner_image))) {
            unlink(public_path($project->banner_image));
        }

        // Detach all categories first
        $project->categories()->detach();

        $project->delete();

        return redirect()->route('project.list')->with('success', 'Project deleted successfully.');
    }
}
