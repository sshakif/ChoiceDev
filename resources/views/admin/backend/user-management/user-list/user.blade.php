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
                                <li class="breadcrumb-item active">User List</li>
                            </ol>

                            <h4 class="mb-sm-0 font-size-18 mt-2">User List</h4>
                        </div>
                        <div class="page-title-right">
                            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Create
                                User
                            </button>
                        </div>
                    </div>
                    @if (session('success'))
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            {{ session('success') }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    @endif

                    @if (session('error'))
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            {{ session('error') }}
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
                                <th scope="col"> Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Assign </th>
                                <th scope="col">Create Date </th>
                                <th scope="col">Actions </th>
                            </tr>
                        </thead>
                        <tbody>

                            @foreach ($users as $key => $user)
                                <tr>
                                    <th scope="row"> #{{ $key + 1 }}</th>
                                    <td class="vam">{{ $user->name }}</td>

                                    <td class="vam">{{ $user->email }}</td>
                                    <td class="vam">
                                        @if ($user->getRoleNames()->isEmpty())
                                            <span class="pending-style style1">No Role Assigned</span>
                                        @else
                                            @foreach ($user->getRoleNames() as $role)
                                                <span class="pending-style style2">{{ $role }}</span>
                                            @endforeach
                                        @endif
                                    </td>

                                    <td class="vam">
                                        {{ \Carbon\Carbon::parse($user->created_at)->format('m, M, Y') }}
                                    </td>
                                    <td class="vam d-flex">



                                        @if (Auth::check())
                                            @if (Auth::user()->role == 'super-admin')
                                                <button class=" btn btn-info btn-sm me-2" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal{{ $key }}">

                                                    Assign Role
                                                </button>
                                                <button class=" btn btn-primary btn-sm" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModalEdit{{ $user->id }}">

                                                    Edit
                                                </button>
                                            @elseif (Auth::user()->role == 'admin' && $user->role != 'super-admin')
                                                <button class=" btn btn-info btn-sm me-2" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal{{ $key }}">

                                                    Assign Role
                                                </button>
                                                <button class=" btn btn-primary btn-sm" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModalEdit{{ $user->id }}">

                                                    Edit
                                                </button>
                                            @endif
                                        @endif
                                    </td>
                                </tr>



                                <div class="modal fade" id="exampleModal{{ $key }}" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-sm">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Assign Role</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div
                                                    class="ps-widget bgc-white bdrs4 p30  overflow-hidden position-relative">

                                                    <div class="col-xl">
                                                        <form class="form-style1"
                                                            action="{{ route('users.assign-role', $user->id) }}"
                                                            method="POST">
                                                            @csrf
                                                            <div class="row">
                                                                <div class="mb20">
                                                                    <div class="form-style1">
                                                                        <label
                                                                            class="heading-color ff-heading fw500 mb10">Role
                                                                            name</label>
                                                                        <div class="">
                                                                            <div class="from-control">
                                                                                <select name="role" class="form-control">
                                                                                    @foreach ($roles as $role)
                                                                                        <option
                                                                                            value="{{ $role->name }}">
                                                                                            {{ $role->name }}</option>
                                                                                    @endforeach
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                                <div class="col-md-12">
                                                                    <div class="text-start">
                                                                        <button type="submit"
                                                                            class="btn btn-info btn-sm mt-2"
                                                                            href="">Assign Role<i
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
                                </div>


                                <!-- Modal for Edit -->
                                <div class="modal fade" id="exampleModalEdit{{ $user->id }}" tabindex="-1"
                                    aria-labelledby="editUserLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="editUserLabel">Edit User {{ $user->name }}
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form class="form-style1" action="{{ route('user.update', $user->id) }}"
                                                    method="POST">
                                                    @csrf
                                                    @method('PUT')
                                                    <div class="row">

                                                        <div class="mb20">
                                                            <h5>Name</h5>

                                                            <input type="text" class="form-control" name="name"
                                                                id="text" value="{{ $user->name }}">
                                                        </div>

                                                        <div class="mb20">
                                                            <h5>Email</h5>

                                                            <input type="text" class="form-control" name="email"
                                                                id="text" value="{{ $user->email }}">
                                                        </div>

                                                        <div class="mb20">
                                                            <h5>Password</h5>

                                                            <input type="password" class="form-control" name="password">
                                                        </div>



                                                        <div class="col-md-12">
                                                            <div class="text-start">
                                                                <button type="submit" class="btn btn-info btn-sm mt-2"
                                                                    href="page-contact.html">Update User<i
                                                                        class="fal fa-arrow-right-long"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
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
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create User</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="ps-widget bgc-white bdrs4 p30  overflow-hidden position-relative">

                        <div class="col-xl">
                            <form class="form-style1" action="{{ route('store.user') }}" method="post">
                                @csrf
                                <div class="row">

                                    <div class="mb20">
                                        <h5>Name <span class="text-danger">*</span></h5>

                                        <input type="text" class="form-control" name="name" placeholder=""
                                            required>
                                    </div>
                                    <div class="mb20">
                                        <h5>Email <span class="text-danger">*</span></h5>
                                        <input type="text" style="display:none" name="email">
                                        <input type="text" class="form-control" name="email" placeholder=""
                                            required>
                                    </div>
                                    <div class="mb20">
                                        <h5>Password <span class="text-danger">*</span></h5>
                                        <input type="password" style="display:none" name="password">
                                        <input type="password" class="form-control" name="password" placeholder=""
                                            autocomplete="off" required>
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
