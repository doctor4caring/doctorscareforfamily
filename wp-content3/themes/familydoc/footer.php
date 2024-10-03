<?php
/**
 * The template for displaying the footer. 
 *
 * Comtains closing divs for header.php.
 *
 * For more info: https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */			
?>
<footer class="footer-section" id="footer">
	<div class="footer-container">
		<div class="grid-x  align-center">
			<div class="small-12 medium-12 large-12 cell">
				<div class="grid-x grid-padding-x">
					<div class="small-12 medium-6 large-6 cell">
						<div class="grid-x grid-padding-x">
							<div class="small-12 medium-6 large-6 cell footer-col-1">
								<div class="footer-logo">
									<img src="/wp-content/uploads/2023/12/footer-logo-1.png">
								</div>
								<div class="footer-share">
									<a href="https://www.facebook.com/people/FamilyDoc247/61555277206049/" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/facebook.png"></a>
									<a href="https://x.com/Familydoc247" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/twitter.png"></a>
									<a href="https://www.tiktok.com/@familydoc247online?lang=en" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/tiktok.png"></a> 
									<a href="https://www.instagram.com/familydoc247/"  target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/instagram.png"></a>
									<a href="https://youtu.be/SClrYehPnQE?si=k_4qOEYvxPBVZT-z" target="_blank"><img src="https://familydoc247.ie/wp-content/uploads/2024/01/youtube.png"></a>
									<a href="https://www.linkedin.com/in/family-doc/"  target="_blank"><img src="https://familydoc247.ie/wp-content/uploads/2024/01/linkedin.png"></a>
								</div>
								<h4>Available Now</h4>
								<div class="app-logo">
									<a href="#"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/app-store.png"></a>
								</div>
								<div class="app-logo">
									<a href="#"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/play-store.png"></a>
								</div>
							</div>
<!-- 							<div class="small-12 medium-6 large-6 cell footer-col-2">
								<div class="footer-col-inner">
									<h5>Online Prescription</h5><?php
									$args = array(
										'post_type' => 'treatments',
										'posts_per_page'=>8,
										'meta_query'    => array(
											array(
												'key'       => 'show_in_footer',
												'value'     => '1',
												'compare'   => '=',
											),
										),
									);
									$query = new WP_Query( $args );
									if ( $query->have_posts() ) :?>
									<ul>
										<?php 
										while ( $query->have_posts() ) : $query->the_post();
										global $post;?>
										<li><a href="<?php echo get_permalink();?>"><?php the_title();?></a></li>
										<?php endwhile;?>
										<li><a href="<?php echo site_url();?>/online-prescription">See more</a></li>
									</ul>
									<?php wp_reset_postdata();endif;?>
								</div>
							</div> -->
							
							<div class="small-12 medium-6 large-6 cell footer-col-2">
								<div class="footer-col-inner">
									<h5>Services We Offer</h5>
									
									<ul>
										<li><a href="<?php echo site_url();?>/telephone-consultation/">Telephone Consultation</a></li>
										<li><a href="<?php echo site_url();?>/video-consultation/">Video Consultation</a></li>
										<li><a href="<?php echo site_url();?>/online-prescription/">Online Prescription</a></li>
										<li><a href="<?php echo site_url();?>/medical-certificate/">Medical Certificate</a></li>
										<li><a href="<?php echo site_url();?>/hospital-consultant-ae-referral/">Hospital Consultant + A&E  Referral</a></li>
										<li><a href="<?php echo site_url();?>/covid19-advice-sick-cert-referral/">Covid19 Advice, Sick Cert & Referral</a></li>
										<li><a href="<?php echo site_url();?>/sti-screening/">STI Screening</a></li>
										<li><a href="<?php echo site_url();?>/home-testing/">Home Testing</a></li>
										<li><a href="<?php echo site_url();?>/many-more/">Many More</a></li>
									</ul>
								</div>
							</div>
						
						</div>
					</div>

					<div class="small-12 medium-6 large-6 cell">
						<div class="grid-x grid-padding-x">
							<div class="small-12 medium-12 large-6 cell footer-col-3">
								<h5>Quick Links</h5>
								<ul>
									<li><a href="<?php echo site_url();?>/about-us">About Us</a></li>
									<li><a href="<?php echo site_url();?>/faq">FAQ</a></li>
									<li><a href="<?php echo site_url();?>/blog">Blog</a></li>
									<li><a href="<?php echo site_url();?>/career">Careers</a></li>
									<li><a href="<?php echo site_url();?>/online-prescription/">Online Prescription</a></li>
								</ul>
								
								<div class="cont-address">
									<h5>Head Office</h5>
									<div class="cont-addr-inner">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/location-pin.png">
										<span>77 Camden Street Lower, Dublin 2</span>
									</div>
								</div>
							</div>
							<div class="small-12 medium-12 large-6 cell footer-col-3">
								<div class="contact-col">
									<h5>Medical Emergency</h5>
									<p><a href="tel:112">If you’re having a medical
										emergency, Call 112 or 999</a></p>
								</div>
								<div class="contact-col">
									<h5>Business & Partnership</h5>
									<p><a href="mailto:business@familydoc247.ie">business@familydoc247.ie</a></p>
								</div>
								<div class="contact-col">
									<h5>Our Patient Support</h5>
									<ul>
										<li><a href="mailto:contact@familydoc247.ie">contact@familydoc247.ie</a></li>
										<li><a href="tel:+35319069327">+353 1 906 9327</a></li>
									</ul>

								</div>
								
							</div>
							<div class="small-12 medium-12 large-12 cell">
								
							</div>
						</div>
					</div>
				</div>
				<div class="grid-x grid-padding-x copyright-block">
					<div class="small-12 medium-6 large-6 cell">
						<p>2021 Copyright <a href="/">familydoc247.ie</a></p>
					</div>
					
					<div class="small-12 medium-6 large-6 cell text-right privacy-block">
						<p><a href="/privacy-policy/">Privacy Policy</a> | <a href="/terms-and-conditions/">Terms of Use<a/> | <a href="/cookies-policy/">Cookies Policy<a/></p>
					</div>
				</div>
			</div>
		</div> <!-- end #inner-footer -->
	</div>
</footer> <!-- end .footer -->

</div>  <!-- end .off-canvas-content -->

</div> <!-- end .off-canvas-wrapper -->

<?php wp_footer(); ?>
<script src="<?php echo get_template_directory_uri(); ?>/assets/scripts/slick.min.js" type="text/javascript"></script>
<script type="text/javascript">
	jQuery(document).ready(function($){
		$(function() {
			$('.custom-link a').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
		});
		$(".treatmentSlider").slick({
			dots: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			nextArrow: '<button class="slick-next slick-arrow"></button>',
			prevArrow: '<button class="slick-prev slick-arrow"></button>',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}]

		});
		$(".testi-items").slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false
		});
		$(".partners-items").slick({
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows:false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				}]
		});
		jQuery('.click-apply').click(function(){
			var currVal = '';
			currVal = $(this).attr('data-title');
			$('#currDept').val(currVal);
			$("#modalApply").reveal();

			//$('a.click-apply').trigger('click');
			return false;
		});

		var width = $(window).width();
		$('.resource-inner').hover(function(){
			$(this).children('.resource-overlay').children('.res-overlay-inner').css("opacity", "1");
		}, function(){
			$(this).children('.resource-overlay').children('.res-overlay-inner').css("opacity", "0");
		});
		//alert(width);1799

		$( ".submit-section" ).closest( ".wdform_column" ).addClass('no-bg-column');
		$( ".online-form .wdform_column" ).each( function( index, element ){
			var counter = index + 1;
			var count = ('0' + counter).slice(-2);
			$(this).prepend('<span class="counter-item">'+count+'</span>');
		});
		$('.linkTo a').click(function(){
			//alert($curentLoc);
			var target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: ($(target).offset().top)
			}, 2000);
			return false;
		});
		$('.scroll-down a').click(function(){
			$('html, body').animate({
				scrollTop: ($('.online-form-section').offset().top)
			}, 2000);
			return false;
		});
	});
</script>
</body>

</html> <!-- end page -->