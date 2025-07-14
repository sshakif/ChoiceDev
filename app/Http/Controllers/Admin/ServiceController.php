<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;

class ServiceController extends Controller
{
    public function index()
    {
        $developmentServices = Service::where('type', 'development')->latest()->get();
        $creativeServices = Service::where('type', 'creative')->latest()->get();
        return view('admin.backend.service.serviceList', compact('developmentServices', 'creativeServices'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|in:development,creative',
            'title' => 'nullable|string|max:255',
            'long_desc' => 'nullable|string',
            'file_path' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
            'creative_title' => 'nullable|string|max:255',
            'creative_desc' => 'nullable|string',
            'status' => 'required|boolean'
        ]);

        $imagePath = null;

        if ($request->hasFile('file_path')) {
            $image = $request->file('file_path');
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/service'))) {
                mkdir(public_path('upload/service'), 0777, true);
            }

            $image->move(public_path('upload/service'), $imageName);
            $imagePath = 'upload/service/' . $imageName;
        }

        Service::create([
            'type' => $request->type, // 👈 MAKE SURE THIS IS INCLUDED
            'title' => $request->title,
            'long_desc' => $request->long_desc,
            'file_path' => $imagePath,
            'creative_title' => $request->creative_title,
            'creative_desc'  => $request->creative_desc,
            'status' => $request->status,
            'created_by' => Auth::id(),
        ]);

        return redirect()->route('service.list')->with('success', 'Service created successfully.');
    }


    public function edit($id)
    {
        $service = Service::findOrFail($id);
        return view('admin.backend.service.editService', compact('service'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'type' => 'required|in:development,creative',
            'title' => 'nullable|string|max:255',
            'long_desc' => 'nullable|string',
            'file_path' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:10240',
            'creative_title' => 'nullable|string|max:255',
            'creative_desc' => 'nullable|string',
        ]);

        $service = Service::findOrFail($id);

        $imagePath = $service->file_path;

        if ($request->hasFile('file_path')) {
            if ($service->file_path && file_exists(public_path($service->file_path))) {
                unlink(public_path($service->file_path));
            }

            $image = $request->file('file_path');
            $imageName = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();

            if (!file_exists(public_path('upload/service'))) {
                mkdir(public_path('upload/service'), 0777, true);
            }

            $image->move(public_path('upload/service'), $imageName);
            $imagePath = 'upload/service/' . $imageName;
        }

        $service->update([
            'type'           => $request->type,
            'title'          => $request->type === 'development' ? $request->title : null,
            'long_desc'      => $request->type === 'development' ? $request->long_desc : null,
            'file_path'      => $request->type === 'development' ? $imagePath : null,
            'creative_title' => $request->type === 'creative' ? $request->creative_title : null,
            'creative_desc'  => $request->type === 'creative' ? $request->creative_desc : null,
            'status'         => $request->status ?? 1,
            'updated_by'     => Auth::id(),
        ]);

        return redirect()->route('service.list')->with('success', 'Service updated successfully.');
    }

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
