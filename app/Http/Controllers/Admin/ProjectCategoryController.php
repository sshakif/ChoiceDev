<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProjectCategory;
use Illuminate\Support\Facades\Auth;

class ProjectCategoryController extends Controller
{
    // Display all categories
    public function index()
    {
        $categories = ProjectCategory::orderBy('created_at', 'desc')->get();
        return view('admin.backend.project.categoryList', compact('categories'));
    }

    // Store a new category
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file_path' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
            'status' => 'required|boolean'
        ]);

        $imagePath = null;

        if ($request->hasFile('file_path')) {
            $image = $request->file('file_path');
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/project_category'))) {
                mkdir(public_path('upload/project_category'), 0777, true);
            }

            $image->move(public_path('upload/project_category'), $imageName);
            $imagePath = 'upload/project_category/' . $imageName;
        }

        ProjectCategory::create([
            'title' => $request->title,
            'file_path' => $imagePath,
            'status' => $request->status,
            'created_by' => Auth::id(),
        ]);

        return redirect()->route('project.category.list')->with('success', 'Category created successfully.');
    }

    // Show edit form
    public function edit($id)
    {
        $category = ProjectCategory::findOrFail($id);
        return view('admin.backend.project.editCategory', compact('category'));
    }

    // Update the category
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file_path' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
        ]);

        $category = ProjectCategory::findOrFail($id);

        $imagePath = $category->file_path;

        if ($request->hasFile('file_path')) {
            // Delete old image
            if ($category->file_path && file_exists(public_path($category->file_path))) {
                unlink(public_path($category->file_path));
            }

            $image = $request->file('file_path');
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/project_category'))) {
                mkdir(public_path('upload/project_category'), 0777, true);
            }

            $image->move(public_path('upload/project_category'), $imageName);
            $imagePath = 'upload/project_category/' . $imageName;
        }

        $category->update([
            'title' => $request->title,
            'file_path' => $imagePath,
            'status' => $request->status ?? 1,
            'updated_by' => Auth::id(),
        ]);

        return redirect()->route('project.category.list')->with('success', 'Category updated successfully.');
    }

    // Delete category
    public function destroy($id)
    {
        $category = ProjectCategory::findOrFail($id);

        if ($category->file_path && file_exists(public_path($category->file_path))) {
            unlink(public_path($category->file_path));
        }

        $category->delete();

        return redirect()->route('project.category.list')->with('success', 'Category deleted successfully.');
    }
}