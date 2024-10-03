<?php
/*
Template Name: Treatment Page
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();?>
<section class="treatment-wrapper">
	<div class="grid-container">
		<div class="grid-x grid-padding-x">
			<div class="large-12 medium-12 small-12 cell text-center">
				<div class="trt-heading">
					<h2>Get started today</h2>
					<p>We treat over 60 non-emergency conditions</p>
				</div>
			</div>
			<div class="large-12 medium-12 small-12 cell"><?php
				if( have_rows('treatment_content') ):?>
				<ul class="accordion" data-accordion data-allow-all-closed="true"><?php
					$i = 1;
					while ( have_rows('treatment_content')) : the_row();
					if($i == 1){
						$class = 'is-active';
					}else{
						$class = '';
					}
					$treatmentCat = get_sub_field('treatment_category');
					$treatment = get_sub_field('treatment_names');?>
					<li class="accordion-item <?php echo $class;?>" data-accordion-item>
						<a href="#" class="accordion-title"><?php echo $treatmentCat;?></a>
						<div class="accordion-content" data-tab-content>
							<?php echo $treatment;?>
						</div>
					</li>
					<?php $i++;endwhile;?>
				</ul>
				</div>
				<?php endif;?>
			</div>
		</div>
	</div>
</section>


<?php /*?>

<section class="treatment-section-main">
	<div class="treatment-page-wrap">
		<h2>Get started today.</h2>
		<p>Select a treatment below and begin your online questionnaire. It only takes 5 minutes!</p>
		<?php
		$ids_to_exclude = array();
		$get_terms_to_exclude =  get_terms(array(
				'fields'  => 'ids',
				'slug'    => array( 'home-testing'),
				'taxonomy' => 'treatment_category', ));
		
		if( !is_wp_error( $get_terms_to_exclude ) && count($get_terms_to_exclude) > 0){
			$ids_to_exclude = $get_terms_to_exclude; 
		}
		$terms = get_terms( 'treatment_category', array( 
				'orderby' => 'name',
				'order'   => 'ASC',
				'exclude'  => $ids_to_exclude,) );
		if($terms):?>
			<div class="grid-x grid-padding-x align-center">
				<?php foreach($terms AS $term):?>
				<div class="large-6 medium-6 small-12 cell">
					<div class="treatment-type treatment-<?php echo $term->slug;?>">
						<div class="cat-thumb text-center">
							<?php $meta_image = get_wp_term_image($term->term_id); ?>
							<span><img src="<?php echo $meta_image;?>"></span>
						</div>
						<h3><?php echo $term->name;?></h3><?php
							$args = array(
							'post_type' => 'treatments',
							'tax_query' => array(
								array(
								'taxonomy' => 'treatment_category',
								'field' => 'term_id',
								'terms' => $term->term_id
								 )
							  )
							);
							$query = new WP_Query( $args ); ?>
						<?php if ( $query->have_posts() ) :?>
						<div class="grid-x grid-padding-x align-center grid-margin-x">
						<?php 
						$i = 1;
						while ( $query->have_posts() ) : $query->the_post();
							global $post;
							$formId = get_post_meta($post->ID,'subscription_form_id',true);
							if($formId){
								$flink = get_permalink();
							}else{
								$flink = '#';
							}
							?>
							<div class="large-12 medium-12 small-12 cell">
								<div class="treatmentItemContent">
									<h4><a href="<?php echo $flink;?>"><?php the_title();?></a></h4>
								</div>
							</div>
						<?php endwhile;?>
						</div>
						<?php wp_reset_postdata();endif;?>
					</div>
				</div>
				<?php endforeach;?>
			</div>
		<?php endif;?>
	</div>
</section>
<section class="treatment-section-bottom">
	<div class="treatment-page-wrap">
		<?php
		$ids_to_exclude = array();
		$get_terms_to_exclude =  get_terms(array(
				'fields'  => 'ids',
				'slug'    => array( 'female-treatment','male-treatment'),
				'taxonomy' => 'treatment_category', ));
		
		if( !is_wp_error( $get_terms_to_exclude ) && count($get_terms_to_exclude) > 0){
			$ids_to_exclude = $get_terms_to_exclude; 
		}
		$terms = get_terms( 'treatment_category', array( 
				'orderby' => 'name',
				'order'   => 'ASC',
				'exclude'  => $ids_to_exclude,) );
		if($terms):?>
			<div class="grid-x grid-padding-x align-center">
				<?php foreach($terms AS $term):?>
				<div class="large-12 medium-12 small-12 cell">
					<div class="treatment-type treatment-<?php echo $term->slug;?>">
						<div class="cat-thumb text-center">
							<?php $meta_image = get_wp_term_image($term->term_id); ?>
							<span><img src="<?php echo $meta_image;?>"></span>
						</div>
						<h3><?php echo $term->name;?></h3><?php
						$args = array(
						'post_type' => 'treatments',
						'tax_query' => array(
							array(
							'taxonomy' => 'treatment_category',
							'field' => 'term_id',
							'terms' => $term->term_id
							 )
						  )
						);
						$query = new WP_Query( $args ); ?>
					<?php if ( $query->have_posts() ) :?>
					<div class="grid-x grid-padding-x grid-margin-x">
					<?php 
					$i = 1;
					while ( $query->have_posts() ) : $query->the_post();
						global $post;
						$formId = get_post_meta($post->ID,'subscription_form_id',true);
						if($formId){
							$flink = get_permalink();
						}else{
							$flink = '#';
						}
						?>
						<div class="large-6 medium-6 small-12 cell">
							<div class="treatmentItemContent">
								<h4><a href="<?php echo $flink;?>"><?php the_title();?></a></h4>
							</div>
						</div>
					<?php endwhile;?>
					</div>
					<?php wp_reset_postdata();endif;?>
				</div>
				</div>
				<?php endforeach;?>
			</div>
		<?php endif;?>
	</div>
	<div class="treatment-desc-wrap">
		<p>* Contraception/Birth control medications are prescribed in pill or patch form only. Service available for women
		18-45 who are not currently pregnant and have had a normal blood pressure reading in the past 6 months.</p>
	</div>
</section>
<section class="works-section treatmentpage">
	<div class="presc-page-container">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-12 medium-12 small-12 cell">
			<h3>How it works</h3>
			<p class="text-center traet-intro">Creating your online prescription request takes only a few steps and is done in less than 5 minutes.
			<br>Your information is then stored securely for all future online visits.</p>
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
					<?php wp_reset_postdata();endif;?>
				</div>
			</div>
		</div>
	</div>
	</div>
</section><?php */?>
<section class="testiSection" style="background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/testimonail-bg.png')">
	<div class="testi-container">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-12 medium-12 small-12 cell">
				<div class="grid-x grid-padding-x">
					<div class="large-6 medium-12 small-12 cell testi-left">
						<div class="test-lft-inner">
							<h3>Patient <br>Testimonials</h3>
							<p>See what our patients say about us</p>
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
					<h3>Get in Touch</h3>
					<p><strong>Select a treatment below and begin your online questionnaire. It only takes 5 minutes!</strong></p>
					<p>All medical queries are handled by our secure messaging platform, available only after your online consultation is completed.</p>
				</div>
			</div>
			<div class="large-7 medium-12 small-12 cell">
				<div class="contactform-inner">
					<?php echo do_shortcode('[contact-form-7 id="6"]');?>
				</div>
			</div>
			<div class="large-5 medium-12 small-12 cell show-for-medium">
				<div class="getintouchWrap">
					<h3>Get in Touch</h3>
					<p><strong>Select a treatment below and begin your online questionnaire. It only takes 5 minutes!</strong></p>
					<p>All medical queries are handled by our secure messaging platform, available only after your online consultation is completed.</p>
				</div>
			</div>
		</div>
	</div>
	<div class="grid-container">
		<div class="grid-x grid-padding-x  contact-bottom">
			<div class="large-6 medium-12 small-12 cell text-left">
				<p>If you’re having a medical <br>emergency, Call 112 or 999</p>
			</div>
			
		</div>
	</div>
</section>
<?php endwhile; endif; ?>						
<?php get_footer(); ?>
