<div class="vertical-menu">
    <div data-simplebar class="h-100">
        <div id="sidebar-menu">
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" data-key="t-menu">Menu</li>

                <!-- Dashboard -->
                <li>
                    <a href="<?php echo e(route('admin.dashboard')); ?>" class="waves-effect">
                        <i data-feather="home"></i>
                        <span data-key="t-dashboard">Dashboard</span>
                    </a>
                </li>

                <!-- Home Section -->
                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['category-mangement'])): ?>
                    <li>
                        <a href="<?php echo e(route('category.list')); ?>">
                            <i data-feather="layout"></i>
                            <span data-key="t-apps">Category</span>
                        </a>
                    </li>
                <?php endif; ?>

                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin'])): ?>
                    <li>
                        <a href="<?php echo e(route('about.list')); ?>">
                            <i data-feather="briefcase"></i>
                            <span data-key="t-apps">About</span>
                        </a>
                    </li>
                <?php endif; ?>

                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin'])): ?>
                    <li>
                        <a href="<?php echo e(route('service.list')); ?>">
                            <i data-feather="briefcase"></i>
                            <span data-key="t-apps">Services</span>
                        </a>
                    </li>
                <?php endif; ?>

                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin'])): ?>
                    <li>
                        <a href="javascript: void(0);" class="has-arrow">
                            <i data-feather="crosshair"></i>
                            <span data-key="t-email">Project Management</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li><a href="<?php echo e(route('project.category.list')); ?>">Project Category</a></li>
                            <li><a href="<?php echo e(route('project.list')); ?>">Project List</a></li>
                        </ul>
                    </li>
                <?php endif; ?>

                <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->any(['admin'])): ?>
                    <li>
                        <a href="javascript: void(0);" class="has-arrow">
                            <i data-feather="crosshair"></i>
                            <span data-key="t-email">User Management</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li><a href="<?php echo e(route('assign.role')); ?>">User List</a></li>
                            <li><a href="<?php echo e(route('role')); ?>">Roles & Permissions</a></li>
                        </ul>
                    </li>
                <?php endif; ?>
        </div>
    </div>
</div>

<!-- Feather Icon Initialization -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        feather.replace();
    });
</script>
<?php /**PATH D:\Hybritech\ChoiceDev\resources\views/admin/body/sidebar.blade.php ENDPATH**/ ?>