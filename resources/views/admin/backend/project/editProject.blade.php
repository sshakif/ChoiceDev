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
                        Edit Project
                    </h4>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="/admin/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">Edit Project</li>
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

        <!-- Edit Project Form -->
        <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
                <form action="{{ route('project.update', $project->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    <div class="row g-3">
                        <!-- Title -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Project Title</label>
                            <input type="text" class="form-control" name="title" 
                                   value="{{ old('title', $project->title) }}" placeholder="Enter project title">
                            @error('title')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <!-- Status -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Status</label>
                            <select name="status" class="form-select">
                                <option value="1" {{ $project->status == 1 ? 'selected' : '' }}>Active</option>
                                <option value="0" {{ $project->status == 0 ? 'selected' : '' }}>Inactive</option>
                            </select>
                        </div>

                        <!-- Categories -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Categories</label>
                            <select name="categories[]" class="form-select select2-multiple" multiple="multiple">
                                @foreach($categories as $category)
                                    <option value="{{ $category->id }}" 
                                        {{ in_array($category->id, old('categories', $project->categories->pluck('id')->toArray())) ? 'selected' : '' }}>
                                        {{ $category->title }}
                                    </option>
                                @endforeach
                            </select>
                            @error('categories')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <!-- Short Description -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Short Description</label>
                            <textarea class="form-control" name="short_desc" rows="3"
                                      placeholder="Brief description">{{ old('short_desc', $project->short_desc) }}</textarea>
                            @error('short_desc')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <!-- Long Description -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Long Description</label>
                            <textarea class="form-control" name="long_desc" rows="3"
                                      placeholder="Detailed description">{{ old('long_desc', $project->long_desc) }}</textarea>
                            @error('long_desc')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <!-- Banner Image -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Banner Image</label>
                            <input type="file" class="form-control" name="banner_image" 
                                   onchange="previewBannerImage(this)" accept="image/*">
                            @error('banner_image')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror

                            <div class="mt-2" id="bannerPreviewContainer" 
                                 style="{{ !$project->banner_image ? 'display:none;' : '' }}">
                                <img src="{{ $project->banner_image ? asset($project->banner_image) : '#' }}" 
                                     id="bannerPreview" class="img-thumbnail" 
                                     style="width: 200px; height: 150px; object-fit: cover;">
                            </div>
                        </div>

                        <!-- Gallery Images -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Gallery Images</label>
                            <input type="file" class="form-control" name="project_images[]" 
                                   id="galleryImages" multiple accept="image/*">
                            @error('project_images')
                                <div class="text-danger small mt-1">{{ $message }}</div>
                            @enderror

                            <div class="mt-2">
                                <h6 class="mb-2">Existing Images:</h6>
                                <div class="d-flex flex-wrap gap-2" id="existingGallery">
                                    @foreach($project->images as $image)
                                        <div class="position-relative" style="width: 120px;">
                                            <img src="{{ asset($image->file_path) }}" 
                                                 class="img-thumbnail" 
                                                 style="width: 100%; height: 100px; object-fit: cover;">
                                            <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0"
                                                    onclick="removeGalleryImage(this, {{ $image->id }})">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    @endforeach
                                </div>
                            </div>

                            <div class="mt-3 d-flex flex-wrap gap-2" id="galleryPreview"></div>
                        </div>

                        <!-- Submit -->
                        <div class="col-12 mt-4">
                            <div class="d-flex justify-content-end gap-2">
                                <a href="{{ route('project.list') }}" class="btn btn-secondary px-4">
                                    <i class="fas fa-times me-1"></i> Cancel
                                </a>
                                <button type="submit" class="btn btn-primary px-4" onclick="prepareForm()">
                                    <i class="fas fa-save me-1"></i> Update
                                </button>
                            </div>
                        </div>
                    </div> <!-- row -->
                </form>
            </div>
        </div>

    </div>
</div>

{{-- Scripts --}}
<script>
    function previewBannerImage(input) {
        const previewContainer = document.getElementById('bannerPreviewContainer');
        const preview = document.getElementById('bannerPreview');

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
                previewContainer.style.display = 'block';
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    document.getElementById('galleryImages').addEventListener('change', function() {
        const galleryPreview = document.getElementById('galleryPreview');
        galleryPreview.innerHTML = '';

        if (this.files && this.files.length > 0) {
            Array.from(this.files).forEach(file => {
                const reader = new FileReader();

                reader.onload = function(e) {
                    const imgContainer = document.createElement('div');
                    imgContainer.style.width = '120px';
                    imgContainer.style.height = '100px';
                    imgContainer.style.position = 'relative';

                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'img-thumbnail';
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.objectFit = 'cover';

                    imgContainer.appendChild(img);
                    galleryPreview.appendChild(imgContainer);
                };

                reader.readAsDataURL(file);
            });
        }
    });

    function removeGalleryImage(button, imageId) {
        if (confirm('Are you sure you want to remove this image?')) {
            const form = button.closest('form');
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'removed_images[]';
            input.value = imageId;
            form.appendChild(input);

            button.closest('div.position-relative').remove();
        }
    }
</script>

@endsection
