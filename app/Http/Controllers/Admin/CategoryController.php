<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class CategoryController extends Controller
{
    // Display all About sections
    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->get();

        return view('admin.backend.category.categoryList', compact('categories'));
    }

    public function Store(Request $request)
    {

        $validate =  $request->validate([
            'name' => 'required|string|max:255',
            'note' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',

        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $mime_type = $image->getClientMimeType();
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            if (!file_exists(public_path('upload/category'))) {
                mkdir(public_path('upload/category'), 0777, true);
            }
            $image->move(public_path('upload/category'), $imageName);
            $imagePath = 'upload/category/' . $imageName;
        }
        Category::create([
            'name' => $request->name,
            'note' => $request->note,
            'file_path' => $imagePath ? $imagePath : null,
            'mime_type' => $imagePath ? $mime_type : null,
            'created_by' => Auth::user()->id
        ]);
        return redirect()->route('category.list')->with('success', 'Category added successfully!');
    }
    public function Edit($id)
    {
        $category = Category::find($id);
        return view('admin.backend.category.editcategory', compact('category'));
    }

    public function Update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'note' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:2048',

        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            if ($category->file_path && file_exists(public_path($category->file_path))) {
                unlink(public_path($category->file_path));
            }

            $image = $request->file('image');
            $mime_type = $image->getClientMimeType();
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            if (!file_exists(public_path('upload/category'))) {
                mkdir(public_path('upload/category'), 0777, true);
            }
            $image->move(public_path('upload/category'), $imageName);
            $imagePath = 'upload/category/' . $imageName;
        }

        $category->name = $request->name;
        $category->note = $request->note;
        $category->file_path = $imagePath ? $imagePath : $category->file_path;
        $category->updated_by = Auth::user()->id;

        $category->save();

        return redirect()->route('category.list')->with('success', 'Category updated successfully!');
    }

    public function Destroy($id)
    {
        $category = Category::find($id);

        if ($category) {
            $img = $category->file_path;

            if ($img && file_exists(public_path($img))) {
                unlink(public_path($img));
            }

            $category->delete();

            return redirect()->route('category.list')->with('success', "Category deleted successfully");
        } else {
            return redirect()->route('category.list')->with('error', "Somthing went error during delete");
        }
    }
}
