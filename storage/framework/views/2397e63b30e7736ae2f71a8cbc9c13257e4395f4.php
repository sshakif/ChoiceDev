
<?php $__env->startSection('admin'); ?>

<div class="page-content">
    <div class="container-fluid">

        <!-- Page Title -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">
                        <i class="fas fa-edit text-primary me-2"></i>
                        Edit About Us
                    </h4>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="/admin/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">Edit About Us</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <?php if(session('success')): ?>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="fas fa-check-circle me-2"></i>
                <?php echo e(session('success')); ?>

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        <?php endif; ?>

        <!-- Edit About Us Form -->
        <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
                <form action="<?php echo e(route('about.update', $about->id)); ?>" method="POST" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('PUT'); ?>

                    <div class="row g-3">
                        <!-- Title -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Title</label>
                            <input type="text" class="form-control" name="title" 
                                   value="<?php echo e(old('title', $about->title)); ?>" placeholder="Enter about us title">
                            <?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                <div class="text-danger small mt-1"><?php echo e($message); ?></div>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                        <!-- Subtitle -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Subtitle</label>
                            <input type="text" class="form-control" name="subtitle" 
                                   value="<?php echo e(old('subtitle', $about->subtitle)); ?>" placeholder="Enter a subtitle">
                            <?php $__errorArgs = ['subtitle'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                <div class="text-danger small mt-1"><?php echo e($message); ?></div>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                        <!-- Description -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Description</label>
                            <div class="border rounded p-2 bg-light">
                                <div id="quill-editor" style="min-height: 200px;"></div>
                                <textarea name="desc" id="quill-editor-area" class="d-none">
                                    <?php echo e(trim(old('desc', $about->desc))); ?>

                                </textarea>
                            </div>
                            <?php $__errorArgs = ['desc'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                <div class="text-danger small mt-1"><?php echo e($message); ?></div>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                        <!-- Image Upload -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">About Us Image</label>
                            <input type="file" class="form-control" name="file_path" 
                                   onchange="previewImage(this)" accept="image/*">
                            <?php $__errorArgs = ['file_path'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                <div class="text-danger small mt-1"><?php echo e($message); ?></div>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                            
                            <!-- Image Preview Below Input -->
                            <div class="mt-3" id="imagePreviewContainer" 
                                 style="<?php echo e(!$about->file_path ? 'display:none;' : ''); ?>">
                                <img src="<?php echo e($about->file_path ? asset($about->file_path) : '#'); ?>" 
                                     id="imagePreview" class="img-thumbnail" 
                                     style="width: 150px; height: 100px; object-fit: cover;">
                            </div>
                        </div>

                        <!-- Status -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Status</label>
                            <select name="status" class="form-select">
                                <option value="1" <?php echo e($about->status == 1 ? 'selected' : ''); ?>>Active</option>
                                <option value="0" <?php echo e($about->status == 0 ? 'selected' : ''); ?>>Inactive</option>
                            </select>
                        </div>

                        <!-- Submit Button -->
                        <div class="col-12 mt-4">
                            <div class="d-flex justify-content-end gap-2">
                                <a href="<?php echo e(route('about.list')); ?>" class="btn btn-secondary px-4">
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

<!-- Quill Editor Script -->
<script src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" rel="stylesheet">

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Quill editor
        if (document.getElementById('quill-editor-area')) {
            const quill = new Quill('#quill-editor', {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        ['clean']
                    ]
                }
            });

            // Set initial content and remove extra whitespace
            const initialContent = `<?php echo trim(preg_replace('/\s+/', ' ', old('desc', $about->desc))); ?>`;
            quill.root.innerHTML = initialContent;
            document.getElementById('quill-editor-area').value = initialContent;

            // Update hidden textarea on content change
            quill.on('text-change', function() {
                const content = quill.root.innerHTML;
                document.getElementById('quill-editor-area').value = content;
            });
        }
    });
</script>

<style>
    .card {
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .form-control, .form-select {
        border-radius: 6px;
        padding: 8px 12px;
    }
    
    #quill-editor {
        border: none;
        background: white;
    }
    
    .ql-toolbar {
        border-radius: 6px 6px 0 0;
        border-color: #dee2e6 !important;
    }
    
    .ql-container {
        border-radius: 0 0 6px 6px;
        border-color: #dee2e6 !important;
    }
    
    .img-thumbnail {
        border-radius: 6px;
        border: 1px solid #dee2e6;
    }
    
    .btn {
        border-radius: 6px;
        padding: 8px 16px;
    }
</style>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.admin_dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Hybritech\ChoiceDev\resources\views/admin/backend/about/editAbout.blade.php ENDPATH**/ ?>