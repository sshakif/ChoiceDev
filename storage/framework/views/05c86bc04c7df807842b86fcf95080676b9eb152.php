
<?php $__env->startSection('admin'); ?>

<div class="page-content">
    <div class="container-fluid">

        <!-- Breadcrumb & Title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <div>
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="<?php echo e(route('admin.dashboard')); ?>">Home</a></li>
                            <li class="breadcrumb-item active">Project List</li>
                        </ol>
                        <h4 class="mb-sm-0 font-size-18 mt-2">Project List</h4>
                    </div>
                    <div class="page-title-right">
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddModal">Add Project</button>
                    </div>
                </div>

                <?php if(session('success')): ?>
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <?php echo e(session('success')); ?>

                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                <?php endif; ?>
            </div>
        </div>

        <!-- Projects Table -->
        <div class="row table-responsive">
            <div class="col-12">
                <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Categories</th>
                            <th>Short Description</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $__currentLoopData = $projects; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $project): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <td><?php echo e($key + 1); ?></td>
                            <td style="max-width: 250px;">
                                <?php echo e(\Illuminate\Support\Str::limit($project->title, 30, '...')); ?>

                                <?php if(strlen($project->title) > 30): ?>
                                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#ViewLongDesc<?php echo e($key); ?>" class="text-primary" style="cursor:pointer;">Read more</a>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php $__currentLoopData = $project->categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <span class="badge bg-primary"><?php echo e($category->title); ?></span>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php if($project->categories->isEmpty()): ?>
                                    <span class="text-muted">No categories</span>
                                <?php endif; ?>
                            </td>
                            <td style="max-width: 300px;">
                                <?php echo e(\Illuminate\Support\Str::limit($project->short_desc, 30, '...')); ?>

                                <?php if(strlen($project->short_desc) > 30): ?>
                                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#ViewShortDesc<?php echo e($key); ?>" class="text-primary" style="cursor:pointer;">Read more</a>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php if($project->banner_image): ?>
                                    <div style="width:120px; height:80px; overflow:hidden; border-radius:8px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#ViewImage<?php echo e($key); ?>">
                                        <img src="<?php echo e(asset($project->banner_image)); ?>" alt="project image" style="width:100%; height:100%; object-fit:cover;">
                                    </div>
                                <?php else: ?>
                                    <div style="width:120px; height:80px; overflow:hidden; border-radius:8px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#ViewImage<?php echo e($key); ?>">
                                        <img src="<?php echo e(asset('backend-assets/images/default-image.png')); ?>" alt="default image" style="width:100%; height:100%; object-fit:cover;">
                                    </div>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php if($project->status): ?>
                                    <span class="badge bg-success">Active</span>
                                <?php else: ?>
                                    <span class="badge bg-danger">Inactive</span>
                                <?php endif; ?>
                            </td>
                            <td><?php echo e($project->created_at->format('d M, Y')); ?></td>
                            <td class="d-flex gap-2">
                                <a href="<?php echo e(route('project.show', $project->id)); ?>" class="btn btn-info btn-sm">
                                    <i class="fa fa-eye"></i>
                                </a>
                                <a href="<?php echo e(route('project.edit', $project->id)); ?>" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
                                <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#DeleteModal<?php echo e($key); ?>">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>

                        <!-- Modals -->
                        
                        <!-- View Long Description Modal -->
                        <div class="modal fade" id="ViewLongDesc<?php echo e($key); ?>" tabindex="-1" aria-labelledby="ViewLongDescLabel<?php echo e($key); ?>" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="ViewLongDescLabel<?php echo e($key); ?>">Long Description</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <?php echo nl2br(e($project->long_desc ?? 'No long description available.')); ?>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- View Short Description Modal -->
                        <div class="modal fade" id="ViewShortDesc<?php echo e($key); ?>" tabindex="-1" aria-labelledby="ViewShortDescLabel<?php echo e($key); ?>" aria-hidden="true">
                            <div class="modal-dialog modal-md modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="ViewShortDescLabel<?php echo e($key); ?>">Short Description</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <?php echo nl2br(e($project->short_desc)); ?>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- View Image Modal -->
                        <div class="modal fade" id="ViewImage<?php echo e($key); ?>" tabindex="-1" aria-labelledby="ViewImageLabel<?php echo e($key); ?>" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-body p-0">
                                        <img src="<?php echo e($project->banner_image ? asset($project->banner_image) : asset('backend-assets/images/default-image.png')); ?>" alt="Project Image" class="img-fluid w-100" style="border-radius:8px;">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Delete Confirmation Modal -->
                        <div class="modal fade" id="DeleteModal<?php echo e($key); ?>" tabindex="-1" aria-labelledby="DeleteModalLabel<?php echo e($key); ?>" aria-hidden="true">
                            <div class="modal-dialog">
                                <form action="<?php echo e(route('project.delete', $project->id)); ?>" method="POST">
                                    <?php echo csrf_field(); ?>
                                    <?php echo method_field('DELETE'); ?>
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="DeleteModalLabel<?php echo e($key); ?>">Delete Confirmation</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to delete project: <strong><?php echo e($project->title); ?></strong>?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-danger">Yes, Delete</button>
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>

<!-- Add Project Modal -->
<div class="modal fade" id="AddModal" tabindex="-1" aria-labelledby="AddModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <form action="<?php echo e(route('project.add')); ?>" method="POST" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="AddModalLabel">Add New Project</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <!-- Title Field -->
                        <div class="mb-3 col-md-6">
                            <label for="title" class="form-label">Project Title <span class="text-danger">*</span> (<span id="titleCounter">0</span>/100)</label>
                            <input type="text" name="title" id="title" class="form-control" value="<?php echo e(old('title')); ?>" maxlength="100" required>
                            <?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <small class="text-danger"><?php echo e($message); ?></small> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                        <!-- Category Selection with Checkboxes -->
                        <div class="mb-3 col-md-6">
                            <label for="categories" class="form-label">Categories</label>
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle w-100 text-start" type="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Categories
                                </button>
                                <ul class="dropdown-menu w-100" aria-labelledby="categoryDropdown">
                                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li>
                                            <div class="form-check ms-2">
                                                <input class="form-check-input category-checkbox" type="checkbox" name="categories[]" value="<?php echo e($category->id); ?>" id="category<?php echo e($category->id); ?>">
                                                <label class="form-check-label" for="category<?php echo e($category->id); ?>">
                                                    <?php echo e($category->title); ?>

                                                </label>
                                            </div>
                                        </li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </ul>
                            </div>
                            <div id="selectedCategories" class="mt-2 d-flex flex-wrap gap-2"></div>
                            <?php $__errorArgs = ['categories'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <small class="text-danger"><?php echo e($message); ?></small> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Short Description -->
                        <div class="mb-3 col-md-6">
                            <label for="short_desc" class="form-label">Short Description <span class="text-danger">*</span> (<span id="shortDescCounter">0</span>/150)</label>
                            <textarea name="short_desc" id="short_desc" class="form-control" rows="3" maxlength="150" required><?php echo e(old('short_desc')); ?></textarea>
                            <?php $__errorArgs = ['short_desc'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <small class="text-danger"><?php echo e($message); ?></small> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                        <!-- Long Description -->
                        <div class="mb-3 col-md-6">
                            <label for="long_desc" class="form-label">Long Description (<span id="longDescCounter">0</span>/500)</label>
                            <textarea name="long_desc" id="long_desc" class="form-control" rows="3" maxlength="500"><?php echo e(old('long_desc')); ?></textarea>
                            <?php $__errorArgs = ['long_desc'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <small class="text-danger"><?php echo e($message); ?></small> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Banner Image Upload -->
                        <div class="mb-3 col-md-6">
                            <label for="banner_image" class="form-label">Project Banner Image</label>
                            <input type="file" name="banner_image" id="banner_image" class="form-control" accept="image/*">
                            <?php $__errorArgs = ['banner_image'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <small class="text-danger"><?php echo e($message); ?></small> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                            <div id="bannerPreview" class="mt-2" style="display:none;">
                                <img id="bannerPreviewImg" src="#" alt="Banner Preview" style="max-width: 200px; max-height: 150px; border: 1px solid #ddd; border-radius: 4px; padding: 5px;" />
                            </div>
                        </div>

                        <!-- Gallery Images Upload -->
                        <div class="mb-3 col-md-6">
                            <label for="project_images" class="form-label">Project Gallery Images (Multiple)</label>
                            <input type="file" name="project_images[]" id="project_images" class="form-control" accept="image/*" multiple>
                            <?php $__errorArgs = ['project_images'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <small class="text-danger"><?php echo e($message); ?></small> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                            <div id="galleryPreview" class="d-flex flex-wrap gap-2 mt-2"></div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Status -->
                        <div class="mb-3 col-md-12">
                            <label class="form-label">Status <span class="text-danger">*</span></label>
                            <select name="status" class="form-select">
                                <option value="1" selected>Active</option>
                                <option value="0">Inactive</option>
                            </select>
                            <?php $__errorArgs = ['status'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <small class="text-danger"><?php echo e($message); ?></small> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-save"></i> Save project
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>

<!-- Include Bootstrap Multiselect CSS/JS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/1.1.2/css/bootstrap-multiselect.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/1.1.2/js/bootstrap-multiselect.min.js"></script>

<script>
    // Character counter for form fields
    document.addEventListener('DOMContentLoaded', function() {
        // Text counters
        const titleInput = document.getElementById('title');
        const titleCounter = document.getElementById('titleCounter');
        const shortDescInput = document.getElementById('short_desc');
        const shortDescCounter = document.getElementById('shortDescCounter');
        const longDescInput = document.getElementById('long_desc');
        const longDescCounter = document.getElementById('longDescCounter');
        
        if(titleInput && titleCounter) {
            titleInput.addEventListener('input', function() {
                titleCounter.textContent = this.value.length;
            });
            titleCounter.textContent = titleInput.value.length;
        }
        
        if(shortDescInput && shortDescCounter) {
            shortDescInput.addEventListener('input', function() {
                shortDescCounter.textContent = this.value.length;
            });
            shortDescCounter.textContent = shortDescInput.value.length;
        }
        
        if(longDescInput && longDescCounter) {
            longDescInput.addEventListener('input', function() {
                longDescCounter.textContent = this.value.length;
            });
            longDescCounter.textContent = longDescInput.value.length;
        }

        // Image preview handlers
        const bannerImageInput = document.getElementById('banner_image');
        if (bannerImageInput) {
            bannerImageInput.addEventListener('change', function() {
                const preview = document.getElementById('bannerPreviewImg');
                const previewContainer = document.getElementById('bannerPreview');
                
                if (this.files && this.files[0]) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        preview.src = e.target.result;
                        previewContainer.style.display = 'block';
                    }
                    
                    reader.readAsDataURL(this.files[0]);
                } else {
                    previewContainer.style.display = 'none';
                    preview.src = '#';
                }
            });
        }

        // Gallery images preview
        const galleryImagesInput = document.getElementById('project_images');
        if (galleryImagesInput) {
            galleryImagesInput.addEventListener('change', function() {
                const galleryPreview = document.getElementById('galleryPreview');
                galleryPreview.innerHTML = '';
                
                if (this.files && this.files.length > 0) {
                    Array.from(this.files).forEach(file => {
                        const reader = new FileReader();
                        
                        reader.onload = function(e) {
                            const imgContainer = document.createElement('div');
                            imgContainer.style.width = '100px';
                            imgContainer.style.height = '100px';
                            imgContainer.style.overflow = 'hidden';
                            imgContainer.style.borderRadius = '8px';
                            imgContainer.style.marginBottom = '10px';
                            imgContainer.style.marginRight = '10px';
                            imgContainer.style.display = 'inline-block';

                            const img = document.createElement('img');
                            img.src = e.target.result;
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
        }

        // Category selection with checkboxes
        const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
        const categoryDropdown = document.getElementById('categoryDropdown');
        const selectedCategoriesContainer = document.getElementById('selectedCategories');
        
        categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateSelectedCategories();
            });
        });
        
        function updateSelectedCategories() {
            const selectedCategories = [];
            const checkedBoxes = document.querySelectorAll('.category-checkbox:checked');
            
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
                badge.className = 'badge bg-primary';
                badge.textContent = category.name;
                selectedCategoriesContainer.appendChild(badge);
            });
        }
    });
</script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.admin_dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Hybritech\ChoiceDev\resources\views/admin/backend/project/projectList.blade.php ENDPATH**/ ?>