
<?php $__env->startSection('admin'); ?>

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

        <?php if(session('success')): ?>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="fas fa-check-circle me-2"></i>
                <?php echo e(session('success')); ?>

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        <?php endif; ?>

        <!-- Edit Project Form -->
        <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
                <form action="<?php echo e(route('project.update', $project->id)); ?>" method="POST" enctype="multipart/form-data" id="projectForm">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('PUT'); ?>

                    <div class="row g-3">
                        <!-- Title -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Project Title</label>
                            <input type="text" class="form-control" name="title" 
                                   value="<?php echo e(old('title', $project->title)); ?>" placeholder="Enter project title">
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

                        <!-- Status -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Status</label>
                            <select name="status" class="form-select">
                                <option value="1" <?php echo e($project->status == 1 ? 'selected' : ''); ?>>Active</option>
                                <option value="0" <?php echo e($project->status == 0 ? 'selected' : ''); ?>>Inactive</option>
                            </select>
                        </div>

                        <!-- Categories - Updated to match projectList.blade -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">Categories</label>
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle w-100 text-start" type="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <?php if(count($project->categories) > 0): ?>
                                        <?php echo e(count($project->categories)); ?> categories selected
                                    <?php else: ?>
                                        Select Categories
                                    <?php endif; ?>
                                </button>
                                <ul class="dropdown-menu w-100" aria-labelledby="categoryDropdown">
                                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li>
                                            <div class="form-check ms-2">
                                                <input class="form-check-input category-checkbox" type="checkbox" 
                                                       name="categories[]" value="<?php echo e($category->id); ?>" 
                                                       id="category<?php echo e($category->id); ?>"
                                                       <?php echo e(in_array($category->id, old('categories', $project->categories->pluck('id')->toArray())) ? 'checked' : ''); ?>>
                                                <label class="form-check-label" for="category<?php echo e($category->id); ?>">
                                                    <?php echo e($category->title); ?>

                                                </label>
                                            </div>
                                        </li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </ul>
                            </div>
                            <div id="selectedCategories" class="mt-2 d-flex flex-wrap gap-2">
                                <?php $__currentLoopData = $project->categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <span class="badge bg-primary" data-category-id="<?php echo e($category->id); ?>">
                                        <?php echo e($category->title); ?>

                                        <input type="hidden" name="categories[]" value="<?php echo e($category->id); ?>">
                                    </span>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </div>
                            <?php $__errorArgs = ['categories'];
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

                        <!-- Short Description -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Short Description</label>
                            <textarea class="form-control" name="short_desc" rows="3"
                                      placeholder="Brief description"><?php echo e(old('short_desc', $project->short_desc)); ?></textarea>
                            <?php $__errorArgs = ['short_desc'];
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

                        <!-- Long Description -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Long Description</label>
                            <textarea class="form-control" name="long_desc" rows="3"
                                      placeholder="Detailed description"><?php echo e(old('long_desc', $project->long_desc)); ?></textarea>
                            <?php $__errorArgs = ['long_desc'];
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

                        <!-- Banner Image -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Banner Image</label>
                            <input type="file" class="form-control" name="banner_image" 
                                   onchange="previewBannerImage(this)" accept="image/*">
                            <?php $__errorArgs = ['banner_image'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                <div class="text-danger small mt-1"><?php echo e($message); ?></div>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>

                            <div class="mt-2" id="bannerPreviewContainer" 
                                 style="<?php echo e(!$project->banner_image ? 'display:none;' : ''); ?>">
                                <img src="<?php echo e($project->banner_image ? asset($project->banner_image) : '#'); ?>" 
                                     id="bannerPreview" class="img-thumbnail" 
                                     style="width: 200px; height: 150px; object-fit: cover;">
                            </div>
                        </div>

                        <!-- Gallery Images Section -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Gallery Images</label>
                            
                            <!-- Existing Images -->
                            <div class="mb-3">
                                <label class="form-label">Current Images:</label>
                                <div class="d-flex flex-wrap gap-2" id="existing-images">
                                    <?php $__currentLoopData = $project->images; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $image): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div class="position-relative" style="width: 120px;">
                                            <img src="<?php echo e(asset($image->file_path)); ?>" class="img-thumbnail" style="width: 100%; height: 100px; object-fit: cover;">
                                            <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0 m-1" 
                                                    onclick="removeExistingImage(this, <?php echo e($image->id); ?>)">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </div>
                            </div>
                            
                            <!-- New Images Upload -->
                            <div class="mb-3">
                                <label class="form-label">Add More Images:</label>
                                <input type="file" class="form-control" name="project_images[]" multiple accept="image/*" id="galleryImages">
                            </div>
                            
                            <!-- Preview for new images -->
                            <div class="d-flex flex-wrap gap-2 mt-2" id="galleryPreview"></div>
                            
                            <!-- Hidden field for removed images -->
                            <input type="hidden" name="removed_images" id="removed-images" value="">
                        </div>

                        <!-- Submit -->
                        <div class="col-12 mt-4">
                            <div class="d-flex justify-content-end gap-2">
                                <a href="<?php echo e(route('project.list')); ?>" class="btn btn-secondary px-4">
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

<script>
    // Preview banner image
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

    // Remove existing image
    function removeExistingImage(button, imageId) {
        if (confirm('Are you sure you want to remove this image?')) {
            // Add to removed images list
            const removedInput = document.getElementById('removed-images');
            const currentRemoved = removedInput.value ? removedInput.value.split(',') : [];
            currentRemoved.push(imageId);
            removedInput.value = currentRemoved.join(',');
            
            // Remove the image visually
            button.closest('.position-relative').remove();
        }
    }

    // Preview new gallery images
    document.getElementById('galleryImages').addEventListener('change', function() {
        const galleryPreview = document.getElementById('galleryPreview');
        galleryPreview.innerHTML = '';

        if (this.files && this.files.length > 0) {
            Array.from(this.files).forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imgContainer = document.createElement('div');
                    imgContainer.className = 'position-relative';
                    imgContainer.style.width = '120px';
                    
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'img-thumbnail';
                    img.style.width = '100%';
                    img.style.height = '100px';
                    img.style.objectFit = 'cover';
                    
                    imgContainer.appendChild(img);
                    galleryPreview.appendChild(imgContainer);
                };
                reader.readAsDataURL(file);
            });
        }
    });

    // Category selection functionality
    document.addEventListener('DOMContentLoaded', function() {
        const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
        const categoryDropdown = document.getElementById('categoryDropdown');
        const selectedCategoriesContainer = document.getElementById('selectedCategories');
        
        // Initialize with existing categories
        updateSelectedCategories();
        
        // Add event listeners
        categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateSelectedCategories();
            });
        });
        
        function updateSelectedCategories() {
            const selectedCategories = [];
            const checkedBoxes = document.querySelectorAll('.category-checkbox:checked');
            
            // Get selected categories
            checkedBoxes.forEach(checkbox => {
                const label = document.querySelector(`label[for="${checkbox.id}"]`).textContent;
                selectedCategories.push({
                    id: checkbox.value,
                    name: label
                });
            });
            
            // Update dropdown button text
            if (selectedCategories.length > 0) {
                categoryDropdown.textContent = `${selectedCategories.length} categories selected`;
            } else {
                categoryDropdown.textContent = 'Select Categories';
            }
            
            // Update selected categories display
            selectedCategoriesContainer.innerHTML = '';
            selectedCategories.forEach(category => {
                const badge = document.createElement('span');
                badge.className = 'badge bg-primary me-1';
                badge.textContent = category.name;
                badge.dataset.categoryId = category.id;
                
                // Create hidden input for form submission
                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = 'categories[]';
                hiddenInput.value = category.id;
                
                badge.appendChild(hiddenInput);
                selectedCategoriesContainer.appendChild(badge);
            });
        }
    });
</script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.admin_dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Hybritech\ChoiceDev\resources\views/admin/backend/project/editProject.blade.php ENDPATH**/ ?>