<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaController extends Controller
{
    public function upload(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'file' => 'required|file|mimes:jpg,jpeg,png,webp,pdf,docx|max:2048',
                'model' => 'required|string',
                'id' => 'required|integer'
            ]);

            $fullModel = $this->getModelClass($request->model);

            if (!$fullModel || !class_exists($fullModel)) {
                return response()->json(['error' => 'Invalid model'], 400);
            }

            $instance = $fullModel::findOrFail($request->id);

            $media = $instance->addMediaFromRequest('file')->toMediaCollection('default');

            return response()->json([
                'success' => true,
                'message' => 'File uploaded successfully',
                'media' => [
                    'id' => $media->id,
                    'url' => $media->getUrl(),
                    'full_url' => $media->getFullUrl(),
                    'original_url' => $media->getFullUrl(),
                    'name' => $media->name,
                    'file_name' => $media->file_name,
                    'mime_type' => $media->mime_type,
                    'size' => $media->size,
                    'created_at' => $media->created_at
                ]
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'error' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (ModelNotFoundException $e) {
            return response()->json(['success' => false, 'error' => 'Record not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => 'Upload failed', 'message' => $e->getMessage()], 500);
        }
    }

    public function get($model, $id): JsonResponse
    {
        try {
            $fullModel = $this->getModelClass($model);

            if (!$fullModel || !class_exists($fullModel)) {
                return response()->json(['error' => 'Invalid model'], 400);
            }

            $instance = $fullModel::findOrFail($id);
            $mediaItems = $instance->getMedia('default');

            return response()->json([
                'success' => true,
                'media' => $mediaItems->map(function ($media) {
                    return [
                        'id' => $media->id,
                        'url' => $media->getUrl(),
                        'full_url' => $media->getFullUrl(),
                        'original_url' => $media->getFullUrl(),
                        'name' => $media->name,
                        'file_name' => $media->file_name,
                        'mime_type' => $media->mime_type,
                        'size' => $media->size,
                        'created_at' => $media->created_at
                    ];
                })
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['success' => false, 'error' => 'Record not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => 'Failed to retrieve media'], 500);
        }
    }

    public function delete($id): JsonResponse
    {
        try {
            $media = Media::findOrFail($id);
            
            // Delete the media file and database record
            $media->delete();

            return response()->json([
                'success' => true,
                'message' => 'Media deleted successfully'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['success' => false, 'error' => 'Media not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => 'Failed to delete media', 'message' => $e->getMessage()], 500);
        }
    }

    private function getModelClass($model): ?string
    {
        $map = [
            'user' => \App\Models\User::class,
            'service-page' => \App\Models\ServicePage::class,
            'employee' => \App\Models\Employee::class,
            'faq' => \App\Models\Faq::class,
        ];
        return $map[$model] ?? null;
    }
}