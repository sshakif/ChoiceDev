@extends('frontend.master')
@section('content')
   <div class="banner3">
      <div class="banner-overlay">
        <div class="container banner-items-resources">
          <div class="row">
            <div class="px-md-5 text-lg-left">
              <h1 class="display-3 text-uppercase mb-3">
                Learn & Grow with Our <br />
                Insights
              </h1>
              <p class="text-light mb-4">
                Expert tips, trends, and success stories to empower your digital
                journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
	<!-- blog-list-start -->

 <div class="container-fluid common-bg py-5">
      <div class="container pt-5 pb-3">
        <h1 class="display-4 text-uppercase text-center mb-5">
          Visit Our Blogs
        </h1>
        <div class="row">
          <div class="col-12 text-center mb-2">
            <ul class="list-inline mb-4" id="portfolio-flters">
              <li
                class="btn btn-outline-dark text-uppercase py-2 px-4 mb-3 active"
                data-filter="*" style="margin-right: 10px;"
              >
                <i class="fa fa-star mr-2"></i>All
              </li>
              <li
                class="btn btn-outline-dark text-uppercase mb-3 py-2 px-4"
                data-filter=".first" style="margin-right: 10px;"
              >
                <i class="fa fa-laptop-code mr-2"></i>Design
              </li>
              <li
                class="btn btn-outline-dark text-uppercase py-2 mb-3 px-4"
                data-filter=".second"
              >
                <i class="fa fa-mobile-alt mr-2"></i>Development
              </li>
            </ul>
          </div>
        </div>
        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
            <div class="blog-card">
              <div class="blog-img">
                <a href="blog1.html">
                  <img src="{{ asset('/') }}frontend-assets/img/AI card.jpeg" alt="blog" />
                </a>
                <ul>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <!-- <li>
                    <span>May 20, 2025</span>
                  </li> -->
                </ul>
              </div>
              <div class="blog-card-caption">
                <h4>How AI is Changing the Way We Write Code</h4>
                <p>
                  <span
                    >AI is transforming coding by automating repetitive tasks and generating code snippets, boosting developer productivity. It also enables smarter debugging and real-time collaboration, making software development faster and more efficient.
                  </span>
                </p>
                <a href="blog1.html" class="read-more-btn-1">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
            <div class="blog-card">
              <div class="blog-img">
                <a href="blog2.html">
                  <img src="{{ asset('/') }}frontend-assets/img/Low card card.jpeg" alt="blog" />
                </a>
                <ul>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <!-- <li>
                    <span>May 05, 2025</span>
                  </li> -->
                </ul>
              </div>
              <div class="blog-card-caption">
                <h4>Exploring the Rise of Low-Code and No-Code Platforms</h4>
                <p class="justify-text">
                  <span
                    >Low-code and no-code platforms empower rapid app
                    development with minimal coding, accelerating digital
                    transformation and reducing reliance on traditional
                    developers.</span
                  >
                </p>
                <a href="blog2.html" class="read-more-btn">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div class="blog-card">
              <div class="blog-img">
                <a href="blog3.html">
                  <img src="{{ asset('/') }}frontend-assets/img/Graphic Design for card.jpeg" alt="blog" />
                </a>
                <ul>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <!-- <li>
                    <span>March 24, 2025</span>
                  </li> -->
                </ul>
              </div>
              <div class="blog-card-caption">
                <h4>The Role of Design in Building Trust Online</h4>
                <p class="justify-text">
                  <span
                    >Good design builds trust by creating clear, user-friendly,
                    and professional online experiences. It helps users feel
                    confident and secure when interacting with digital
                    platforms.
                  </span>
                </p>
                <a href="blog3.html" class="read-more-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection