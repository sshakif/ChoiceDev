<!-- Navbar Start -->
    <!-- <div class="container bg-white position-relative">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href={{ route('home') }} class="navbar-brand text-secondary">
                <img src="{{ asset('/') }}frontend-assets/img/choiceDev_logo.png" alt="Logo">
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ml-auto py-0 pr-3 border-right">
                    <a href={{ route('home') }} class="nav-item nav-link active">Home</a>
                 
                    <a href={{ route('services') }} class="nav-item nav-link">Services</a>
                    <a href={{ route('resources') }} class="nav-item nav-link">Resources</a>
                    <a href={{ route('contact') }} class="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div> -->
    <!-- Navbar End -->

        <div class="container bg-white position-relative">
      <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
        <a ref={{ route('home') }} class="navbar-brand text-secondary">
       <img src="{{ asset('/') }}frontend-assets/img/choiceDev_logo.png" alt="Logo" style="filter: brightness(1.5) contrast(1.2);">
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ml-auto py-0 pr-3 border-right">
                <a href={{ route('home') }} class="nav-item nav-link">Home</a>
                    <a href={{ route('services') }} class="nav-item nav-link">Services</a>
                    <a href={{ route('resources') }} class="nav-item nav-link">Resources</a>
                    <a href={{ route('contact') }} class="nav-item nav-link">Contact</a>
            <a href={{ route('contact') }} class="nav-item nav-link quote-button"
              >GET A FREE QUOTE</a
            >
          </div>
        </div>
      </nav>
    </div>