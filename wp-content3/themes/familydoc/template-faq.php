<?php
/*
Template Name: FAQ Page
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();?>

<?php the_content(); ?>
<section class="faq-content-sec">
	<div class="grid-container faq-container">
		<div class="grid-x align-center">
			<div class="large-12 medium-12 small-12 cell"><?php
				if( have_rows('faq_items') ):?>
				<ul class="accordion" data-accordion data-allow-all-closed="true"><?php
					$i = 1;
					while ( have_rows('faq_items')) : the_row();
					if($i == 1){
						$class = 'is-active';
					}else{
						$class = '';
					}
					$question = get_sub_field('question');
					$answer = get_sub_field('answer');?>
					<li class="accordion-item <?php echo $class;?>" data-accordion-item>
						<a href="#" class="accordion-title"><?php echo $question;?></a>
						<div class="accordion-content" data-tab-content>
							<?php echo $answer;?>
						</div>
					</li>
					<?php $i++;endwhile;?>
				</ul>
				</div>
				<?php endif;?>
		</div>
		<div class="grid-x">
			<div class="large-8 medium-12 small-12 cell">
				<div class="faq-contact-block">
					<h5>Ask Questions</h5>
					<p>Your email address will not be published. Required fields are marked *</p>
					<div class="faq-inner-wrapper"><?php echo do_shortcode('[contact-form-7 id="139"]');?></div>
				</div>
			</div>
		</div>
	</div>
</section>
<?php endwhile; endif; ?>						
<?php get_footer(); ?>
