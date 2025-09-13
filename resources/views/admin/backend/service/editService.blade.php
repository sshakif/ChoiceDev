@extends('admin.admin_dashboard')
@section('admin')

<div class="page-content">
    <div class="container-fluid">

        <!-- Page Title -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">
                        <i class="fas fa-edit text-primary me-2"></i>
                        Edit Service
                    </h4>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="/admin/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">Edit Service</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        @if (session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="fas fa-check-circle me-2"></i>
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        <!-- Edit Service Form -->
        <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
                <form action="{{ route('service.update', $service->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    <div class="row g-3">
                        <!-- Title -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Service Title</label>
                            <input type="text" class="form-control" name="title" 
                                   value="{{ old('title', $service->title) }}" placeholder="Enter service title">
                            @error('title')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <!-- Short Description -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Short Description</label>
                            <textarea class="form-control" name="short_desc" rows="3"
                                      placeholder="Brief description about the service">{{ old('short_desc', $service->short_desc) }}</textarea>
                            @error('short_desc')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <!-- Long Description -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Long Description</label>
                            <textarea class="form-control" name="long_desc" rows="3"
                                      placeholder="Detailed description about the service">{{ old('long_desc', $service->long_desc) }}</textarea>
                            @error('long_desc')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <!-- Image Upload -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Service Image</label>
                            <input type="file" class="form-control" name="file_path" 
                                   onchange="previewImage(this)" accept="image/*">
                            @error('file_path')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror
                            
                            <!-- Image Preview Below Input -->
                            <div class="mt-3" id="imagePreviewContainer" 
                                 style="{{ !$service->file_path ? 'display:none;' : '' }}">
                                <img src="{{ $service->file_path ? asset($service->file_path) : '#' }}" 
                                     id="imagePreview" class="img-thumbnail" 
                                     style="width: 150px; height: 100px; object-fit: cover;">
                            </div>
                        </div>

                        <!-- Status -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Status</label>
                            <select name="status" class="form-select">
                                <option value="1" {{ $service->status == 1 ? 'selected' : '' }}>Active</option>
                                <option value="0" {{ $service->status == 0 ? 'selected' : '' }}>Inactive</option>
                            </select>
                        </div>

                        <!-- Submit Button -->
                        <div class="col-12 mt-4">
                            <div class="d-flex justify-content-end gap-2">
                                <a href="{{ route('service.list') }}" class="btn btn-secondary px-4">
                                    <i class="fas fa-times me-1"></i> Cancel
                                </a>
                                <button type="submit" class="btn btn-primary px-4">
                                    <i class="fas fa-save me-1"></i> Update
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</div>

<!-- Image Preview Script -->
<script>
    function previewImage(input) {
        const previewContainer = document.getElementById('imagePreviewContainer');
        const preview = document.getElementById('imagePreview');
        
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                preview.src = e.target.result;
                previewContainer.style.display = 'block';
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>


@endsection