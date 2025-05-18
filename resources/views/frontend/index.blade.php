<!DOCTYPE html>
<html lang="en">


<!-- Mirrored from unicktheme.com/2024/eventflow/main-html/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 22 Jan 2025 06:17:41 GMT -->

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home One || eventflow || eventflow HTML 5 Template </title>
    <!-- favicons Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicons/favicon-16x16.png" />
    <link rel="manifest" href="assets/images/favicons/site.webmanifest" />
    <meta name="description" content="eventflow HTML 5 Template " />

    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&amp;display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap" rel="stylesheet">


    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/custom.css') }}" type="text/css" media="all" />

    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/bootstrap.min.css') }}" type="text/css"
        media="all" />

    <!-- <link rel="stylesheet" href="assets/vendors/animate/animate.min.css" /> -->
    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/animate.min.css') }}" type="text/css"
        media="all" />

    <!-- <link rel="stylesheet" href="assets/vendors/animate/custom-animate.css" /> -->
    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/custom-animate.css') }}" type="text/css"
        media="all" />

    <!-- <link rel="stylesheet" href="assets/vendors/fontawesome/css/all.min.css" /> -->

    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/all.min.css') }}" type="text/css"
        media="all" />

    <!-- <link rel="stylesheet" href="assets/vendors/jarallax/jarallax.css" /> -->

    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/jarallax.css') }}" type="text/css"
        media="all" />
    <!-- <link rel="stylesheet" href="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" /> -->

    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/jquery.magnific-popup.css') }}" type="text/css"
        media="all" />

    <!-- <link rel="stylesheet" href="assets/vendors/odometer/odometer.min.css" /> -->

    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/odometer.min.css') }}" type="text/css"
        media="all" />
    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/swiper.min.css') }}" type="text/css"
        media="all" />
    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/owl.carousel.min.css') }}" type="text/css"
        media="all" />
    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/owl.theme.default.min.css') }}" type="text/css"
        media="all" />

    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/bootstrap-select.min.css') }}" type="text/css"
        media="all" />
    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/nice-select.css') }}" type="text/css"
        media="all" />

    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/jquery-ui.css') }}" type="text/css"
        media="all" />

    <!-- template styles -->


    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/eventflow.css') }}" type="text/css"
        media="all" />
    <link rel="stylesheet" href="{{ asset('frontend-assets/assets/css/eventflow-responsive.css') }}" type="text/css"
        media="all" />


</head>

<body class="body-bg-color-1">

    <!-- Start sidebar widget content -->
    <div class="xs-sidebar-group info-group info-sidebar">
        <div class="xs-overlay xs-bg-black"></div>
        <div class="xs-sidebar-widget">
            <div class="sidebar-widget-container">
                <div class="widget-heading">
                    <a href="#" class="close-side-widget">X</a>
                </div>
                <div class="sidebar-textwidget">
                    <div class="sidebar-info-contents">
                        <div class="content-inner">
                            <div class="logo">
                                <a href="/"><img
                                        src="{{ asset('frontend-assets/assets/images/resources/logo-1.png') }}"
                                        alt="" /></a>
                            </div>
                            <div class="content-box">
                                <h4>About Us</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                                    labore et magna aliqua.</p>
                            </div>
                            <div class="form-inner">
                                <h4>Get a free quote</h4>
                                <form action="https://unicktheme.com/2024/eventflow/main-html/assets/inc/sendemail.php"
                                    class="contact-form-validated" novalidate="novalidate">
                                    <div class="form-group">
                                        <input type="text" name="name" placeholder="Name" required="">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" name="email" placeholder="Email" required="">
                                    </div>
                                    <div class="form-group">
                                        <textarea name="message" placeholder="Message..."></textarea>
                                    </div>
                                    <div class="form-group message-btn">
                                        <button type="submit" class="thm-btn form-inner__btn">Submit Now</button>
                                    </div>
                                </form>
                                <div class="result"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End sidebar widget content -->


    <div class="page-wrapper">

        @include('frontend.layouts.header')
        <div class="stricky-header stricked-menu main-menu">
            <div class="sticky-header__content"></div>
        </div>


        <!--Main Slider Start-->
        <section class="main-slider">
            <div class="swiper-container thm-swiper__slider"
                data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                    "delay": 8000
                }
            }'>
                <div class="swiper-wrapper">
                    @foreach ($get_latest_event as $key => $items)
                        <div style="position: relative; max-height:100vh;  " class="swiper-slide">
                            <div class="main-slider__img">
                                <img class="w-full h-full" style="height: 100%; width:100%"
                                    src="{{ asset($items->slider_image) }}" alt="">
                            </div>

                            <div class="main-slider__content">

                                <div>
                                    <p class="main-slider__sub-title">Music fastival</p>


                                    <h3 class="main-slider__title icon-pin">
                                        {!! \Illuminate\Support\Str::limit($items->title, 100, '') !!}
                                    </h3>
                                    <p class="main-slider__text">
                                        {{ $items->short_description }}
                                    </p>
                                    <ul class="list-unstyled main-slider__address">
                                        <li>
                                            <div class="icon">
                                                <span class="icon-pin"><i class="fa-solid fa-location-dot"></i></span>
                                            </div>
                                            <div class="text">
                                                <p>{{ $items->event_address }}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <span class="icon-clock"></span>
                                            </div>
                                            <div class="text d-flex gap-2 "
                                                style="align-items: center; justify-content:center;  gap:4px;">
                                                <div class="icon">
                                                    <span class="icon-clock"><i
                                                            class="fa-regular fa-clock"></i></span>
                                                </div>
                                                <p>
                                                    @if ($items->event_start_time)
                                                        {{ \Carbon\Carbon::parse($items->event_start_time)->format('h:i A') }}
                                                    @endif
                                                    @if ($items->event_end_time)
                                                        {{ 'To ' . \Carbon\Carbon::parse($items->event_end_time)->format('h:i A') }}
                                                    @endif
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="main-slider__btn-box">
                                        <a href="/event/details/12" class="main-slider__btn thm-btn">Purchase
                                            Ticket
                                            <span class="icon-arrow-right"></span> </a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    @endforeach

                </div>

                <div class="swiper-pagination" id="main-slider-pagination"></div>
                <!-- If we need navigation buttons -->

            </div>
        </section>
        <!--Main Slider End-->



        <!-- Sliding Text One Start -->

        {{-- upcoming events --}}

        <section class="blog-one">
            <div class="container">
                <div class="blog-one__top">
                    <div class="section-title text-left">

                        <h2 class="section-title__title">Upcoming Events</h2>
                    </div>
                    <div class="blog-one__btn-box">
                        <a href="/events" class="blog-one__btn thm-btn">View All Events<span
                                class="icon-arrow-right"></span>
                        </a>
                    </div>
                </div>
                <div class="blog-one__bottom">
                    <div class="row">
                        <!--Blog One Single Start-->
                        @foreach ($get_upcoming_event as $key => $items)
                            <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div class="blog-one__single">
                                    <div class="blog-one__img">

                                        <img src="{{ asset($items->slider_image) }}" alt="">
                                        <div class="blog-one__hover">
                                            <a href="/event/details/{{ $items->id }}">
                                                <div class="blog-one__hover-icon-1">
                                                    <span class="blog-one__hover-icon-2"></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="blog-one__content">
                                        <ul class="blog-one__meta list-unstyled">
                                            <li>
                                                <a href="/event/details/{{ $items->id }}"><span
                                                        class="icon-user"></span>
                                                    @if ($items->event_start_time)
                                                        {{ \Carbon\Carbon::parse($items->event_start_time)->format('h:i A') }}
                                                    @endif
                                                
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/event/details/{{ $items->id }}">


                                                    @if ($items->event_start_date)
                                                        {{ \Carbon\Carbon::parse($items->event_start_date)->format('d, M, Y') }}
                                                    @endif
                                                </a>
                                            </li>
                                        </ul>
                                        <h3 class="blog-one__title"><a href="/event/details/{{ $items->id }}">
                                                {{ $items->title }}
                                        </h3>
                                        <div class="blog-one__btn-box-two">
                                            <a href="/event/details/{{ $items->id }}"
                                                class="blog-one__btn-2 thm-btn">Read More<span
                                                    class="fa fa-arrow-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach

                    </div>
                </div>
            </div>
        </section>




        <section class="container text-center" style="text-align: center;">
            <h1 class="my-4 py-4 ">Categorys</h1>
            <swiper-container class="mySwiper w-100 customize-swiper" autoplay-delay="2500" slides-per-view="4"
                space-between="25" free-mode="true"
                breakpoints='{
                "1350": { "slidesPerView": 5, "spaceBetween": 20 },
                "1024": { "slidesPerView": 4, "spaceBetween": 20 },
                "750": { "slidesPerView": 3, "spaceBetween": 15 },
                "450": { "slidesPerView": 2, "spaceBetween": 15 },
                "300": { "slidesPerView": 1, "spaceBetween": 10 }
            }'>
                @foreach ($categories as $key => $items)
                    <swiper-slide class="p-4 rounded" style="border: 1px solid #222222dd; background:#01031cdd">
                        <a class="events-cat" href="/view-events?category={{$items->id}}">
                            <li style="cursor: pointer;">
                                <div class="catagory-card">
                                    <div class="catagory-img">
                                        <img src="{{ asset($items->file_path) }}" alt="">
                                    </div>
                                    <b>{{ $items->name }}</b>
                                </div>
                            </li>
                        </a>
                    </swiper-slide>
                @endforeach
            </swiper-container>
        </section>
        <!--Site Footer Start-->
        @include('frontend.layouts.footer')
        <!--Site Footer End-->
    </div>

    <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay mobile-nav__toggler"></div>
        <!-- /.mobile-nav__overlay -->
        <div class="mobile-nav__content">
            <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

            <div class="logo-box">
                <a href="index-2.html" aria-label="logo image"><img src="assets/images/resources/logo-1.png"
                        width="150" alt="" /></a>
            </div>
            <!-- /.logo-box -->
            <div class="mobile-nav__container"></div>
            <!-- /.mobile-nav__container -->

            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:needhelp@packageName__.com">needhelp@eventflow.com</a>
                </li>
                <li>
                    <i class="fa fa-phone-alt"></i>
                    <a href="tel:666-888-0000">666 888 0000</a>
                </li>
            </ul><!-- /.mobile-nav__contact -->
            <div class="mobile-nav__top">
                <div class="mobile-nav__social">
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-facebook-square"></a>
                    <a href="#" class="fab fa-pinterest-p"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div><!-- /.mobile-nav__social -->
            </div><!-- /.mobile-nav__top -->

        </div>
        <!-- /.mobile-nav__content -->
    </div>
    <!-- /.mobile-nav__wrapper -->

    <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fas fa-arrow-up"></i></a>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>

    <script src="{{ asset('frontend-assets/assets/js/vendor/jquery-3.6.0.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/jarallax.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/jquery.ajaxchimp.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/jquery.appear.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/jquery.magnific-popup.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/odometer.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/swiper.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/wNumb.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/wow.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/isotope.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/bootstrap-select.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/jquery-ui.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/jquery.nice-select.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/countdown.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/marquee.min.js') }}"></script>
    <script src="{{ asset('frontend-assets/assets/js/jquery-sidebar-content.js') }}"></script>

    <!-- template js -->

    <script src="{{ asset('frontend-assets/assets/js/eventflow.js') }}"></script>
</body>


</html>
