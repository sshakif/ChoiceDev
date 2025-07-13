@extends('frontend.master')
@section('content')
    <div class="common-bg pt-5">
      <div class="contact-area style-three inner">
        <div class="container">
          <div class="row pb-5">
            <div class="col-lg-12 text-center">
              <div class="contact-title center inner-style">
                <h1>
                  Your goals are our priority—let’s achieve them together.
                </h1>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-12">
              <div class="single-contact-info-box">
                <div class="info-content">
                  <h4>Request Your Free Quote</h4>
                </div>
                <div class="contact-info-box">
                  <div class="contact-info-icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div class="contact-info-content">
                    <p>Call Us</p>
                    <h4>0479 139 122</h4>
                  </div>
                </div>
                <div class="contact-info-box">
                  <div class="contact-info-icon">
                    <i class="fa-regular fa-envelope"></i>
                  </div>
                  <div class="contact-info-content">
                    <p>Send E-Mail</p>
                    <h4>info@choicedev.com.au</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-12">
              <div class="single-contact-box">
                <div class="contact-content pt-5">
                  <p class="text-light">
                    Submit your project information, and we’ll respond promptly
                    with a tailored estimate at no cost.
                  </p>
                </div>
                <form action="contact.php" method="POST">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="single-input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="single-input-box">
                        <input
                          type="text"
                          name="company"
                          placeholder="Your Company"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="single-input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter E-Mail"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="single-input-box">
                        <input
                          type="number"
                          name="number"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="single-input-box">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="single-input-box">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Write Massage"
                          required
                        ></textarea>
                      </div>
                    </div>
                                  <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
                    <div class="col-lg-12">
                      <div id="form-message" style="display: none"></div>
                      <div class="massage-sent-button">
                        <button type="submit" class="submit">
                          Send Massage
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                              <!-- reCAPTCHA Token Set -->
              <script>
                grecaptcha.ready(function () {
                  grecaptcha.execute('6Le_3lErAAAAAB9P1eoYPNtKhUEGKf4isAp_WZkC', { action: 'submit' }).then(function (token) {
                    document.getElementById('g-recaptcha-response').value = token;
                  });
                });
              </script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection
