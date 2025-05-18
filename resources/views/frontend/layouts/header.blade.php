<header class="main-header">
    <nav class="main-menu">
        <div class="main-menu__wrapper">
            <div class="main-menu__wrapper-inner">
                <div class="main-menu__left">
                    <div class="main-menu__logo">
                        <a href="/">
                            <!-- website logo -->

                            <img src="{{asset('frontend-assets/assets/images/resources/logo-1.png') }}"
                                alt=""></a>
                    </div>
                </div>
                <div class="main-menu__main-menu-box">
                    <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                    <ul class="main-menu__list">
                        <li  class="{{request()->is('/') ? 'active' : '' }}">
                            <a href="/">Home </a>

                        </li>
                        <li class="{{request()->is('events') ? 'active' : '' }}">
                            <a href="/view-events">Events</a>

                        </li>
                        <li class="{{request()->is('about') ? 'active' : '' }}">
                         <a  href="/about">About Us</a>

                        </li>

                    </ul>
                </div>
                <div class="main-menu__right">

                    <div class="main-menu__btn-box">
                        <a href="/view-events" class="main-menu__btn thm-btn">Buy Ticket <span
                                class="icon-arrow-right"></span> </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
<div class="stricky-header stricked-menu main-menu">
    <div class="sticky-header__content"></div>
</div>