<?php
/*
Template Name: Inner page
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();?>
<section class="inner-content-section inner-page">
	<div class="basic-container">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-12 medium-12 small-12 cell text-left">
				<div class="page-content">
					<?php the_content();?>
				</div>
			</div>
		</div>
	</div>
</section>
<?php  endwhile; endif; ?>						
<?php get_footer(); ?>
