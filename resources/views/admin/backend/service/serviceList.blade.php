@extends('admin.admin_dashboard')
@section('admin')

<div class="page-content">
    <div class="container-fluid">

        <div class="row mb-3">
            <div class="col-md-6">
                <h4 class="font-size-18">Service List</h4>
            </div>
            <div class="col-md-6 text-end">
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddModal">Add Service</button>
            </div>
        </div>

        @if (session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        <!-- Tabs -->
        <ul class="nav nav-tabs" id="serviceTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="development-tab" data-bs-toggle="tab" data-bs-target="#development" type="button" role="tab" aria-controls="development" aria-selected="true">
                    Development Services
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="creative-tab" data-bs-toggle="tab" data-bs-target="#creative" type="button" role="tab" aria-controls="creative" aria-selected="false">
                    Creative Services
                </button>
            </li>
        </ul>

        <div class="tab-content mt-3">
            <div class="tab-pane fade show active" id="development" role="tabpanel" aria-labelledby="development-tab">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Long Description</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($developmentServices as $key => $service)
                            <tr>
                                <td>{{ $key + 1 }}</td>
                                <td>{{ $service->title }}</td>
                                <td>{{ Str::limit($service->long_desc, 50) }}</td>
                                <td>
                                    @if($service->file_path)
                                        <img src="{{ asset($service->file_path) }}" width="80">
                                    @endif
                                </td>
                                <td>
                                    <span class="badge bg-{{ $service->status ? 'success' : 'danger' }}">
                                        {{ $service->status ? 'Active' : 'Inactive' }}
                                    </span>
                                </td>
                                <td>
                                    <a href="{{ route('service.edit', $service->id) }}" class="btn btn-sm btn-primary">Edit</a>
                                    <form action="{{ route('service.delete', $service->id) }}" method="POST" class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            <div class="tab-pane fade" id="creative" role="tabpanel" aria-labelledby="creative-tab">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Creative Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($creativeServices as $key => $service)
                            <tr>
                                <td>{{ $key + 1 }}</td>
                                <td>{{ $service->creative_title }}</td>
                                <td>{{ Str::limit($service->creative_desc, 60) }}</td>
                                <td>
                                    <span class="badge bg-{{ $service->status ? 'success' : 'danger' }}">
                                        {{ $service->status ? 'Active' : 'Inactive' }}
                                    </span>
                                </td>
                                <td>
                                    <a href="{{ route('service.edit', $service->id) }}" class="btn btn-sm btn-primary">Edit</a>
                                    <form action="{{ route('service.delete', $service->id) }}" method="POST" class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>

<div class="modal fade" id="AddModal" tabindex="-1" aria-labelledby="AddModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <form action="{{ route('service.add') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="AddModalLabel">Add New Service</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-3">
                        <label for="type" class="form-label">Service Type</label>
                        <select name="type" id="serviceType" class="form-select" required>
                            <option value="development">Development</option>
                            <option value="creative">Creative</option>
                        </select>
                    </div>

                    <div id="developmentFields">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" name="title" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="long_desc" class="form-label">Long Description</label>
                            <textarea name="long_desc" class="form-control"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="file_path" class="form-label">Image</label>
                            <input type="file" name="file_path" class="form-control">
                        </div>
                    </div>

                    <div id="creativeFields" style="display:none;">
                        <div class="mb-3">
                            <label for="creative_title" class="form-label">Creative Title</label>
                            <input type="text" name="creative_title" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="creative_desc" class="form-label">Creative Description</label>
                            <textarea name="creative_desc" class="form-control"></textarea>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="status" class="form-label">Status</label>
                        <select name="status" class="form-select">
                            <option value="1" selected>Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    </div>
</div>

<script>
    document.getElementById('serviceType').addEventListener('change', function() {
        const type = this.value;
        document.getElementById('developmentFields').style.display = (type === 'development') ? 'block' : 'none';
        document.getElementById('creativeFields').style.display = (type === 'creative') ? 'block' : 'none';
    });
</script>

@endsection
