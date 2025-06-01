
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
                            <li class="breadcrumb-item active">Service List</li>
                        </ol>
                        <h4 class="mb-sm-0 font-size-18 mt-2">Service List</h4>
                    </div>
                    <div class="page-title-right">
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddModal">Add Service</button>
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

        <!-- Services Table -->
        <div class="row table-responsive">
            <div class="col-12">
                <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Short Description</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $__currentLoopData = $services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <td><?php echo e($key + 1); ?></td>
                            <td style="max-width: 250px;">
                                <?php echo e(\Illuminate\Support\Str::limit($service->title, 30, '...')); ?>

                                <?php if(strlen($service->title) > 30): ?>
                                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#ViewLongDesc<?php echo e($key); ?>" class="text-primary" style="cursor:pointer;">Read more</a>
                                <?php endif; ?>
                            </td>
                            <td style="max-width: 300px;">
                                <?php echo e(\Illuminate\Support\Str::limit($service->short_desc, 30, '...')); ?>

                                <?php if(strlen($service->short_desc) > 30): ?>
                                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#ViewShortDesc<?php echo e($key); ?>" class="text-primary" style="cursor:pointer;">Read more</a>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php if($service->file_path): ?>
                                    <div style="width:120px; height:80px; overflow:hidden; border-radius:8px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#ViewImage<?php echo e($key); ?>">
                                        <img src="<?php echo e(asset($service->file_path)); ?>" alt="service image" style="width:100%; height:100%; object-fit:cover;">
                                    </div>
                                <?php else: ?>
                                    <div style="width:120px; height:80px; overflow:hidden; border-radius:8px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#ViewImage<?php echo e($key); ?>">
                                        <img src="<?php echo e(asset('backend-assets/images/default-image.png')); ?>" alt="default image" style="width:100%; height:100%; object-fit:cover;">
                                    </div>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php if($service->status): ?>
                                    <span class="badge bg-success">Active</span>
                                <?php else: ?>
                                    <span class="badge bg-danger">Inactive</span>
                                <?php endif; ?>
                            </td>
                            <td><?php echo e($service->created_at->format('d M, Y')); ?></td>
                            <td class="d-flex gap-2">
                                <a href="<?php echo e(route('service.edit', $service->id)); ?>" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
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
                                        <?php echo nl2br(e($service->long_desc ?? 'No long description available.')); ?>

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
                                        <?php echo nl2br(e($service->short_desc)); ?>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- View Image Modal -->
                        <div class="modal fade" id="ViewImage<?php echo e($key); ?>" tabindex="-1" aria-labelledby="ViewImageLabel<?php echo e($key); ?>" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-body p-0">
                                        <img src="<?php echo e($service->file_path ? asset($service->file_path) : asset('backend-assets/images/default-image.png')); ?>" alt="Service Image" class="img-fluid w-100" style="border-radius:8px;">
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
                                <form action="<?php echo e(route('service.delete', $service->id)); ?>" method="POST">
                                    <?php echo csrf_field(); ?>
                                    <?php echo method_field('DELETE'); ?>
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="DeleteModalLabel<?php echo e($key); ?>">Delete Confirmation</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to delete service: <strong><?php echo e($service->title); ?></strong>?
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

<!-- Add Service Modal -->
<div class="modal fade" id="AddModal" tabindex="-1" aria-labelledby="AddModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <form action="<?php echo e(route('service.add')); ?>" method="POST" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="AddModalLabel">Add New Service</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <!-- Title Field -->
                    <div class="mb-3">
                        <label for="title" class="form-label">Service Title <span class="text-danger">*</span> (<span id="titleCounter">0</span>/100)</label>
                        <input type="text" name="title" id="title" class="form-control" value="<?php echo e(old('title')); ?>" maxlength="100" required>
                        <?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <small class="text-danger"><?php echo e($message); ?></small>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                    <!-- Short Description -->
                    <div class="mb-3">
                        <label for="short_desc" class="form-label">Short Description <span class="text-danger">*</span> (<span id="shortDescCounter">0</span>/150)</label>
                        <textarea name="short_desc" id="short_desc" class="form-control" rows="3" maxlength="150" required><?php echo e(old('short_desc')); ?></textarea>
                        <?php $__errorArgs = ['short_desc'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <small class="text-danger"><?php echo e($message); ?></small>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                    <!-- Long Description -->
                    <div class="mb-3">
                        <label for="long_desc" class="form-label">Long Description (<span id="longDescCounter">0</span>/500)</label>
                        <textarea name="long_desc" id="long_desc" class="form-control" rows="5" maxlength="500"><?php echo e(old('long_desc')); ?></textarea>
                        <?php $__errorArgs = ['long_desc'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <small class="text-danger"><?php echo e($message); ?></small>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                    <!-- Image Upload with Preview -->
                    <div class="mb-3">
                        <label for="file_path" class="form-label">Service Image</label>
                        <input type="file" name="file_path" id="file_path" class="form-control" accept="image/*" onchange="previewImage(this)">
                        <?php $__errorArgs = ['file_path'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <small class="text-danger"><?php echo e($message); ?></small>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
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
                        <?php $__errorArgs = ['status'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <small class="text-danger"><?php echo e($message); ?></small>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-save"></i> Save Service
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

    // Character counter for form fields
    document.addEventListener('DOMContentLoaded', function() {
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

        document.querySelectorAll('.status-select').forEach(select => {
            select.addEventListener('change', function() {
                const serviceId = this.dataset.serviceId;
                const status = this.value;
                
                fetch(`/admin/service/${serviceId}/status`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                    },
                    body: JSON.stringify({ status: status })
                })
                .then(response => response.json())
                .then(data => {
                    if(data.success) {
                        toastr.success('Status updated successfully');
                    } else {
                        toastr.error('Failed to update status');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    toastr.error('An error occurred');
                });
            });
        });
    });
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

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.admin_dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Hybritech\ChoiceDev\resources\views/admin/backend/service/serviceList.blade.php ENDPATH**/ ?>