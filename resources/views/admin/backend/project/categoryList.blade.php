@extends('admin.admin_dashboard')
@section('admin')

<div class="page-content">
    <div class="container-fluid">

        <!-- Breadcrumb & Title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <div>
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Home</a></li>
                            <li class="breadcrumb-item active">Project Categories</li>
                        </ol>
                        <h4 class="mb-sm-0 font-size-18 mt-2">Project Categories</h4>
                    </div>
                    <div class="page-title-right">
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddModal">Add Category</button>
                    </div>
                </div>

                @if (session('success'))
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        {{ session('success') }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif
            </div>
        </div>

        <!-- Categories Table -->
        <div class="row table-responsive">
            <div class="col-12">
                <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($categories as $key => $category)
                        <tr>
                            <td>{{ $key + 1 }}</td>
                            <td>{{ $category->title }}</td>
                            <td>
                                @if($category->file_path)
                                    <div style="width:120px; height:80px; overflow:hidden; border-radius:8px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#ViewImage{{ $key }}">
                                        <img src="{{ asset($category->file_path) }}" alt="category image" style="width:100%; height:100%; object-fit:cover;">
                                    </div>
                                @else
                                    <div style="width:120px; height:80px; overflow:hidden; border-radius:8px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#ViewImage{{ $key }}">
                                        <img src="{{ asset('backend-assets/images/default-image.png') }}" alt="default image" style="width:100%; height:100%; object-fit:cover;">
                                    </div>
                                @endif
                            </td>
                            <td>
                                @if($category->status)
                                    <span class="badge bg-success">Active</span>
                                @else
                                    <span class="badge bg-danger">Inactive</span>
                                @endif
                            </td>
                            <td>{{ $category->created_at->format('d M, Y') }}</td>
                            <td class="d-flex gap-2">
                                <a href="{{ route('project.category.edit', $category->id) }}" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
                                <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#DeleteModal{{ $key }}">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>

                        <!-- View Image Modal -->
                        <div class="modal fade" id="ViewImage{{ $key }}" tabindex="-1" aria-labelledby="ViewImageLabel{{ $key }}" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-body p-0">
                                        <img src="{{ $category->file_path ? asset($category->file_path) : asset('backend-assets/images/default-image.png') }}" alt="Category Image" class="img-fluid w-100" style="border-radius:8px;">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Delete Confirmation Modal -->
                        <div class="modal fade" id="DeleteModal{{ $key }}" tabindex="-1" aria-labelledby="DeleteModalLabel{{ $key }}" aria-hidden="true">
                            <div class="modal-dialog">
                                <form action="{{ route('project.category.delete', $category->id) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="DeleteModalLabel{{ $key }}">Delete Confirmation</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to delete category: <strong>{{ $category->title }}</strong>?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-danger">Yes, Delete</button>
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>

<!-- Add Category Modal -->
<div class="modal fade" id="AddModal" tabindex="-1" aria-labelledby="AddModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <form action="{{ route('project.category.add') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="AddModalLabel">Add New Category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <!-- Title Field -->
                    <div class="mb-3">
                        <label for="title" class="form-label">Category Title <span class="text-danger">*</span></label>
                        <input type="text" name="title" id="title" class="form-control" value="{{ old('title') }}" required>
                        @error('title')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    <!-- Image Upload with Preview -->
                    <div class="mb-3">
                        <label for="file_path" class="form-label">Category Image</label>
                        <input type="file" name="file_path" id="file_path" class="form-control" accept="image/*" onchange="previewImage(this)">
                        @error('file_path')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                        <div id="imagePreview" class="mt-2" style="display:none;">
                            <img id="preview" src="#" alt="Image Preview" style="max-width: 100px; max-height: 100px; border: 1px solid #ddd; border-radius: 4px; padding: 5px;"/>
                        </div>
                    </div>

                    <!-- Status Selection -->
                    <div class="mb-3">
                        <label class="form-label">Status <span class="text-danger">*</span></label>
                        <select name="status" class="form-select">
                            <option value="1" selected>Active</option>
                            <option value="0">Inactive</option>
                        </select>
                        @error('status')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-save"></i> Save Category
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>

<!-- Image Preview Script -->
<script>
    function previewImage(input) {
        const preview = document.getElementById('preview');
        const imagePreview = document.getElementById('imagePreview');
        
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                preview.src = e.target.result;
                imagePreview.style.display = 'block';
            }
            
            reader.readAsDataURL(input.files[0]);
        } else {
            imagePreview.style.display = 'none';
            preview.src = '#';
        }
    }
</script>

<style>
    .status-select {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        border-radius: 0.2rem;
    }
    
    .status-select:focus {
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
</style>

@endsection