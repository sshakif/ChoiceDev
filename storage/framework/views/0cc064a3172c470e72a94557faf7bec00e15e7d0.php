
<?php $__env->startSection('admin'); ?>

<div class="page-content">
    <div class="container-fluid">

        <!-- Page Title -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">
                        <i class="fas fa-edit text-primary me-2"></i>
                        Edit Project Category
                    </h4>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="/admin/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">Edit Category</li>
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

        <!-- Edit Category Form -->
        <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
                <form action="<?php echo e(route('project.category.update', $category->id)); ?>" method="POST" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('PUT'); ?>

                    <div class="row g-3">
                        <!-- Title -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Category Title</label>
                            <input type="text" class="form-control" name="title" 
                                   value="<?php echo e(old('title', $category->title)); ?>" placeholder="Enter category title">
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

                        <!-- Image Upload -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Category Image</label>
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
                                 style="<?php echo e(!$category->file_path ? 'display:none;' : ''); ?>">
                                <img src="<?php echo e($category->file_path ? asset($category->file_path) : '#'); ?>" 
                                     id="imagePreview" class="img-thumbnail" 
                                     style="width: 150px; height: 100px; object-fit: cover;">
                            </div>
                        </div>

                        <!-- Status -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Status</label>
                            <select name="status" class="form-select">
                                <option value="1" <?php echo e($category->status == 1 ? 'selected' : ''); ?>>Active</option>
                                <option value="0" <?php echo e($category->status == 0 ? 'selected' : ''); ?>>Inactive</option>
                            </select>
                        </div>

                        <!-- Submit Button -->
                        <div class="col-12 mt-4">
                            <div class="d-flex justify-content-end gap-2">
                                <a href="<?php echo e(route('project.category.list')); ?>" class="btn btn-secondary px-4">
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

<style>
    .card {
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .form-control, .form-select {
        border-radius: 6px;
        padding: 8px 12px;
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
<?php echo $__env->make('admin.admin_dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Hybritech\ChoiceDev\resources\views/admin/backend/project/editCategory.blade.php ENDPATH**/ ?>