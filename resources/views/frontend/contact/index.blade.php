@extends('frontend.master')
@section('content')
<div class="common-bg pt-5">

		<div class="contact-area style-three inner">

			<div class="container">
				<div class="row pb-5">
					<div class="col-lg-12 text-center">
						<div class="contact-title center inner-style">
							<h1>Let’s Build the Future Together!</h1>
						</div>
					</div>
				</div>
				<div class="row align-items-center ">

					<div class="col-lg-4 col-md-12">
						<div class="single-contact-info-box">
							<div class="info-content">
								<h4>Don’t Forget to Contact Us</h4>
							</div>
							<div class="contact-info-box">
								<div class="contact-info-icon">
									<i class="fa-solid fa-phone"></i>
								</div>
								<div class="contact-info-content">
									<p>Call Us</p>
									<h4>+980 123 (4567) 890</h4>
								</div>
							</div>
							<div class="contact-info-box">
								<div class="contact-info-icon">
									<i class="fa-regular fa-envelope"></i>
								</div>
								<div class="contact-info-content">
									<p>Send E-Mail</p>
									<h4>example@gmail.com</h4>
								</div>
							</div>
							<div class="contact-info-box">
								<div class="contact-info-icon">
									<i class="fa-regular fa-address-card"></i>
								</div>
								<div class="contact-info-content">
									<p>Office Hours</p>
									<h4>8.00 AM to 5.00 PM</h4>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-8 col-md-12">
						<div class="single-contact-box">
							<div class="contact-contetn pt-5">
								<h4>Write to Us Anytime</h4>
							</div>
							<form action="#">
								<div class="row">
									<div class="col-lg-6">
										<div class="single-input-box">
											<input type="text" name="name" placeholder="Your Name" required>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="single-input-box">
											<input type="text" name="Email" placeholder="Enter E-Mail" required>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="single-input-box">
											<input type="text" name="Phone" placeholder="Phone Number" required>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="single-input-box">
											<select name="place" id="place">
												<option value="saab">Subject</option>
												<option value="opel">Web Development </option>
												<option value="audi">Design </option>
												<option value="audi">Marketing</option>
											</select>
										</div>
									</div>
									<div class="col-lg-12">
										<div class="single-input-box">
											<textarea name="massage" id="massage" placeholder="Write Massage"
												required></textarea>
										</div>
									</div>
									<div class="col-lg-12">
										<div class="massage-sent-button">
											<button type="submit">Send Massage </button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
