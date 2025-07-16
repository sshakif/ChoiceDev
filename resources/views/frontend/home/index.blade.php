@extends('frontend.master')
@section('content')
<!-- Header Start -->
<div class="banner">
    <div class="banner-video">
      <video autoplay muted loop class="w-100">
        <source src="{{ asset('/') }}frontend-assets/img/AdobeStock_250452057_hero_banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="video-overlay"></div>
    
    <div class="container banner-items">
      <div class="row">
        <div class="px-md-5 text-center text-lg-left">
          <h1 class="display-2 text-uppercase mb-3">
            Driving innovation, powering growth
          </h1>
          <p class="text-light">
            Driving innovation to unlock new possibilities and accelerate progress. Powering growth through
            forward-thinking solutions that shape the future.
          </p>
          <a href="service.html" class="btn btn-home text-uppercase mt-1 py-3 px-5">
            Learn More
          </a>
        </div>
      </div>
    </div>
</div>

<!-- Header End -->

<!-- our-solution-start -->

  <div class="common-bg style-two solution-part pb-5 pt-5">
    <div class="container">
      <h1 class="display-4 text-uppercase text-center mb-5">
        Our Solutions
      </h1>
      <h3 class="text-uppercase mb-5 text-center">
        We design and deploy future-ready solutions,harnessing technology, expertise, and strategic insight to solve
        complex challenges and propel your success.
      </h3>
      <div class="row">
        <div class="col-md-6">
          <div class="single-services-box">
            <div class="service-content">
              <i class="fa fa-3x fa-laptop-code icon-primary mb-4"></i>
              <h4>FRONTEND DESIGN & DEVELOPMENT</h4>
              <p class="justify-text">
                Building interactive web experiences using modern frameworks (React, Vue, Angular). We focus on
                responsive layouts, smooth animations, and optimized performance to engage users and boost business
                outcomes.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-services-box">
            <div class="service-content">
              <i class="fa fa-3x fa-code icon-primary mb-4"></i>
              <h4>BACKEND DEVELOPMENT</h4>
              <p class="">
                Developing secure, high-availability backend systems with modern stacks (Node.js, Django, Laravel). We
                specialize in RESTful APIs, database optimization, microservices, and cloud deployments for peak
                performance and scalability.
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
              <h4>GRAPHIC DESIGN</h4>
              <p class="">
                Creating memorable brand identities through logos, packaging, social media assets, and print collateral.
                Our designs combine aesthetic appeal with strategic messaging to elevate your market presence.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-services-box">
            <div class="service-content">
              <i class="fas fa-server fa-3x icon-primary mb-4"></i>
              <h4>HOSTING & SERVER MANAGEMENT</h4>
              <p class="">
                Delivering proactive server administration with AWS/GCP optimization, load balancing, DDoS protection,
                and automated backups. We ensure 99.9% uptime, fast deployments, and enterprise-grade security for your
                critical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- our-solution-End -->

<!-- About Start -->

  <div class="container-fluid common-bg bg-section">
    <div class="container py-5">
      <h1 class="display-4 text-uppercase title-color text-center pb-5 pt-5">
        About Us
      </h1>
      <div class="row align-items-center pb-5 pt-5">
        <div class="col-lg-6 mb-3 about-img">
          <img class="img-fluid mb-4 mb-lg-0"  src="{{ $about && $about->file_path ? asset($about->file_path) : asset('frontend-assets/img/about-thumb.png') }}" alt="" />
        </div>
        <div class="col-lg-6 about-contents">
          <h4 class="display-5 text-uppercase mb-5">
              {{ $about->title ?? 'Your title goes here...' }}
          </h4>
          <p class="sub-text justify-text mb-3">
            {{ $about->subtitle ?? 'Your subtitle goes here...' }}
          </p>
          <p class="sub-text justify-text">
            {{ $about->desc ?? 'Your description goes here...' }}
          </p>
        </div>
      </div>
    </div>
  </div>

<!-- About End -->





<!-- Project Start -->

  <div class="container-fluid common-bg  py-5">
    <div class="container pb-5 pt-5">
      <h1 class="display-4 text-uppercase text-center mb-5">
        Visit Our Projects
      </h1>
      <div class="row">
        <div class="col-12 text-center mb-5 pt-5">
          <ul class="list-inline mb-4" id="portfolio-flters">
            <li class="btn btn-outline-dark text-uppercase py-2 px-4 mb-3 active " data-filter="*" style="margin-right: 10px;">
              <i class="fa fa-star mr-2"></i>All
            </li>
            <li class="btn btn-outline-dark text-uppercase py-2 px-4 mb-3" data-filter=".first" style="margin-right: 10px;">
              <i class="fa fa-laptop-code mr-2"></i>Design
            </li>
            <li class="btn btn-outline-dark text-uppercase py-2 px-4 mb-3" data-filter=".second">
              <i class="fa fa-mobile-alt mr-2"></i>Development
            </li>
          </ul>
        </div>
      </div>
      <div class="row  portfolio-container justify-content-center">

        <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
          <img src="{{ asset('/') }}frontend-assets/img/Design project card picture.png" class="card-img-top" alt="Portfolio Item">

          <div class="portfolio-btn d-flex align-items-center justify-content-center">
            <a href="#" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
              <i class="fa fa-4x fa-plus text-primary"></i>
            </a>
          </div>
        </div>
        <div class="modal fade" id="portfolioModal1" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Project Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- Image Carousel -->
                <div id="carouselPortfolio1" class="carousel slide carousel-fade mb-4" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="{{ asset('/') }}frontend-assets/img/Design project 1st picture.png" class="d-block w-100" alt="Project Image 1">
                    </div>
                    <div class="carousel-item">
                      <img src="{{ asset('/') }}frontend-assets/img/Design Project 2nd picture.png" class="d-block w-100" alt="Project Image 2">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselPortfolio1"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselPortfolio1"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

                <!-- Content Section -->
                <div class="portfolio-content">
                  <h5 class="text-black">Nourish Life Care – Disability Support Services Website</h5>
              
                  <p style="font-size: 14px;">We collaborated with Nourish Life Care, a dedicated disability care
                    provider, to design and develop an fully responsive website that reflects their mission of empowering
                    individuals with tailored support. The project focused on creating an accessible, user-friendly, and
                    informative platform that highlights their services, values, and commitment to person-centred care.
                    Our team delivered an intuitive UI/UX design, integrated service overviews, structured content
                    management, and easy-to-use contact and referral forms—ensuring seamless navigation for users,
                    caregivers, and support coordinators alike. The result is a modern, scalable website built for
                    accessibility, engagement, and ongoing ease of updates.
                  </p>
                  <ul class="list-inline">
                    <li class=""><strong>Client: </strong>Nourish Life Care</li>
                    <li class=""><strong>Category: </strong>Web Design</li>
                    <li class=""><strong>Date: </strong>January 2024</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <div class="modal fade" id="portfolioModal3" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Project Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- Image Carousel -->
                <div id="carouselPortfolio3" class="carousel slide carousel-fade mb-4" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="{{ asset('/') }}frontend-assets/img/mess-2.jpg" class="d-block w-100" alt="Project Image 1">
                    </div>
                    <div class="carousel-item">
                      <img src="{{ asset('/') }}frontend-assets/img/mess-3.jpg" class="d-block w-100" alt="Project Image 2">
                    </div>
                    <div class="carousel-item">
                      <img src="{{ asset('/') }}frontend-assets/img/mess-4.jpg" class="d-block w-100" alt="Project Image 2">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselPortfolio3"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselPortfolio3"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

                <!-- Content Section -->
                <div class="portfolio-content">
                  <h5 class="text-black">Manufacturing Execution System</h5>
                  <p style="font-size: 16px;">ChoiceDev engineered a custom MES solution for Hybritech Innovations Ltd to enable real-time production control and data-driven decision-making on the shop floor. Built with a microservices architecture and integrated with existing ERP systems, the MES features live data capture from IoT-enabled machinery, automated workflow execution, and KPI-driven performance dashboards. The system enhances traceability, reduces downtime, and ensures seamless synchronization between enterprise planning and floor-level operations.</p>
                  <ul class="list-inline">
                    <li class=""><strong>Client:</strong> Hybritech Innovations Ltd</li>
                    <li class=""><strong>Category:</strong> ERP Solution</li>
                    <li class=""><strong>Date:</strong> June 2024</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


<!-- Project End -->

<!-- choose us Start -->

  <div class="container-fluid common-bg py-5 ">
    <div class="container py-3">
      <h1 class="display-4 text-uppercase text-center mb-5 pb-5 pt-5">
        Why choose US
      </h1>
      <div class="row align-items-center pb-5">
        <div class="col-lg-6 choose-img">
          <img class="img-fluid mb-4 mb-lg-0" src="{{ asset('/') }}frontend-assets/img/AdobeStock_213205204_aboutuss.jpeg" alt="" />
        </div>
        <div class="col-lg-6 choose-contents">
          <h4 class="display-5 text-uppercase mb-4">
            Custom Digital Solutions That Build and Scale Your Business
          </h4>
          <p class=" justify-text mb-3 pt-2">
            We don’t believe in one-size-fits-all solutions. Every project begins with listening and understanding your
            vision, challenges, and goals—then we craft a strategy that delivers measurable results.
          </p>
          <p class="mb-4">
          <ul>
            <li>Custom web and digital solutions tailored to your business</li>
            <li>Cutting-edge technology for fast, secure, and scalable performance</li>
            <li>Creative design paired with strategic thinking to maximize growth.</li>
            <li>Future-proof platforms optimized for speed, SEO, and user experience</li>
            <li>Transparent collaboration with dedicated support from start to finish</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
<!-- choose us End -->

<!-- free quote section start -->
  <div class="container-fluid common-bg py-5">
    <div class="container free-quote-section py-3">
      <div class="row align-items-center pt-5 pb-5">
        <div class="col-lg-6 free-quote-img">
          <img class="img-fluid mb-4 mb-lg-0" src="{{ asset('/') }}frontend-assets/img/Free Quote WB.png" alt="free quote" />

        </div>
        <div class="col-lg-6 choose-contents pt-5">
          <h4 class="display-5 text-uppercase mb-5">
            Ready to Level Up with Future-Ready Technology?
          </h4>
          <p class="mb-2 justify-text">
            The future is full of potential—let ChoiceDev help you seize it. Through strategic tech innovation, we
            empower your growth and sharpen your competitive edge.
          </p>
          <div class="btn-free-qoute pt-5">
            <a href="{{ route('contact') }}" class="btn btn-qoute text-uppercase mt-1 py-3 px-5">Request a Free Quote</a>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- free quote section end -->
@endsection