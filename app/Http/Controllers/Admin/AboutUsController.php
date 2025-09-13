<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\About;
use App\Models\AboutUs;
use Illuminate\Support\Facades\Auth;

class AboutUsController extends Controller
{
    // Display all about info
    public function index()
    {
        $abouts = AboutUs::orderBy('created_at', 'desc')->get();
        return view('admin.backend.about.aboutList', compact('abouts'));
    }

    // Store new about section
    public function store(Request $request)
    {
        $request->validate([
            'title'     => 'required|string|max:255',
            'subtitle'  => 'nullable|string|max:255',
            'desc'      => 'nullable|string',
            'file_path' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
            'status'    => 'required|boolean',
        ]);

        $imagePath = null;

        if ($request->hasFile('file_path')) {
            $image = $request->file('file_path');
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/about'))) {
                mkdir(public_path('upload/about'), 0777, true);
            }

            $image->move(public_path('upload/about'), $imageName);
            $imagePath = 'upload/about/' . $imageName;
        }

        AboutUs::create([
            'title'      => $request->title,
            'subtitle'   => $request->subtitle,
            'desc'       => $request->desc,
            'file_path'  => $imagePath,
            'status'     => $request->status,
            'created_by' => Auth::id(),
        ]);

        return redirect()->route('about.list')->with('success', 'About section created successfully.');
    }

    // Show edit form
    public function edit($id)
    {
        $about = AboutUs::findOrFail($id);
        return view('admin.backend.about.editAbout', compact('about'));
    }

    // Update about section
    public function update(Request $request, $id)
    {
        $request->validate([
            'title'     => 'required|string|max:255',
            'subtitle'  => 'nullable|string|max:255',
            'desc'      => 'nullable|string',
            'file_path' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
        ]);

        $about = AboutUs::findOrFail($id);

        $imagePath = $about->file_path;

        if ($request->hasFile('file_path')) {
            // Delete old image
            if ($about->file_path && file_exists(public_path($about->file_path))) {
                unlink(public_path($about->file_path));
            }

            $image = $request->file('file_path');
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/about'))) {
                mkdir(public_path('upload/about'), 0777, true);
            }

            $image->move(public_path('upload/about'), $imageName);
            $imagePath = 'upload/about/' . $imageName;
        }

        $about->update([
            'title'      => $request->title,
            'subtitle'   => $request->subtitle,
            'desc'       => $request->desc,
            'file_path'  => $imagePath,
            'status'     => $request->status ?? 1,
            'updated_by' => Auth::id(),
        ]);

        return redirect()->route('about.list')->with('success', 'About section updated successfully.');
    }

    // Delete about section
    public function destroy($id)
    {
        $about = AboutUs::findOrFail($id);

        if ($about->file_path && file_exists(public_path($about->file_path))) {
            unlink(public_path($about->file_path));
        }

        $about->delete();

        return redirect()->route('about.list')->with('success', 'About section deleted successfully.');
    }
}
