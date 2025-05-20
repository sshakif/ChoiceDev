@extends('frontend.master')
@section('content')
<div class="banner2">
  <div class="banner-overlay">
    <div class="container banner-items">
      <div class="row">
        <div class=" px-md-5 text-center text-lg-left">
          <h1 class="display-3 text-uppercase mb-3">
            Digital Product Design & Development Services
          </h1>
          <p class="text-light mb-4">
            From initial design to deployment and ongoing management, we handle every step of your web project.
            Whether you need a stunning UX/UI refresh, a high-converting online store, or lightning-fast hosting,
            we’ve got you covered.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
<!-- Page Header Start -->

<!-- service-cards-design -->
<div class="common-bg pb-5">
  <div class="service-area inner-style">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-title center inner-style">
            <h2>Full-Cycle Web Development Services</h2>
            <h4>Building, Optimizing, and Managing High-Performance Digital Solutions</h4>
          </div>
        </div>
      </div>
      <div class="row">
        @foreach ($services as $service)
        <div class="col-lg-4 col-md-6">
          <div class="single-service-box">
            <div class="service-icon">
              @if ($service->file_path && file_exists(public_path($service->file_path)))
              <img src="{{ asset($service->file_path) }}" alt="{{ $service->title }}">
              @else
              <img src="{{ asset('frontend-assets/img/default-service.png') }}" alt="Default Service Icon">
              @endif
            </div>
            <div class="service-content">
              <h4>{{ $service->title }}</h4>
              <p>{{ Str::limit($service->short_desc, 120) }}</p>
            </div>
          </div>
        </div>
        @endforeach
      </div>

    </div>
  </div>

  <div class="common-bg style-two pb-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="center style-two dot">
            <h1 class="mb-5 title-font text-card">
              Creative Design &
              <span style="color: black">Development Solutions
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="facality-content">
            <h4>Web application design</h4>
            <p>
              We leverage the latest technologies to bring forward-thinking
              solutions that push the boundaries of what's possible, keeping you
              ahead in a fast-evolving digital landscape
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="facality-content">
            <h4>UX/UI design</h4>
            <p>
              Quality is in our DNA. Every solution we deliver is rigorously
              tested to meet the highest standards, ensuring reliability,
              security, and an exceptional user experience.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="facality-content">
            <h4>Ecommerce solutions</h4>
            <p>
              Every project is crafted with your unique business needs in mind. We
              don’t just deliver one-size-fits-all products—we tailor our approach
              to fit your vision, goals, and market demands.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="facality-content">
            <h4>Blog design</h4>
            <p>
              From initial concept to launch and beyond, our team covers every
              stage of development with dedicated experts who ensure seamless
              transitions and continuous support.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="facality-content">
            <h4>Logo design</h4>
            <p>
              Our efficient workflows and agile processes allow us to deliver
              high-quality results faster. We value your time and work with you to
              meet tight deadlines without sacrificing excellence.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="facality-content">
            <h4>Print Materials </h4>
            <p>
              We believe in open, honest communication at every stage of the
              project. You'll have full visibility, regular updates, and a partner
              ready to address any questions or changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
@endsection