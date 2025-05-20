@extends('frontend.master')
@section('content')
 <div class="banner3">
		<div class="banner-overlay">
			<div class="container banner-items">
				<div class="row">
					<div class=" px-md-5 text-center text-lg-left">
						<h1 class="display-3 text-uppercase mb-3">
							Learn & Grow with Our Insights
						</h1>
						<p class="text-light mb-4">
							Expert tips, trends, and success stories to empower your digital journey
					</div>

				</div>
			</div>
		</div>
	</div>
	<!-- blog-list-start -->
	<div class="common-bg">
		<div class="blog-grid-area">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<div class="row">
							<div class="col-lg-12 col-md-6">
								<div class="single-blog-box">
									<div class="blog-thumb">
										<img src="{{ asset('/') }}frontend-assets/img/blog-6.png" alt="">
									</div>
									<div class="blog-content">
										<div class="blog-meta">
											<span>Admin: Mera</span>
											<span>Comments (04)</span>
										</div>
										<div class="blog-title">
											<a href="blog-details.html">Solution This Business For is Marketing Blog</a>
											<p>Monotonectaly granular to front markets task data semper maecenas ferform
											</p>
										</div>
									</div>
									<div class="blog-category">
										<a href="#">SEO</a>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-6">
								<div class="single-blog-box">
									<div class="blog-thumb">
										<img src="{{ asset('/') }}frontend-assets/img/blog-2.png" alt="">
									</div>
									<div class="blog-content">
										<div class="blog-meta">
											<span>Admin: Mera</span>
											<span>Comments (04)</span>
										</div>
										<div class="blog-title">
											<a href="blog-details.html">Easy and Most Powerful Server and Platform.</a>
											<p>Monotonectaly granular to front markets task data semper maecenas ferform
											</p>
										</div>
									</div>
									<div class="blog-category">
										<a href="#">UI/UX</a>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-6">
								<div class="single-blog-box">
									<div class="blog-thumb">
										<img src="{{ asset('/') }}frontend-assets/img/blog-3.png" alt="">
									</div>
									<div class="blog-content">
										<div class="blog-meta">
											<span>Admin: Mera</span>
											<span>Comments (04)</span>
										</div>
										<div class="blog-title">
											<a>In eu fringilla, accumsan purusvel sollicitudin.</a>
											<p>Monotonectaly granular to front markets task data semper maecenas ferform
											</p>
										</div>
									</div>
									<div class="blog-category">
										<a href="#">Software</a>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-6">
								<div class="single-blog-box">
									<div class="blog-thumb">
										<img src="{{ asset('/') }}frontend-assets/img/blog-4.png" alt="">
									</div>
									<div class="blog-content">
										<div class="blog-meta">
											<span>Admin: Mera</span>
											<span>Comments (04)</span>
										</div>
										<div class="blog-title">
											<a href="blog-details.html">Vivamus vehicula nl purus at eros interdum.</a>
											<p>Monotonectaly granular to front markets task data semper maecenas ferform
											</p>
										</div>
									</div>
									<div class="blog-category">
										<a href="#">Android</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="row">
							<div class="col-lg-12">
								<div class="widget-sidber">
									<div class="widget_search">
										<form action="#" method="get">
											<input type="text" name="s" value="" placeholder="Search Here"
												title="Search for:">
											<button type="submit" class="icons">
												<i class="fa fa-search"></i>
											</button>
										</form>
									</div>
								</div>
								<div class="widget-sidber">
									<div class="widget-sidber-content">
										<h4>Categories</h4>
									</div>
									<div class="widget-category">
										<ul>
											<li><a href="#">Web Development<i class="bi bi-arrow-right"></i></a></li>
											<li><a href="#">UX/UI<i class="bi bi-arrow-right"></i></a></li>
											<li><a href="#">Ecommerce solutions<i class="bi bi-arrow-right"></i></a>
											</li>
											<li><a href="#">Web Design<i class="bi bi-arrow-right"></i></a></li>
											<li><a href="#">SEO<i class="bi bi-arrow-right"></i></a></li>
										</ul>
									</div>
								</div>
								<div class="widget-sidber">
									<div class="widget-sidber-content">
										<h4>Popular Post</h4>
									</div>
									<div class="sidber-widget-recent-post">
										<div class="recent-widget-thumb">
											<img src="{{ asset('/') }}frontend-assets/img/recent-post-1.png" alt="">
										</div>
										<div class="recent-widget-content">
											<a href="#">Digital Marketing Strategy Action P…</a>
											<p> Jan, 26 2024</p>
										</div>
									</div>
									<div class="sidber-widget-recent-post">
										<div class="recent-widget-thumb">
											<img src="{{ asset('/') }}frontend-assets/img/recent-post-2.png" alt="">
										</div>
										<div class="recent-widget-content">
											<a href="#">6 Things You Must Know Before Hirin…</a>
											<p> Jan, 26 2024</p>
										</div>
									</div>
									<div class="sidber-widget-recent-post">
										<div class="recent-widget-thumb">
											<img src="{{ asset('/') }}frontend-assets/img/recent-post-3.png" alt="">
										</div>
										<div class="recent-widget-content">
											<a href="#">In eu fringilla, accumsan purus vel sollicitudin.</a>
											<p> Jan, 26 2024</p>
										</div>
									</div>
								</div>
								<div class="widget-sidber">
									<div class="widget-sidber-content">
										<h4>Tags</h4>
									</div>
									<div class="widget-catefories-tags">
										<a href="#">Design</a>
										<a href="#">Software</a>
										<a href="#">SEO</a>
										<a href="#">Development</a>
										<a href="#">Hosting</a>
										<a href="#">Technology</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection