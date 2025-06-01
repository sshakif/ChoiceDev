
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
                            <li class="breadcrumb-item active">About Us List</li>
                        </ol>
                        <h4 class="mb-sm-0 font-size-18 mt-2">About Us List</h4>
                    </div>
                    <div class="page-title-right">
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddModal">Add About Us</button>
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

        <!-- About Us Table -->
        <div class="row table-responsive">
            <div class="col-12">
                <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Subtitle</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $__currentLoopData = $abouts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $about): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <td><?php echo e($key + 1); ?></td>
                            <td style="max-width: 200px;">
                                <?php echo e(\Illuminate\Support\Str::limit($about->title, 30, '...')); ?>

                                <?php if(strlen($about->title) > 30): ?>
                                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#ViewTitle<?php echo e($key); ?>" class="text-primary" style="cursor:pointer;">Read more</a>
                                <?php endif; ?>
                            </td>
                            <td style="max-width: 200px;">
                                <?php echo e(\Illuminate\Support\Str::limit($about->subtitle, 30, '...')); ?>

                                <?php if(strlen($about->subtitle) > 30): ?>
                                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#ViewSubtitle<?php echo e($key); ?>" class="text-primary" style="cursor:pointer;">Read more</a>
                                <?php endif; ?>
                            </td>
                            <td style="max-width: 250px;">
                                <?php echo e(\Illuminate\Support\Str::limit($about->desc, 50, '...')); ?>

                                <?php if(strlen($about->desc) > 50): ?>
                                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#ViewDesc<?php echo e($key); ?>" class="text-primary" style="cursor:pointer;">Read more</a>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php if($about->file_path): ?>
                                    <div style="width:120px; height:80px; overflow:hidden; border-radius:8px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#ViewImage<?php echo e($key); ?>">
                                        <img src="<?php echo e(asset($about->file_path)); ?>" alt="about us image" style="width:100%; height:100%; object-fit:cover;">
                                    </div>
                                <?php else: ?>
                                    <div style="width:120px; height:80px; overflow:hidden; border-radius:8px; cursor:pointer;" data-bs-toggle="modal" data-bs-target="#ViewImage<?php echo e($key); ?>">
                                        <img src="<?php echo e(asset('backend-assets/images/default-image.png')); ?>" alt="default image" style="width:100%; height:100%; object-fit:cover;">
                                    </div>
                                <?php endif; ?>
                            </td>
                            <td>
                                <?php if($about->status): ?>
                                    <span class="badge bg-success">Active</span>
                                <?php else: ?>
                                    <span class="badge bg-danger">Inactive</span>
                                <?php endif; ?>
                            </td>
                            <td><?php echo e($about->created_at->format('d M, Y')); ?></td>
                            <td class="d-flex gap-2">
                                <a href="<?php echo e(route('about.edit', $about->id)); ?>" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
                                <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#DeleteModal<?php echo e($key); ?>">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>

                        <!-- Modals -->

                        <!-- View Title Modal -->
                        <div class="modal fade" id="ViewTitle<?php echo e($key); ?>" tabindex="-1" aria-labelledby="ViewTitleLabel<?php echo e($key); ?>" aria-hidden="true">
                            <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="ViewTitleLabel<?php echo e($key); ?>">Full Title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <?php echo e($about->title ?? 'No title available'); ?>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- View Subtitle Modal -->
                        <div class="modal fade" id="ViewSubtitle<?php echo e($key); ?>" tabindex="-1" aria-labelledby="ViewSubtitleLabel<?php echo e($key); ?>" aria-hidden="true">
                            <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="ViewSubtitleLabel<?php echo e($key); ?>">Full Subtitle</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <?php echo e($about->subtitle ?? 'No subtitle available'); ?>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- View Description Modal -->
                        <div class="modal fade" id="ViewDesc<?php echo e($key); ?>" tabindex="-1" aria-labelledby="ViewDescLabel<?php echo e($key); ?>" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="ViewDescLabel<?php echo e($key); ?>">Full Description</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <?php echo nl2br(e($about->desc ?? 'No description available.')); ?>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- View Image Modal -->
                        <div class="modal fade" id="ViewImage<?php echo e($key); ?>" tabindex="-1" aria-labelledby="ViewImageLabel<?php echo e($key); ?>" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-body p-0">
                                        <img src="<?php echo e($about->file_path ? asset($about->file_path) : asset('backend-assets/images/default-image.png')); ?>" alt="About Us Image" class="img-fluid w-100" style="border-radius:8px;">
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
                                <form action="<?php echo e(route('about.delete', $about->id)); ?>" method="POST">
                                    <?php echo csrf_field(); ?>
                                    <?php echo method_field('DELETE'); ?>
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="DeleteModalLabel<?php echo e($key); ?>">Delete Confirmation</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to delete this about us entry: <strong><?php echo e($about->title); ?></strong>?
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

<!-- Add About Us Modal -->
<div class="modal fade" id="AddModal" tabindex="-1" aria-labelledby="AddModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <form action="<?php echo e(route('about.add')); ?>" method="POST" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="AddModalLabel">Add New About Us</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <!-- Title Field -->
                    <div class="mb-3">
                        <label for="title" class="form-label">Title <span class="text-danger">*</span> (<span id="titleCounter">0</span>/100)</label>
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

                    <!-- Subtitle Field -->
                    <div class="mb-3">
                        <label for="subtitle" class="form-label">Subtitle (<span id="subtitleCounter">0</span>/150)</label>
                        <input type="text" name="subtitle" id="subtitle" class="form-control" value="<?php echo e(old('subtitle')); ?>" maxlength="150">
                        <?php $__errorArgs = ['subtitle'];
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

                    <!-- Description -->
                    <div class="mb-3">
                        <label for="desc" class="form-label">Description <span class="text-danger">*</span> (<span id="descCounter">0</span>/500)</label>
                        <textarea name="desc" id="desc" class="form-control" rows="5" maxlength="500" required><?php echo e(old('desc')); ?></textarea>
                        <?php $__errorArgs = ['desc'];
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
                        <label for="file_path" class="form-label">Image</label>
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
                        <i class="fas fa-save"></i> Save About Us
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
        // Title counter
        const titleInput = document.getElementById('title');
        const titleCounter = document.getElementById('titleCounter');
        
        // Subtitle counter
        const subtitleInput = document.getElementById('subtitle');
        const subtitleCounter = document.getElementById('subtitleCounter');
        
        // Description counter
        const descInput = document.getElementById('desc');
        const descCounter = document.getElementById('descCounter');
        
        // Update counters on input
        if(titleInput && titleCounter) {
            titleInput.addEventListener('input', function() {
                titleCounter.textContent = this.value.length;
            });
            // Initialize counter
            titleCounter.textContent = titleInput.value.length;
        }
        
        if(subtitleInput && subtitleCounter) {
            subtitleInput.addEventListener('input', function() {
                subtitleCounter.textContent = this.value.length;
            });
            // Initialize counter
            subtitleCounter.textContent = subtitleInput.value.length;
        }
        
        if(descInput && descCounter) {
            descInput.addEventListener('input', function() {
                descCounter.textContent = this.value.length;
            });
            // Initialize counter
            descCounter.textContent = descInput.value.length;
        }

        // Status change handler
        document.querySelectorAll('.status-select').forEach(select => {
            select.addEventListener('change', function() {
                const aboutId = this.dataset.aboutId;
                const status = this.value;
                
                fetch(`/admin/about/${aboutId}/status`, {
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
<?php echo $__env->make('admin.admin_dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Hybritech\ChoiceDev\resources\views/admin/backend/about/aboutList.blade.php ENDPATH**/ ?>