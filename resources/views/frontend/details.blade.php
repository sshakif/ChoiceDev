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


        {{-- content --}}

        <section class="blog-details">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-7">
                        <div class="blog-details__left">
                            <div class="blog-details__img-1 relative">
                                @if ($items->slider_image)
                                    <swiper-container class="mySwiper" pagination="true" autoplay-delay="3000"
                                        navigation="true">

                                        @if ($items->slider_image)
                                            <swiper-slide>
                                                <img class="swiper-img" src="{{ asset($items->slider_image) }}"
                                                    alt="">
                                            </swiper-slide>
                                        @endif

                                        @if ($items->banner_image)
                                            <swiper-slide>
                                                <img class="swiper-img" src="{{ asset($items->banner_image) }}"
                                                    alt="">
                                            </swiper-slide>
                                        @endif

                                        @if ($items->banner_image2)
                                            <swiper-slide>
                                                <img class="swiper-img" src="{{ asset($items->banner_image2) }}"
                                                    alt="">
                                            </swiper-slide>
                                        @endif

                                        @if ($items->banner_image3)
                                            <swiper-slide>
                                                <img class="swiper-img" src="{{ asset($items->banner_image3) }}"
                                                    alt="">
                                            </swiper-slide>
                                        @endif
                                    </swiper-container>
                                @endif




                                <div class="blog-details__date" style="z-index: 55">
                                    <p>
                                        {{ \Carbon\Carbon::parse($items->event_start_date)->format('m  M') }}
                                    </p>
                                </div>
                            </div>


                            <div class="blog-details__content">
                                <h3 class="blog-details__title-1">{{ $items->title }}</h3>
                                <p class="blog-details__text-1">
                                    {{ $items->short_description }}
                                </p>
                                <p class="blog-details__text-2">
                                    {!! $items->description !!}
                                </p>



                            </div>

                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="sidebar ">
                            <div class="sidebar__single sidebar__search price-view">
                                @if (session('success'))
                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                    {{ session('success') }}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            @endif
                                <div class="d-flex w-full price-section justify-content-between">
                                    <h3 class="sidebar__title">Ticket Price</h3> <b
                                        class="price-number">${{ $items->ticket_price }}</b>
                                </div>
                                <div class="ticket-view">
                                
                                    <div class="py-2 px-2 rounded w-100  " style="border: 1px solid #181818">
                                        <div class="py-2 px-2 rounded w-100  " style="border: 1px solid #181818">
                                            <table class="  w-100 " style="background:none;">
                                                <tr class="text-xs">
                                                    <th>Start Date</th>
                                                    <td>:</td>
                                                    <td class="px-4">
                                                        @if ($items->event_start_date)
                                                            {{ \Carbon\Carbon::parse($items->event_start_date)->format('d, M, Y') }}
                                                        @endif
                                                    </td>
                                                </tr>

                                                <tr class="text-xs">
                                                    <th>Start Time</th>
                                                    <td>:</td>
                                                    <td class="px-4">
                                                        @if ($items->event_start_time)
                                                            {{ \Carbon\Carbon::parse($items->event_start_time)->format('h:i A') }}
                                                        @endif
                                                    </td>
                                                </tr>


                                            </table>
                                        </div>

                                        <div class="py-2 px-2 rounded w-100 mt-2 " style="border: 1px solid #181818">

                                          
                                            <table class="  w-100 " style="background:none;">
                                                <tr class="text-xs">
                                                    <th>End Date</th>
                                                    <td>:</td>
                                                    <td class="px-4">
                                                        @if ($items->event_start_date)
                                                            {{ \Carbon\Carbon::parse($items->event_end_date)->format('d, M, Y') }}
                                                        @endif
                                                    </td>
                                                </tr>

                                                <tr class="text-xs">
                                                    <th>End Time</th>
                                                    <td>:</td>
                                                    <td class="px-4">
                                                        @if ($items->event_start_time)
                                                            {{ \Carbon\Carbon::parse($items->event_end_time)->format('h:i A') }}
                                                        @endif
                                                    </td>
                                                </tr>


                                            </table>
                                        </div>
                                    </div>

                                </div>

                                <div class="total">
                                    <h6>Total Cost</h6>

                                    <div class="d-flex mt-2 total-bar w-full justify-content-between">
                                        <b id="price-bar">
                                            {{-- price --}}
                                        </b>
                                        <div class="px-2 total-inc py-1 d-flex align-items-center">
                                            <button class="min">-</button>
                                            <h5 id="count-display" class="count-display"></h5>
                                            <button class="plus">+</button>
                                        </div>

                                    </div>
                                    <span class="text-danger">
                                        @error('participant')
                                            {{ $message }}
                                        @enderror
                                    </span>

                                    <form class="contact-one__form" action="{{ route('ticket.request') }}"
                                        method="POST" novalidate="novalidate">
                                        @csrf
                                        @method('POST')
                                        <div class="row">
                                            <div class="">
                                                <div class="contact-one__input-box">
                                                    <label for="">Name</label>
                                                    <input type="text" name="name" placeholder="Your Name"
                                                        required="">
                                                    <span class="text-danger">
                                                        @error('name')
                                                            {{ $message }}
                                                        @enderror
                                                    </span>
                                                </div>
                                            </div>
                                            {{-- hidden --}}
                                            <input type="text" hidden class="ticket_count" name="participant">
                                            <input type="text" hidden class="ticket_price" name="total_amount">
                                            <input type="text" hidden class="event_id"
                                                value="{{ $items->id }}" name="event_id">
                                            {{-- end --}}
                                            <div class="">
                                                <div class="contact-one__input-box">
                                                    <label for="">Email</label>
                                                    <input type="email" name="email" placeholder="Type email"
                                                        required="">

                                                    <span class="text-danger">
                                                        @error('email')
                                                            {{ $message }}
                                                        @enderror
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="contact-one__input-box">
                                                    <label for="">Phone Number</label>
                                                    <input type="text" name="phone"
                                                        placeholder="Type to phone number" required="">
                                                    <span class="text-danger">
                                                        @error('phone')
                                                            {{ $message }}
                                                        @enderror
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="" style="margin-top: 7px;">
                                                <div style="display: flex; align-items-center gap-3px;"
                                                    class="contact-one__input-box">

                                                    <input required style="font-size:12px; border:none; outline:none;"
                                                        type="checkbox"> <span>I agree with terms and conditions</span>
                                                </div>
                                            </div>

                                        </div>
                                        <button type="submit" style="background: none; outline:none; border:none;"
                                            class="w-100">
                                            <div class="pay-section">
                                                Pay now
                                            </div>
                                        </button>
                                    </form>
                                </div>



                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </section>


        {{-- end content --}}


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
    <script>
        let Incriment = document.querySelector('.plus');
        let Decrement = document.querySelector('.min');
        let Ticekt_price = document.querySelector('.ticket_price');
        let ticket_count = document.querySelector('.ticket_count');
        let Count = 0;

        if (Count < 1) {
            document.getElementById('price-bar').innerHTML = Count;
        }
        document.querySelector('#count-display').innerHTML = Count;
        Incriment.addEventListener('click', () => {
            Count += 1;
            document.getElementById('price-bar').innerHTML = Count * {{ $items->ticket_price }}
            document.querySelector('.count-display').innerHTML = Count;
            ticket_count.value = Count;
            Ticekt_price.value = Count * {{ $items->ticket_price }}

        });
        Decrement.addEventListener('click', () => {
            if (Count > 0) {
                Count -= 1;
                document.getElementById('price-bar').innerHTML = Count * {{ $items->ticket_price }}
                document.querySelector('.count-display').innerHTML = Count;
                ticket_count.value = Count;
                Ticekt_price.value = Count * {{ $items->ticket_price }}
            }

        });
    </script>

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
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <script src="{{ asset('frontend-assets/assets/js/eventflow.js') }}"></script>
    <script type="text/javascript" src="{{ asset('frontend-assets/assets/js/custom.js') }}"></script>
</body>


</html>
