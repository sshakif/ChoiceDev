<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;

class ServiceController extends Controller
{
    // Display all services
    public function index()
    {
        $services = Service::orderBy('created_at', 'desc')->get();
        return view('admin.backend.service.serviceList', compact('services'));
    }

    // Store a new service
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'short_desc' => 'required|string|max:255',
            'long_desc' => 'nullable|string',
            'file_path' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
            'status' => 'required|boolean'
        ]);

        $imagePath = null;
        $mime_type = null;

        if ($request->hasFile('file_path')) {
            $image = $request->file('file_path');
            $mime_type = $image->getClientMimeType();
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/service'))) {
                mkdir(public_path('upload/service'), 0777, true);
            }

            $image->move(public_path('upload/service'), $imageName);
            $imagePath = 'upload/service/' . $imageName;
        }

        Service::create([
            'title' => $request->title,
            'short_desc' => $request->short_desc,
            'long_desc' => $request->long_desc,
            'file_path' => $imagePath,
            'status' => $request->status,
            'created_by' => Auth::id(),
        ]);

        return redirect()->route('service.list')->with('success', 'Service created successfully.');
    }

    // Show edit form
    public function edit($id)
    {
        $service = Service::findOrFail($id);
        return view('admin.backend.service.editService', compact('service'));
    }

    // Update the service
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'short_desc' => 'required|string|max:255',
            'long_desc' => 'nullable|string',
            'file_path' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
        ]);

        $service = Service::findOrFail($id);

        $imagePath = $service->file_path;
        $mime_type = $service->mime_type;

        if ($request->hasFile('file_path')) {
            // Delete old image
            if ($service->file_path && file_exists(public_path($service->file_path))) {
                unlink(public_path($service->file_path));
            }

            $image = $request->file('file_path');
            $mime_type = $image->getClientMimeType();
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/service'))) {
                mkdir(public_path('upload/service'), 0777, true);
            }

            $image->move(public_path('upload/service'), $imageName);
            $imagePath = 'upload/service/' . $imageName;
        }

        $service->update([
            'title' => $request->title,
            'short_desc' => $request->short_desc,
            'long_desc' => $request->long_desc,
            'file_path' => $imagePath,
            'status' => $request->status ?? 1,
            'updated_by' => Auth::id(),
        ]);

        return redirect()->route('service.list')->with('success', 'Service updated successfully.');
    }

    // Delete service
    public function destroy($id)
    {
        $service = Service::findOrFail($id);

        if ($service->file_path && file_exists(public_path($service->file_path))) {
            unlink(public_path($service->file_path));
        }

        $service->delete();

        return redirect()->route('service.list')->with('success', 'Service deleted successfully.');
    }
}
