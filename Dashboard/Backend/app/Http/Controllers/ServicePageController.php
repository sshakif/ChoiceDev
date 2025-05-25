<?php

namespace App\Http\Controllers;

use App\Models\ServicePage;
use Illuminate\Http\Request;

class ServicePageController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'short_description' => 'required|string',
                'long_description' => 'required|string',       
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
    
            $servicePage = ServicePage::create([
                'title' => $request->title,
                'short_description' => $request->short_description,
                'long_description' => $request->long_description,
            ]);
    
            if ($request->hasFile('image')) {
                $servicePage->addMediaFromRequest('image')->toMediaCollection('images');
            }
    
            return response()->json([
                'message' => 'Service Page created successfully.'
            ], 201);
    
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Validation Error.',
                'errors' => $e->errors()
            ], 422);
    
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went wrong.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function index(Request $request)
    {
        $query = ServicePage::query();

        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function($q) use ($searchTerm) {
                $q->where('title', 'like', "%{$searchTerm}%")
                  ->orWhere('short_description', 'like', "%{$searchTerm}%")
                  ->orWhere('long_description', 'like', "%{$searchTerm}%");
            });
        }

        if ($request->has('per_page')) {
            $servicePages = $query->paginate($request->input('per_page'));

            // Map on paginated collection
            $servicePages->getCollection()->transform(function ($servicePage) {
                return $this->formatServicePageResponse($servicePage);
            });

            return response()->json($servicePages);
        } else {
            $servicePages = $query->get();
            $formatted = $servicePages->map(function ($servicePage) {
                return $this->formatServicePageResponse($servicePage);
            });

            return response()->json($formatted);
        }
    }

    public function show($id)
    {
        $servicePage = ServicePage::findOrFail($id);
        return response()->json($this->formatServicePageResponse($servicePage));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string',
            'long_description' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048'
        ]);

        $servicePage = ServicePage::findOrFail($id);

        $servicePage->update([
            'title' => $request->title,
            'short_description' => $request->short_description,
            'long_description' => $request->long_description,
        ]);

        if ($request->hasFile('image')) {
            $servicePage->clearMediaCollection('images');
            $servicePage->addMediaFromRequest('image')->toMediaCollection('images');
        }

        return response()->json($this->formatServicePageResponse($servicePage));
    }

    public function destroy($id)
    {
        $servicePage = ServicePage::findOrFail($id);
        $servicePage->delete();
        return response()->json(null, 204);
    }
    
    public function formatServicePageResponse(ServicePage $servicePage): array
    {
        $media = $servicePage->getMedia('images')->first();
        
        return [
            'id' => $servicePage->id,
            'title' => $servicePage->title,
            'short_description' => $servicePage->short_description,
            'long_description' => $servicePage->long_description,
            'created_at' => $servicePage->created_at,
            'updated_at' => $servicePage->updated_at,
            'media' => $media ? [
                'id' => $media->id,
                'name' => $media->name,
                'file_name' => $media->file_name,
                'mime_type' => $media->mime_type,
                'size' => $media->size,
                'original_url' => $media->getUrl(),
            ] : null,
        ];
    }
}
