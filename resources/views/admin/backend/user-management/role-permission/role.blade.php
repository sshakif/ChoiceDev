@extends('admin.admin_dashboard')
@section('admin')
    <div class="page-content">
        <div class="container-fluid">
            <!-- Start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <div>
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                <li class="breadcrumb-item active">Role List</li>
                            </ol>

                            <h4 class="mb-sm-0 font-size-18 mt-2">Role & Permission</h4>
                        </div>


                        <div class="page-title-right">
                            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Create
                                Role
                            </button>

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
            <!-- End page title -->

            <div class="row">
                <div class="col-12">

                    <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Role Name</th>
                                <th scope="col">Permission</th>



                                <th scope="col">Actions </th>
                            </tr>
                        </thead>
                        <tbody>

                            @foreach ($roles as $key => $role)
                                <tr>
                                    <th scope="row"> #{{ $key + 1 }}</th>
                                    <td class="vam">{{ $role->name }}</td>
                                    <td class="vam">
                                        <div style="flex-direction: column;display: flex">
                                            @foreach ($role->permissions as $permission)
                                                <span class="badge rounded-pill text-bg-primary m-1">
                                                    {{ ucwords(str_replace('-', ' ', $permission->name)) }}</span>
                                            @endforeach
                                        </div>
                                    </td>

                                    <td class="vam ">
                                        <div class="d-flex">
                                            @if (Auth::check())
                                                @if (Auth::user()->role == 'super-admin')
                                                    <button class="btn btn-info btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal1{{ $role->id }}">Edit</button>
                                                    <form action="{{ route('roles.delete', $role->id) }}"
                                                        id="delete{{ $role->id }}" method="POST">
                                                        @csrf
                                                        @method('DELETE')

                                                        <a class="btn btn-danger btn-sm delete-button ms-2" href=""
                                                            type="submit"
                                                            onclick="event.preventDefault(); document.getElementById('delete{{ $role->id }}').submit();">
                                                            Delete
                                                        </a>
                                                    </form>
                                                @elseif (Auth::user()->role == 'admin' && $role->name != 'super-admin')
                                                    <button class="btn btn-info btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal1{{ $role->id }}">Edit</button>
                                                    <form action="{{ route('roles.delete', $role->id) }}"
                                                        id="delete{{ $role->id }}" method="POST">
                                                        @csrf
                                                        @method('DELETE')

                                                        <a class="btn btn-danger btn-sm delete-button ms-2" href=""
                                                            type="submit"
                                                            onclick="event.preventDefault(); document.getElementById('delete{{ $role->id }}').submit();">
                                                            Delete
                                                        </a>
                                                    </form>
                                                @endif
                                            @endif

                                        </div>

                                    </td>
                                </tr>
                                <div class="modal fade" id="exampleModal1{{ $role->id }}" tabindex="-1"
                                    aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Update Role</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div
                                                    class="ps-widget bgc-white bdrs4 p30  overflow-hidden position-relative">

                                                    <form class="form-style1"
                                                        action="{{ route('roles.update', $role->id) }}" method="POST">
                                                        @csrf
                                                        @method('PUT')
                                                        <div class="row">

                                                            <div class="mb20">
                                                                <h5> Role Name</h5>

                                                                <input type="text" class="form-control" name="role_name"
                                                                    id="text" value="{{ $role->name }}">
                                                            </div>
                                                            <h5 class="mt-2">Permissions</h5>

                                                            @foreach ($permissions as $key => $permission)
                                                                <div>
                                                                    <div>
                                                                        <input class="checkbox" type="checkbox"
                                                                            name="permission[]"
                                                                            value="{{ $permission->id }}"
                                                                            @if ($role->hasPermissionTo($permission)) checked @endif
                                                                            id="check-{{ $key }}">
                                                                        <label for="check-{{ $key }}">
                                                                            <span class="checkbox-text">
                                                                                {{ ucwords(str_replace('-', ' ', $permission->name)) }}
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            @endforeach

                                                            <div class="col-md-12">
                                                                <div class="text-start">
                                                                    <button type="submit" class="btn btn-info btn-sm mt-2"
                                                                        href="page-contact.html">Update Role<i
                                                                            class="fal fa-arrow-right-long"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </tbody>
                    </table>


                </div> <!-- end col -->
            </div> <!-- end row -->
        </div> <!-- container-fluid -->
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Role</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="ps-widget bgc-white bdrs4 p30  overflow-hidden position-relative">

                        <div class="col-xl">
                            <form class="form-style1" action="{{ route('store.role') }}" method="post">
                                @csrf
                                <div class="row">

                                    <div class="mb20">
                                        <h5>Role Name </h5>

                                        <input type="text" class="form-control" name="role_name" placeholder="">
                                    </div>

                                    <h5 class="mt-2">Permissions</h5>

                                    <div class="permission-list">

                                        @foreach ($permissions as $key => $permission)
                                            <div
                                                class="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20 scroll">
                                                <label class="custom_checkbox fz14 ff-heading">

                                                    <input type="checkbox" name="permission[]"
                                                        value="{{ $permission->name }}" id="check-{{ $key }}">
                                                    <span class="checkmark"></span>

                                                    {{ ucwords(str_replace('-', ' ', $permission->name)) }}
                                                </label>
                                            </div>
                                        @endforeach
                                    </div>
                                    <div class="col-md-12">
                                        <div class="text-start">
                                            <button type="submit" class="btn btn-info btn-sm mt-2">
                                                Create Role
                                                <i class="fal fa-arrow-right-long"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Fix Delete Confirmation -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Handle "See More" click event
            document.querySelectorAll(".see-more-btn").forEach(function(btn) {
                btn.addEventListener("click", function() {
                    let fullDescription = this.getAttribute("data-desc");
                    document.getElementById("modalDescription").innerHTML = fullDescription;
                });
            });

            // Handle delete confirmation
            document.querySelectorAll(".delete-button").forEach(function(button) {
                button.addEventListener("click", function() {
                    let aboutId = this.getAttribute("data-id");
                    if (confirm("Are you sure you want to delete this?")) {
                        document.getElementById("delete-form-" + aboutId).submit();
                    }
                });
            });
        });
    </script>

    <!-- ✅ Fix Long Description Styling -->
    <style>
        .description-box {
            max-width: 250px;
            /* Prevents the column from being too wide */
            max-height: 60px;
            /* Limits height */
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .description-box .see-more-btn {
            display: block;
            color: blue;
            text-decoration: underline;
            cursor: pointer;
            font-size: 12px;
        }
    </style>
@endsection
