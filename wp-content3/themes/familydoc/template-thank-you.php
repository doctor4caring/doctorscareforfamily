<?php
/*
Template Name: Thank you Page
*/

get_header();

$subId = $_REQUEST['id'];
global $wpdb;
if($subId){
$query = "SELECT file_url FROM wp_formmaker_pdf WHERE group_id=".$subId;
$file = $wpdb->get_var($query);
?>
<?php if (have_posts()) : while (have_posts()) : the_post();?>
<section class="thankyou-content">
	<div class="grid-container">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-12 medium-12 small-12 cell text-left">
				<div class="thank-wrap">
					<div class="grid-x grid-padding-x align-center">
						<div class="large-8 medium-8 small-12 cell text-left">
							<div class="thank-inner">
								<p>Thank you for sharing your information. Your prescription Questionnaire is ready.</p>
								<p>After downloading prescription questionnaire, Sign Up or Login to our telemedicine portal & upload the pdf file under 'Medical Reports'. Our doctors will review your prescription questionnaire request and if appropriate, will issue you a prescription. Sometimes, we may require a telephone or video consultation before we issue your prescription</p>
								<p class="download-pres">
									<a href="<?php echo site_url().'/'.$file;?>" target="_blank" class="btn button-cta">Download Prescription<span></span></a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="thankyou-content padding-top-0">
	<div class="grid-container">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-12 medium-12 small-12 cell text-left">
				<div class="thank-wrap">
					<div class="grid-x grid-padding-x align-center">
						<div class="large-8 medium-8 small-12 cell text-left">
							<div class="thank-inner">
								<p>After downloading prescription, sign upto our telemedicine portal.</p>
								<p class="download-pres">
									<a href="#" target="_blank" class="btn button-cta">Sign up for online consultation<span></span></a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="report-section">
	<div class="grid-container">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-12 medium-12 small-12 cell text-left">
				<div class="report-wrap">
					<div class="grid-x grid-padding-x align-center">
						<div class="large-9 medium-9 small-12 cell text-left">
							<h3 class="text-center">Choose "Medical Reports" inside the<br> telemedicine portal and upload the PDF file there.</h3>
							<div class="report-form">
								<?php //echo do_shortcode('[contact-form-7 id="273" title="Report Form"]');?>
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/report.png">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<?php endwhile; endif; ?>
<?php

}

else{
echo 'Illegal Access...';
}?>
<?php get_footer(); ?>
