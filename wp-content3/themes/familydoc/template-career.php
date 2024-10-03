<?php
/*
Template Name: Career Page
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();

the_content();
?>
<section class="career-intro-section">
	<div class="grid-container">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-12 medium-12 small-12 cell text-center">
				<h3>Why you should join us</h3>
				<div class="carrer-intro-items grid-x grid-padding-x align-center">
				<?php while ( have_rows('careers_block')) : the_row();
				$itemTitle = get_sub_field('block_title');
				$itemDesc = get_sub_field('block_description');
				?>
				<div class="large-4 medium-4 small-12 cell text-center">
					<div class="career-intro-item">
						<h4><?php echo $itemTitle;?></h4>
						<?php echo $itemDesc;?>
					</div>
				</div>
				<?php endwhile;?>
			</div>
		</div>
	</div>
	</div>
</section>
<section class="jobs-position-sec" style="background-image:url(<?php echo get_template_directory_uri(); ?>/assets/images/job-bg.png)">
	<div class="grid-container position-container">
		<div class="grid-x align-center">
			<div class="large-6 medium-6 small-12 cell text-center">	
				<h3>Current Opening</h3><?php
				$args = array(
				'post_type' => 'jobs',
				'posts_per_page'=>9
				);
				$query = new WP_Query( $args );
				if ( $query->have_posts() ) :?>
				<div class="job-inner">
					<?php 
					$i = 1;
					while ( $query->have_posts() ) : $query->the_post();
					global $post;?>
					<div class="job-inner-wrapper">
						<div class="grid-x align-center">
							<div class="large-6 medium-4 small-12 cell text-center left-job-item">
								<div class="job-name">
									<?php the_title();?>                 
								</div>
							</div>
							<div class="large-6 medium-4 small-12 cell text-center">
								<div class="apply-inner">
									<div>
									<a class="click-apply" data-open="modalApply" data-title="<?php the_title();?>">Apply Now</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<?php endwhile;?>
				</div>
				<?php wp_reset_postdata();endif;?>
			</div>
		</div>
	</div>
</section>
<section class="self-apply-section">
	<div class="grid-x align-center">
		<div class="large-7 medium-12 small-12 cell">
			<div class="apply-content-section">
				<h3 class="text-center">Self apply</h3>
				<div class="c-form-inputs"><?php echo do_shortcode('[contact-form-7 id="8afbb6c" title="Self Apply Form"]'); ?></div>
			</div>
		</div>
	</div>
</section>
<?php /*
<section class="our-partners-section">
	<div class="grid-x align-center">
		<div class="large-10 medium-12 small-12 cell">
			<h3 class="text-center">Our Partners</h3>
			<div class="partners-items">
				<?php
				if( have_rows('partners_logos','option') ):?>
				<?php while ( have_rows('partners_logos','option')) : the_row();
				$picon = get_sub_field('partner_logo');
				?>
				<div class="partner-item">
					<img src="<?php echo wp_get_attachment_url($picon);?>">
				</div>
				<?php endwhile;endif;?>
			</div>
		</div>
	</div>
</section>
<?php */ ?>
<?php endwhile; endif; ?>
<div class="reveal" id="modalApply" data-reveal>
	<div class="apply-now-form-wrapper">
		<div class="c-form-inputs"><?php echo do_shortcode('[contact-form-7 id="8afbb6c" title="Self Apply Form"]');?></div>
	</div>
</div>
<?php get_footer(); ?>
