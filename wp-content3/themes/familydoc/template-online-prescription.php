<?php
/*
Template Name: Online Prescription
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();

the_content();


$trtmntTitle = get_post_meta($post->ID,'treatment_title',true);
$trtmntdesc = get_post_meta($post->ID,'treatment_description',true);
$prescription_heading = get_post_meta($post->ID,'prescription_heading',true);
$prescription_description = get_post_meta($post->ID,'prescription_description',true);
?>
<!-- <section class="inner-content-section treatment-content-sec">
	<div class="presc-page-container">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-12 medium-12 small-12 cell">
			<h3><?php echo $trtmntTitle;?></h3>
			<p class="text-center traet-intro"><?php echo $trtmntdesc;?></p>
			<div class="treatment-items-wrapper">
				<div class="grid-x align-center treatmentItems"><?php
					$args = array(
					'post_type' => 'treatments',
					'posts_per_page'=>999,
					'orderby'=> 'title',
					'order' => 'ASC'
					);
					$query = new WP_Query( $args );
					if ( $query->have_posts() ) :?>
					<?php 
					$i = 1;
					while ( $query->have_posts() ) : $query->the_post();
					global $post;
					$imageIcon = get_post_meta($post->ID,'treatment_icon',true);
					if($i%2 == 0){
						$class = 'even-item';
					}else{
						$class = 'odd-item';
					}
					$formId = get_post_meta($post->ID,'subscription_form_id',true);
					$flink = get_permalink();
					/*if($formId){
						$flink = get_permalink();
					}else{
						$flink = 'javascript:void(0)';
					}*/
					?>
					<div class="large-3 medium-3 small-6 cell treat-items-in">
						<a href="<?php echo $flink?>">
						<div class="treatmentItem <?php echo $class;?>">
							<?php /*<span class="treat-icon">
								<img src="<?php echo wp_get_attachment_url($imageIcon);?>">
							</span> <?php */ ?>
							<span class="treat-title">
								<?php the_title();?>
							</span>
						</div>
						</a>
					</div>
					<?php $i++;endwhile;?>
					<?php wp_reset_postdata();endif;?>
				</div>
			</div>
			<p class="disclaimer-text">*disclaimer: we do not provide injectable medications for travel medicine.</p>
		</div>
	</div>
	</div>
</section> -->
<section class="works-section">
	<div class="presc-page-container">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-12 medium-12 small-12 cell">
			<h3><?php echo $prescription_heading;?></h3>
			<p class="text-center traet-intro"><?php echo $prescription_description;?></p>
			<div class="works-blocks">
				<div class="grid-x  align-center"><?php
					if( have_rows('how_it_works_section') ):?>
						<?php while ( have_rows('how_it_works_section')) : the_row();
						$worksTitle = get_sub_field('works_title');
						$worksIcon = get_sub_field('works_icon');
						?>
					<div class="large-4 medium-4 small-12 cell works-item text-center">
						<div class="works-item-inner">
							<img src="<?php echo wp_get_attachment_url($worksIcon);?>">
							<h5><?php echo $worksTitle;?></h5>
						</div>
					</div>
					<?php endwhile;?>
					<?php endif;?>
				</div>
			</div>
		</div>
	</div>
	</div>
</section>
<?php endwhile; endif; ?>						
<?php get_footer(); ?>
