<?php 
/**
 * The template for displaying all single posts and attachments
 */

get_header();
?>
<?php if (have_posts()) : while (have_posts()) : the_post();
$formId = get_post_meta($post->ID,'subscription_form_id',true);?>
<section class="online-form-section">
	<div class="online-form-container">
		<div class="grid-x grid-padding-x align-cent">
			<div class="large-10 medium-12 small-12 cell">
				<div class="online-form">
					<?php if( function_exists("wd_form_maker") ) { wd_form_maker(6, "embedded"); } ?>
				</div>
			</div>
		</div>
	</div>
</section>
<?php endwhile;?>
<?php endif; ?>

<?php get_footer(); ?>