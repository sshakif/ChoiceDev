<!doctype html>
<html lang="en">

<head>

    <meta charset="utf-8" />
    <title>Dashboard | Event Management</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesbrand" name="author" />
    <!-- App favicon -->
    
    <link href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
    
    <!-- DataTables -->
    <link href="<?php echo e(asset('backend-assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css')); ?> " rel="stylesheet"
        type="text/css" />
    <link href="<?php echo e(asset('backend-assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css')); ?> "
        rel="stylesheet" type="text/css" />

    <!-- Responsive datatable examples -->
    <link href="<?php echo e(asset('backend-assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css')); ?> "
        rel="stylesheet" type="text/css" />
    <!-- plugin css -->
    <link href="<?php echo e(asset('backend-assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css')); ?>"
        rel="stylesheet" type="text/css" />

    <!-- preloader css -->
    

    <!-- Bootstrap Css -->

    <link href="<?php echo e(asset('backend-assets/css/bootstrap.min.css')); ?>" id="bootstrap-style" rel="stylesheet"
        type="text/css" />
    <!-- Icons Css -->
    <link href="<?php echo e(asset('backend-assets/css/icons.min.css')); ?>" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="<?php echo e(asset('backend-assets/css/app.min.css')); ?>" id="app-style" rel="stylesheet" type="text/css" />
    <!-- Toastr CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<style>
    .sidebar-enable .footer{
         position: relative !important;
         bottom: 0 !important;
         z-index: 4;
    }

</style>
<body>

    <!-- <body data-layout="horizontal"> -->

    <!-- Begin page -->
    <div id="layout-wrapper">
        <?php echo $__env->make('admin.body.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <!-- ========== Left Sidebar Start ========== -->
        <?php echo $__env->make('admin.body.sidebar ', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <!-- Left Sidebar End -->
        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">

            <?php echo $__env->yieldContent('admin'); ?>
            <!-- End Page-content -->

            <?php echo $__env->make('admin.body.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->


    <!-- Right Sidebar -->
    <?php echo $__env->make('admin.body.rightside', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>

    <!-- JAVASCRIPT -->
   
    <script src="<?php echo e(asset('backend-assets/libs/jquery/jquery.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend-assets/libs/bootstrap/js/bootstrap.bundle.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend-assets/libs/metismenu/metisMenu.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend-assets/libs/simplebar/simplebar.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend-assets/libs/node-waves/waves.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend-assets/libs/feather-icons/feather.min.js')); ?>"></script>
    <!-- pace js -->
    <script src="<?php echo e(asset('backend-assets/libs/pace-js/pace.min.js')); ?>"></script>

    <!-- apexcharts -->
    <script src="<?php echo e(asset('backend-assets/libs/apexcharts/apexcharts.min.js')); ?>"></script>

    <!-- Plugins js-->
    <script src="<?php echo e(asset('backend-assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js')); ?>">
    </script>
    <script
        src="<?php echo e(asset('backend-assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js')); ?>">
    </script>
    <!-- dashboard init -->
    <script src="<?php echo e(asset('backend-assets/js/pages/dashboard.init.js')); ?>"></script>

    <script src="<?php echo e(asset('backend-assets/js/app.js')); ?>"></script>

    <script src="<?php echo e(asset('backend-assets/js/validate.min.js')); ?>"></script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <!-- Toastr JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

    <script src="<?php echo e(asset('backend-assets/js/code.js')); ?>?v=<?php echo e(time()); ?>"></script>

    <!-- Required datatable js -->
    <script src="<?php echo e(asset('backend-assets/libs/datatables.net/js/jquery.dataTables.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend-assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js')); ?>"></script>

    <!-- Datatable init js -->
    <script src="<?php echo e(asset('backend-assets/js/pages/datatables.init.js')); ?>"></script>
</body>

</html>
<?php /**PATH D:\Hybritech\ChoiceDev\resources\views/admin/admin_dashboard.blade.php ENDPATH**/ ?>