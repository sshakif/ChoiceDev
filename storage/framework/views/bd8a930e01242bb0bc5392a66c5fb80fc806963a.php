<?php $__env->startSection('content'); ?>
<!-- Header Start -->
<div class="banner">
    <div class="banner-overlay">
        <div class="container banner-items">
            <div class="row">
                <div class=" px-md-5 text-center text-lg-left">
                    <h1 class="display-2 text-uppercase mb-3">
                        Driving innovation, powering growth
                    </h1>
                    <p class="text-light">
                        Sea ipsum kasd eirmod kasd magna,est sea et diam ipsum est amet sed
                        sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed
                        ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo
                        dolore.
                    </p>
                    <a href="" class="btn btn-home text-uppercase mt-1 py-3 px-5">Learn More</a>
                </div>

            </div>
        </div>
        <div class="banner-video">
            <video autoplay muted loop class="w-100">
                <source src="<?php echo e(asset('/')); ?>frontend-assets/img/software-banner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</div>
<!-- Header End -->

<div class="common-bg style-two pb-5 pt-5">
    <div class="container">
        <h1 class="display-4 text-uppercase text-center mb-5">
            Our Services
        </h1>
        <div class="row">
            <div class="col-md-6">
                <div class="single-services-box">
                    <div class="service-content">
                        <i class="fa fa-3x fa-laptop-code icon-primary mb-4"></i>
                        <h4>WEB DESIGN & DEVELOPMENT</h4>
                        <p>
                            Proactively target sticky potentialities via user-centric
                            opportunities. Quickly fabricate orthogonal mindshare via
                            process-centric
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="single-services-box">
                    <div class="service-content">
                        <i class="fa fa-3x fa-code icon-primary mb-4"></i>
                        <h4>Backend Development</h4>
                        <p>
                            Quickly communicate team driven imperatives without fully tested
                            experiences. Authoritatively revolutionize high standards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="single-services-box">
                    <div class="service-content">
                        <i class="fa fa-3x fa-envelope-open-text icon-primary mb-4"></i>
                        <h4>Graphic design</h4>
                        <p>
                            Proactively target sticky potentialities via user-centric
                            opportunities. Quickly fabricate orthogonal mindshare via
                            process-centric
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="single-services-box">
                    <div class="service-content">
                        <i class="fa fa-3x fa-code icon-primary mb-4"></i>
                        <h4>Ecommerce solutions</h4>
                        <p>
                            Quickly communicate team driven imperatives without fully tested
                            experiences. Authoritatively revolutionize high standards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- About Start -->
<div class="container-fluid common-bg bg-section py-5">
    <div class="container py-5">
        <h1 class="display-4 text-uppercase title-color text-center mb-5 pb-5">
            About Us
        </h1>
        <div class="row align-items-center">
            <div class="col-lg-6">
                <img class="img-fluid mb-4 mb-lg-0"
                    src="<?php echo e($about && $about->file_path ? asset($about->file_path) : asset('frontend-assets/img/about-thumb.png')); ?>"
                    alt="About Image" />
            </div>
            <div class="col-lg-6">
                <h1 class="display-4 text-uppercase mb-4">
                    <?php echo e($about->title ?? 'Best digital agency in downtown'); ?>

                </h1>
                <h5 class="text-uppercase text-primary mb-3">
                    <?php echo e($about->subtitle ?? 'Your subtitle goes here...'); ?>

                </h5>
                <p class="mb-4">
                    <?php echo e($about->desc ?? 'Your description goes here...'); ?>

                </p>
                <a href="" class="btn btn-home text-uppercase mt-1 py-3 px-5">Read More</a>
            </div>
        </div>
    </div>
</div>
<!-- About End -->

<!-- Project Start -->
<div class="container-fluid common-bg py-5">
    <div class="container pt-5 pb-3">
        <h1 class="display-4 text-uppercase text-center mb-5">
            Visit Our Projects
        </h1>
        <div class="row">
            <div class="col-12 text-center mb-2">
                <ul class="list-inline mb-4" id="portfolio-flters">
                    <li class="btn btn-outline-dark text-uppercase py-2 px-4 active" data-filter="*">
                        <i class="fa fa-star mr-2"></i>All
                    </li>
                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <li class="btn btn-outline-dark text-uppercase py-2 px-4" data-filter=".cat-<?php echo e($category->id); ?>">
                        <img src="<?php echo e(asset($category->file_path)); ?>" style="height: 20px;" class="mr-2" />
                        <?php echo e($category->title); ?>

                    </li>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </ul>
            </div>
        </div>

        <div class="row portfolio-container common-bg">
            <?php $__currentLoopData = $projects; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $project): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php
                    $categoryClasses = $project->categories->map(fn($cat) => 'cat-' . $cat->id)->implode(' ');
                    $bannerImage = $project->banner_image ? asset($project->banner_image) : asset('default-banner.jpg');
                    $firstImage = optional($project->images->first())->file_path;
                    $imageCount = $project->images->count();
                    
                    // Dynamic column classes based on image count
                    $colClass = 'col-lg-4 col-md-6'; // Default for 3+ images
                    if ($imageCount === 1) {
                        $colClass = 'col-lg-12 col-md-12'; // Full width for single image
                    } elseif ($imageCount === 2) {
                        $colClass = 'col-lg-6 col-md-6'; // Half width for two images
                    }
                ?>

                <div class="<?php echo e($colClass); ?> mb-4 portfolio-item <?php echo e($categoryClasses); ?>">
                    <div class="position-relative rounded overflow-hidden mb-2">
                        <img class="img-fluid w-100" src="<?php echo e($bannerImage); ?>" alt="<?php echo e($project->title); ?>" />
                        
                        
                        <div class="portfolio-btn d-flex align-items-center justify-content-center">
                            <?php if($firstImage): ?>
                            <a href="<?php echo e(asset($firstImage)); ?>" data-lightbox="portfolio-<?php echo e($project->id); ?>">
                                <i class="fa fa-4x fa-plus text-primary"></i>
                            </a>
                            <?php endif; ?>
                        </div>

                        
                        <?php $__currentLoopData = $project->images->skip(1); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $image): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <a href="<?php echo e(asset($image->file_path)); ?>" data-lightbox="portfolio-<?php echo e($project->id); ?>" class="d-none">
                                <img src="" alt="">
                            </a>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
</div>
<!-- Project End -->


<div class="container-fluid common-bg py-5">
    <div class="container py-3">
        <h1 class="display-4 text-uppercase text-center mb-5 pb-5">
            Why choose US
        </h1>
        <div class="row align-items-center">
            <div class="col-lg-6">
                <img class="img-fluid mb-4 mb-lg-0" src="<?php echo e(asset('/')); ?>frontend-assets/img/choose-us-thumb.png"
                    alt="" />
            </div>
            <div class="col-lg-6">
                <h4 class="display-4 text-uppercase mb-4">
                    The ChoiceDev IT Services Promise
                </h4>
                <h5 class="text-uppercase mb-3">
                    Monotonectally synergize granular markets and front markets
                    collaboratively task state of the art infrastructures for granular
                    Maecenas varius sem dui buildings semper ante a viverra posuere
                    maecenas fermentum.
                </h5>
                <p class="mb-4">
                    <ul>
                        <li>Achieve your goals and exceed expectations.</li>
                        <li>Building a website, mobile app or software.</li>
                        <li>Our platform is designed to help you.</li>
                        <li>Our platform places emphasis on user experience.</li>
                    </ul>
                </p>
                <a href="#" class="btn btn-home text-uppercase mt-1 py-3 px-5">Read More</a>
            </div>
        </div>
    </div>
</div>

<style>
    /* For single image projects */
.portfolio-item.col-lg-12 {
    display: flex;
    justify-content: center;
}

.portfolio-item.col-lg-12 > div {
    max-width: 800px; /* Adjust as needed */
    width: 100%;
}
</style>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('frontend.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Hybritech\ChoiceDev\resources\views/frontend/home/index.blade.php ENDPATH**/ ?>