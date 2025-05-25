<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class MediaController extends Controller
{
    // Model namespace, change if needed
    protected $modelNamespace = 'App\\Models\\';

    /**
     * Get media for any model and record id.
     * URL: GET /api/media/{model}/{id}
     */
    public function getMedia($model, $id)
    {
        // Convert model name to proper case and namespace
        $modelClass = $this->modelNamespace . ucfirst($model);

        if (!class_exists($modelClass)) {
            return response()->json(['error' => 'Model not found.'], 404);
        }

        try {
            $record = $modelClass::findOrFail($id);

            $mediaItems = $record->getMedia();

            $mediaData = $mediaItems->map(function ($media) {
                return [
                    'id' => $media->id,
                    'name' => $media->name,
                    'file_name' => $media->file_name,
                    'mime_type' => $media->mime_type,
                    'size' => $media->size,
                    'collection_name' => $media->collection_name,
                    'original_url' => $media->getUrl(),
                    'created_at' => $media->created_at,
                ];
            });

            return response()->json($mediaData);

        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Record not found.'], 404);
        }
    }


    /**
     * Upload media to a given model and record id.
     * URL: POST /api/media/{model}/{id}
     * Form Data: file (uploaded file), collection_name (optional)
     */
    public function uploadMedia(Request $request, $model, $id)
    {
        $modelClass = $this->modelNamespace . ucfirst($model);

        if (!class_exists($modelClass)) {
            return response()->json(['error' => 'Model not found.'], 404);
        }

        try {
            $record = $modelClass::findOrFail($id);

            $request->validate([
                'file' => 'required|file|max:5120', // max 5MB
                'collection_name' => 'nullable|string',
            ]);

            $collectionName = $request->input('collection_name', 'default');

            $media = $record->addMediaFromRequest('file')
                ->toMediaCollection($collectionName);

            return response()->json([
                'message' => 'Media uploaded successfully.',
                'media' => [
                    'id' => $media->id,
                    'name' => $media->name,
                    'file_name' => $media->file_name,
                    'mime_type' => $media->mime_type,
                    'size' => $media->size,
                    'collection_name' => $media->collection_name,
                    'original_url' => $media->getUrl(),
                    'created_at' => $media->created_at,
                ]
            ], 201);

        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Record not found.'], 404);
        }
    }

    /**
     * Delete a media item by id.
     * URL: DELETE /api/media/item/{mediaId}
     */
    public function deleteMediaItem($mediaId)
    {
        $media = \Spatie\MediaLibrary\MediaCollections\Models\Media::find($mediaId);

        if (!$media) {
            return response()->json(['error' => 'Media not found.'], 404);
        }

        try {
            $media->delete();

            return response()->json(['message' => 'Media deleted successfully.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete media.', 'details' => $e->getMessage()], 500);
        }
    }
}
