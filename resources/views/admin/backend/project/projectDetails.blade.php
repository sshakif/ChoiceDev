@extends('admin.admin_dashboard')
@section('admin')

<div class="page-content">
    <div class="container-fluid">

        <!-- Breadcrumb -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <div>
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Home</a></li>
                            <li class="breadcrumb-item"><a href="{{ route('project.list') }}">Projects</a></li>
                            <li class="breadcrumb-item active">Project Details</li>
                        </ol>
                        <h4 class="mb-sm-0 mt-2">Project Details</h4>
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Content -->
        <div class="row mt-3">
            <!-- Left Column -->
            <div class="col-lg-6 mb-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body">

                       <!-- Project Title & Status -->
                        <h5 class="mb-3">
                            <span class="text-muted">Project Title:</span>
                            <span class="ms-2 fw-semibold">{{ $project->title }}</span>
                        </h5>

                        <div class="mb-3">
                            <span class="badge bg-{{ $project->status ? 'success' : 'danger' }} px-3 py-2">
                                {{ $project->status ? 'Active' : 'Inactive' }}
                            </span>
                            <span class="text-muted ms-3">
                                <i class="far fa-calendar-alt me-1"></i>
                                {{ $project->created_at->format('d M, Y') }}
                            </span>
                        </div>

                        <!-- Categories -->
                        <h5 class="mt-4"><i class="fas fa-tags text-info me-2"></i>Categories</h5>
                        <div class="mb-3">
                            @forelse($project->categories as $category)
                                <span class="badge bg-info text-white me-2 mb-2">{{ $category->title }}</span>
                            @empty
                                <span class="text-muted">No categories</span>
                            @endforelse
                        </div>

                        <!-- Short Description -->
                        <h5><i class="fas fa-align-left text-warning me-2"></i>Short Description</h5>
                        <p class="bg-light p-3 rounded small">{{ $project->short_desc }}</p>

                        <!-- Long Description -->
                        <h5 class="mt-4"><i class="fas fa-file-alt text-secondary me-2"></i>Detailed Description</h5>
                        <div class="bg-light p-3 rounded small" style="white-space: pre-line;">
                            {!! nl2br(e($project->long_desc ?? 'No detailed description.')) !!}
                        </div>

                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="col-lg-6 mb-4">
                <!-- Banner Image -->
                <div class="card shadow-sm mb-4">
                    <div class="card-body">
                        <h5 class="mb-3"><i class="fas fa-image text-primary me-2"></i>Banner Image</h5>
                        <img src="{{ $project->banner_image ? asset($project->banner_image) : asset('backend-assets/images/default-image.png') }}"
                             alt="Banner Image"
                             class="img-fluid rounded w-100"
                             style="height: 250px; object-fit: cover;">
                    </div>
                </div>

                <!-- Gallery -->
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="mb-3"><i class="fas fa-images text-primary me-2"></i>Gallery ({{ $project->images->count() }})</h5>
                        @if($project->images->count())
                            <div class="row g-3">
                                @foreach($project->images as $image)
                                    <div class="col-4">
                                        <a href="{{ asset($image->file_path) }}" data-lightbox="gallery">
                                            <img src="{{ asset($image->file_path) }}"
                                                 class="img-fluid rounded shadow-sm"
                                                 style="height: 100px; object-fit: cover; width: 100%; transition: transform 0.2s;"
                                                 onmouseover="this.style.transform='scale(1.05)'"
                                                 onmouseout="this.style.transform='scale(1)'">
                                        </a>
                                    </div>
                                @endforeach
                            </div>
                        @else
                            <p class="text-muted text-center py-3">No gallery images available.</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

@endsection
