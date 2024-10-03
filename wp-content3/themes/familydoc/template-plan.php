<?php
/*
Template Name: Plan Page
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();?>
<section class="plan-title-section">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-12 medium-12 small-12 cell text-center">
			<h3>Key Features</h3>
		</div>
	</div>
</section>
<section class="inner-content-section plan-content-sec" style="background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/plan-bg.png')">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-4 medium-3 small-12 cell large-offset-2">
			<div class="plan-page-content">
				<?php the_content();?>
			</div>
		</div>
	</div>
</section>
<div class="reveal" id="modalApply" data-reveal>
	<button class="close-button" aria-label="Close alert" type="button" data-close>
		<span aria-hidden="true">&times;</span>
	</button>
	<div class="apply-now-form-wrapper">
		<div class="c-form-inputs"><?php echo do_shortcode('[contact-form-7 id="280"]');?></div>
	</div>
</div>
<?php endwhile; endif; ?>						
<?php get_footer(); ?>
