<?php
/*
Template Name: Contact Page
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();?>
<?php the_content();?>
<!-- <section class="plan-title-section">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-12 medium-12 small-12 cell text-center">
			<h3>Get in touch</h3>
		</div>
	</div>
</section>
<section class="contact-content-sce">
	<div class="grid-container contact-container">
		<div class="grid-x  align-center">
			<?php the_content();?>
		</div>
	</div>
</section>
 -->
<?php endwhile; endif; ?>						
<?php get_footer(); ?>
