@extends('admin.admin_dashboard')
@section('admin')
    <div class="page-content">
        <div class="container-fluid">
            <div class="row">
                <div class="">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <div>
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="/admin/dashboard">Home</a></li>
                                <li class="breadcrumb-item active">Edit Category</li>
                            </ol>

                            <h4 class="mb-sm-0 font-size-18 mt-2">Edit Category</h4>
                        </div>
                        <div class="page-title-right">
                            
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

        </div>
    </div>

    {{-- add category dialog --}}
    <div>
        <div style="border:1px solid #ddd; padding:24px; border-radius:12px; width:80%; margin:auto;">
            <div>
                <h4 style="margin-bottom:8px; padding:9px 0px; border-bottom:1px solid #ededed;">Edit Category</h4>

                <div class="modal-body">
                    <div class="ps-widget bgc-white bdrs4 p30  overflow-hidden position-relative">

                        <div class="col-xl">

                            <form class="form-style1" action="{{ route('category.update', $category->id) }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="row">
                                    <div class="mb20">
                                        <h6> Category Name </h6>

                                        <input value="{{ $category->name }}" type="text" class="form-control"
                                            name="name" placeholder="">
                                        @error('name')
                                            <div class="text-danger">
                                                {{ $message }}
                                            </div>

                                            @endif
                                        </div>
                                        <div class="mb20 mt-2">
                                            <h6 class="my-1">Category Image </h6>
                                            <div class="d-flex gap-5 align-items-center">
                                                <input type="file" style="width:100%" class="file-up form-control" name="image"
                                                    placeholder="">
                                                <div style="width: 200px; height:200px; overflow:hidden; "  class="img-bar">
                                                    <img style="background-size: cover; height: 80%; width:100%; border-radius:12px;" class="preview-img w-full h-full "
                                                    src="{{ asset($category->file_path) }}"    alt="">
                                                </div>

                                            </div>



                                        </div>
                                        <div class="mb-8 mt-2">
                                            <h5 class="my-1">Write Note</h5>
                                            <div class="mb-1" style="max-height: 300px; overflow-y:scroll;">
                                                <div id="quill-editor"></div>
                                                <textarea name="note" id="quill-editor-area" rows="3" class="d-none">
                                                        {!! $category->note !!}
                                                    </textarea>

                                                @error('note')
                                                        <div class="text-danger">
                                                            {{ $message }}
                                                        </div>

                                                        @endif
                                                    </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="text-start">
                                                    <button type="submit" class="btn btn-info  mt-2">
                                                        Edit Category
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



        {{-- end dailog --}}
        <!-- Fix Delete Confirmation -->

        <script>
            let file = document.querySelector('.file-up');
            let img_preview= document.querySelector('.preview-img');
            
            file.addEventListener('change', (e) => {
                document.querySelector('.footer').style.position ='relative';
                file.style.width='50%';
                document.querySelector('.footer').style.position ='relative';
                document.querySelector('.img-bar').style.display= 'block';
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = function(e) {
                    img_preview.src = e.target.result;
                }
            })
        </script>


        <script>
            document.addEventListener('DOMContentLoaded', function() {
                if (document.getElementById('quill-editor-area')) {
                    var editor = new Quill('#quill-editor', {
                        theme: 'snow'
                    });
                    var quillEditor = document.getElementById('quill-editor-area');
                    editor.on('text-change', function() {
                        quillEditor.value = editor.root.innerHTML;
                    });

                    editor.root.innerHTML = quillEditor.value;


                    quillEditor.addEventListener('input', function() {
                        editor.root.innerHTML = quillEditor.value;
                    });
                }
            });
        </script>


        <script src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js"></script>
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
