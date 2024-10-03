<?php
/*
Template Name: About Page
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();?>

<?php the_content(); ?>

<!-- <section class="inner-content-section">
	<div class="basic-container">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-12 medium-12 small-12 cell text-left">
				<div class="page-content">
					<?php the_content();?>
				</div>
			</div>
		</div>
	</div>
</section> -->
<?php /*<section class="professionalSection">
	<div class="basic-container">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-12 medium-10 small-12 cell">
			<h3 class="text-center">Our Professionals</h3><?php
				if( have_rows('our_professionals') ):?>
				<?php while ( have_rows('our_professionals')) : the_row();
					$name = get_sub_field('doctor_name');
					$qualification = get_sub_field('doctor_qualification');
					$desc = get_sub_field('doctor_description');
					$linkedin = get_sub_field('doctor_linkedin');
					$thumb = get_sub_field('doctor_thumb');
				?>
				<div class="grid-x align-center prof-items">
					<div class="large-3 medium-3 small-12 cell text-center">
						<div class="doc-thumb">
							<img src="<?php echo wp_get_attachment_url($thumb);?>">
						</div>
					</div>
					<div class="large-9 medium-9 small-12 cell">
						<div class="doc-details">
							<h4><?php echo $name;?></h4>
							<span class="doc-qual"><?php echo $qualification;?></span>
							<p><?php echo $desc;?></p>
							<a class="linkedin-link" href="<?php echo $linkedin;?>">
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/linkedin.png">
							</a>
						</div>
					</div>
				</div>
				<?php endwhile;?>
				<?php endif;?>
		</div>
	</div>
	</div>
</section>
<?php */ endwhile; endif; ?>						
<?php get_footer(); ?>
