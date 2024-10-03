<?php
/*
Template Name: Home Page
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();
$bgImg = get_post_meta($post->ID,'home_banner_image',true);
?>
<!-- <section class="homeBanner homeBannerBg" style="background-image:url('<?php echo wp_get_attachment_url($bgImg);?>')">
<div class="grid-container " >
<div class="grid-x">
<div class="large-5 medium-12 small-12 cell">
<div class="banner-content-section">
<h1><?php echo get_post_meta($post->ID,'home_banner_title',true);?></h1>
<?php echo get_post_meta($post->ID,'home_banner_sub_title',true);?>
<p><a class="btn button-cta" href="<?php echo get_post_meta($post->ID,'banner_button_link',true);?>"  target="_blank">Get Started<span></span></a></p>
</div>
</div>
</div>
</div>
</section> -->

<?php echo do_shortcode('[smartslider3 slider="2"]'); ?>
<section class="serviceSection" id="service-offered">
	<div class="grid-container serviceSection-wrapper">
		<div class="grid-x">
			<div class="large-3 medium-12 small-12 cell">
				<div class="serviceleft">
					<h3>Services Offered</h3>
					<?php echo get_post_meta($post->ID,'service_section_content',true);?>
				</div>
			</div>
			<div class="large-9 medium-12 small-12 cell">
				<div class="serviceright"><?php
					$args = array(
						'post_type' => 'services',
						'posts_per_page'=>9
					);
					$query = new WP_Query( $args );
					if ( $query->have_posts() ) :?>
					<div class="grid-x">
						<?php 
						$i = 1;
						while ( $query->have_posts() ) : $query->the_post();
						global $post;
						$icon = get_post_meta($post->ID,'service_icon',true);
						$formId = get_post_meta($post->ID,'subscription_form_id',true);
						?>
						<div class="large-4 medium-4 small-6 cell service-item text-center">
							<div class="consut-icon">
								<img src="<?php echo wp_get_attachment_url($icon);?>">
							</div>
							<div class="consult-cont-sec">
								<?php if($formId):?>
								<a href="<?php echo $formId;?>">
									<span class="consult-title">
										<?php the_title();?>
									</span>
									<span class="consult-type">
										<?php echo get_post_meta($post->ID,'service_type',true);?>
									</span>
								</a>
								<?php else:?>
								<span class="consult-title">
									<?php the_title();?>
								</span>
								<span class="consult-type">
									<?php echo get_post_meta($post->ID,'service_type',true);?>
								</span>
								<?php endif;?>
							</div>
						</div>
						<?php endwhile;wp_reset_postdata();?>
						<!-- 					<div class="large-4 medium-12 small-12 cell service-item text-center">
<div class="consut-icon">
<img src="<?php echo get_template_directory_uri(); ?>/assets/images/many-more.png">
</div>
<div class="consult-cont-sec">
<span class="consult-title">
Many <strong>more</strong>
</span>
</div>
</div> -->
					</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="videoSection" style="background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/video-bg.png')" id="how-it-works">
	<div class="grid-container">
		<div class="grid-x">
			<div class="large-12 medium-12 small-12 cell text-center top-video-scetion">
				<h3><?php echo get_post_meta($post->ID,'video_title',true);?></h3>
				<h4><?php echo get_post_meta($post->ID,'video_sub_title',true);?></h4>
				<p><?php echo get_post_meta($post->ID,'video_description',true);?></p>
			</div>
		</div>
		<div class="grid-x video-bottom">
			<div class="large-5 medium-12 small-12 cell text-center bottom-video-scetion-lft">
				<div class="video-wrapper">
					<?php //echo do_shortcode('[global-template template-id=906]'); ?>
					
					<?php the_content(); ?>
<!-- 					<iframe width="560" height="400" src="<?php echo get_post_meta($post->ID,'video_code',true);?>" title="YouTube video player" frameborder="0" allow="" allowfullscreen></iframe> -->
				</div>
			</div>
			<div class="large-7 medium-12 small-12 cell text-center bottom-video-scetion-rght">
				<?php
				if( have_rows('process_section') ):
				$i = 1;?>
				<?php while ( have_rows('process_section')) : the_row();
				$ptitle = get_sub_field('process_title');
				$picon = get_sub_field('process_icon');
				$desc = get_sub_field('process_description');
				?>
				<div class="videoItem">
					<div class="grid-x">
						<div class="large-2 medium-4 small-12 cell text-center">
							<span class="videoIcon">
								<img src="<?php echo wp_get_attachment_url($picon);?>">
							</span>
						</div>
						<div class="large-7 medium-8 small-12 cell text-left">
							<h5><?php echo $ptitle;?></h5>
							<?php echo $desc;?>
						</div>
					</div>
				</div>
				<?php endwhile;?>
				<?php endif;?>
			</div>
		</div>
		<div class="grid-x">
			<div class="large-12 medium-12 small-12 cell text-center video-bottom-submit">
				<p><a class="btn button-cta" href="https://app.familydoc247.ie/" target="_blank">Start now<span></span></a></p>
			</div>
		</div>
	</div>
</section>
<section class="treatmentSection">
	<div class="treatment-container">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-12 medium-12 small-12 cell">
				<h3>Treatments Offered</h3>
				<h5>If you're experiencing one of the following symptoms or conditions, our doctors can help</h5>
				<div class="treatmentSlider"><?php
					$args = array(
						'post_type' => 'treatments',
						'posts_per_page'=>9,
						'meta_query'    => array(
							array(
								'key'       => 'featured',
								'value'     => '1',
								'compare'   => '=',
							),
						),
					);
					$query = new WP_Query( $args );
					if ( $query->have_posts() ) :?>
					<?php 
					$i = 1;
					while ( $query->have_posts() ) : $query->the_post();
					global $post;
					$imageItem = get_post_meta($post->ID,'treatment_image',true);
					$formId = get_post_meta($post->ID,'subscription_form_id',true);
					if($formId){
						$flink = get_permalink();
					}else{
						$flink = '#';
					}
					?>
					<div class="slide-item">
						<div class="slideImg"><img src="<?php echo wp_get_attachment_url($imageItem);?>"></div>
						<div class="treatmentTitle">
							<?php the_title();?>
						</div>
						<div class="slideOverlay">
							<div class="overlay-content">
								<a href="<?php echo site_url();?>/treatments" >View details</a>
							</div>
						</div>
					</div>
					<?php endwhile;?>
					<div class="slide-item">
						<div><img src="<?php echo get_template_directory_uri(); ?>/assets/images/view-all-bg-new.png"></div>
						<div class="slideOverlay last-item">
							<div class="overlay-content">
								<a href="<?php echo site_url();?>/treatments">View all</a>
							</div>
						</div>
					</div>
					<?php wp_reset_postdata();endif;?>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="appointmentSection" style="background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/appointment-bg.png')">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-6 medium-12 small-12 cell text-center">
			<h3>Make an appointment</h3>
			<p class="appt-desc"><?php echo get_post_meta($post->ID,'appointment_description',true);?></p>
			<div class="button-section">
				<p class="appt-button">
					<a href="<?php echo get_post_meta($post->ID,'appointment_link',true);?>" class="blue-button">Make An Appointment</a>
				</p>
				<p class="appt-button">
					<a href="<?php echo get_post_meta($post->ID,'video_consulting_link',true);?>" class="orange-button">Schedule a Telephone or Video Consultation</a>
				</p>
			</div>
		</div>
	</div>
</section>
<section class="testiSection" style="background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/testimonail-bg.png')">
	<div class="testi-container">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-12 medium-12 small-12 cell">
				<div class="grid-x grid-padding-x">
					<div class="large-6 medium-12 small-12 cell testi-left">
						<div class="test-lft-inner">
							<h3>Patient <br>Testimonials</h3>
							<p>See what our patients say about us.</p>

						</div>
					</div>
					<div class="large-6 medium-12 small-12 cell">
						<div class="testi-item-inner">
							<div class="testi-items">
								<?php
								$targs = array(
									'post_type' => 'testimonials');
								$tquery = new WP_Query( $targs );
								if ( $tquery->have_posts() ) :?>
								<?php while ( $tquery->have_posts() ) : $tquery->the_post();
								global $post;
								$caption = get_post_meta($post->ID,'testimonial_caption',true);
								?>
								<div class="testi-item">
									<h4><?php echo $caption;?></h4>
									<?php the_content();?>
									<span class="author-meta"><?php the_title();?></span>
								</div>
								<?php endwhile;?>
								<?php wp_reset_postdata();endif;?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="homeContact" style="background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/contact-bg.png')">
	<div class="grid-container home-contact-wrapper">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-5 medium-12 small-12 cell show-for-small-only">
				<div class="getintouchWrap">
					<h3><?php echo get_post_meta($post->ID,'contact_title',true);?></h3>
					<p><?php echo get_post_meta($post->ID,'contact_description',true);?></p>
				</div>
			</div>
			<div class="large-7 medium-12 small-12 cell">
				<div class="contactform-inner">
					<?php echo do_shortcode('[contact-form-7 id="6"]');?>
				</div>
			</div>
			<div class="large-5 medium-12 small-12 cell show-for-medium">
				<div class="getintouchWrap">
					<h3><?php echo get_post_meta($post->ID,'contact_title',true);?></h3>
					<p><?php echo get_post_meta($post->ID,'contact_description',true);?></p>
				</div>
			</div>
		</div>
	</div>
	<div class="grid-container">
		<div class="grid-x grid-padding-x align-center contact-bottom">
			<div class="large-6 medium-12 small-12 cell text-left">
				<p>If you’re having a medical <br>emergency, Call 112 or 999</p>
			</div>
			<div class="large-6 medium-12 small-12 cell text-center">
				<p>If you’re having symptoms of Covid19, self-isolate/restrict <br>your movement and contact us or your local GP for advice!</p>
			</div>
		</div>
	</div>
</section>

<section id="plans-pricing" class="plans-pricing">
	<div class="more-resource-container">
		<div class="grid-x grid-padding-x">
			<div class="large-12 medium-12 small-12 cell">
				<h3><?php echo get_post_meta($post->ID,'resources_left_title',true);?></h3>
				<p><?php echo get_post_meta($post->ID,'recourses_left_description',true);?></p>
			</div>
			<div class="large-4 medium-4 small-12 cell family-man">
				<img src="https://familydoc247.ie/wp-content/uploads/2024/01/fmaily-plans-man.png">
			</div>
			<div class="large-8 medium-8 small-12 cell">
				<img src="https://familydoc247.ie/wp-content/uploads/2024/01/family-plan.png">
			</div>
		</div>
		<div class="grid-x mt-5">
			<div class="large-12 medium-12 small-12 cell text-center">
				<p><a class="btn button-cta" href="/plans-pricing/">Learn More<span></span></a></p>
			</div>
		</div>
	</div>
</section>

<section id="business-partnership" class="more-resource">
	<div class="more-resource-container">
		<div class="grid-x grid-padding-x">
			<div class="large-12 medium-12 small-12 cell">
				<h2>Business & Partnership</h2>
				<div class="grid-x">
					<div class="large-6 medium-6 small-12 cell">
						<div class="lft-resource-inner resource-inner">
							<img src="<?php echo wp_get_attachment_url(get_post_meta($post->ID,'resources_right_image',true));?>">
<!--  							<img src="<?php echo wp_get_attachment_url(get_post_meta($post->ID,'resources_left_image',true));?>"> -->
							<div class="resource-overlay">
								<div class="res-overlay-inner">
<!-- 									<h3><?php echo get_post_meta($post->ID,'resources_left_title',true);?></h3>
									<p><?php echo get_post_meta($post->ID,'recourses_left_description',true);?></p> -->
									<h3><?php echo get_post_meta($post->ID,'resources_right_title',true);?></h3>
									<p><?php echo get_post_meta($post->ID,'recourses_right_description',true);?></p>
								</div>
							</div>
						</div>
					</div>
					<div class="large-6 medium-6 small-12 cell">
<!-- 						<div class="grid-x">
							<div class="large-12 medium-12 small-12 cell">
								<div class="rgt-resource-inner resource-inner">
									<img src="<?php echo wp_get_attachment_url(get_post_meta($post->ID,'resources_right_image',true));?>">
									<div class="resource-overlay">
										<div class="res-overlay-inner">
											<h3><?php echo get_post_meta($post->ID,'resources_right_title',true);?></h3>
											<p><?php echo get_post_meta($post->ID,'recourses_right_description',true);?></p>
										</div>
									</div>
								</div>
							</div>
						</div> -->
						<div class="grid-x">
							<div class="large-12 medium-12 small-12 cell">
								<div class="rgt-resource-inner1 resource-inner">
									<img src="<?php echo wp_get_attachment_url(get_post_meta($post->ID,'resources_right_bottom_image1',true));?>">
									<div class="resource-overlay">
										<div class="res-overlay-inner">
											<h3><?php echo get_post_meta($post->ID,'resources_right_bottom_title1',true);?></h3>
											<p><?php echo get_post_meta($post->ID,'recourses_right_bottom_description1',true);?></p>
										</div>
									</div>
								</div>
							</div>
							<!-- 							<div class="large-6 medium-12 small-12 cell">
<div class="rgt-resource-inner2 resource-inner">
<img src="<?php echo wp_get_attachment_url(get_post_meta($post->ID,'resources_right_bottom_image2',true));?>">
<div class="resource-overlay">
<div class="res-overlay-inner">
<h3><a href="<?php echo site_url()?>/blog"><?php echo get_post_meta($post->ID,'resources_right_bottom_title2',true);?></a></h3>
<p><?php echo get_post_meta($post->ID,'recourses_right_bottom_description2',true);?></p>
</div>
</div>
</div>
</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="grid-x mt-5">
			<div class="large-12 medium-12 small-12 cell text-center">
				<p><a class="btn button-cta" href="https://familydoc247.ie/business-partnership/">More Info<span></span></a></p>
			</div>
		</div>
	</div>
</section>

<section id="blog" class="blog">
	<div class="more-resource-container">
		<div class="grid-x grid-padding-x">
			<div class="large-12 medium-12 small-12 cell">
				<h3>Blogs</h3>
				<p>We hope to provide you with the right knowledge and guidance to enhance your life through our blogs.</p>
				<img src="https://familydoc247.ie/wp-content/uploads/2024/01/blog-image.png">
			</div>
		</div>
		<div class="grid-x mt-5">
			<div class="large-12 medium-12 small-12 cell text-center">
				<p><a class="btn button-cta" href="/blog/">Learn More<span></span></a></p>
			</div>
		</div>
	</div>
</section>



<?php endwhile; endif; ?>						
<?php get_footer(); ?>
