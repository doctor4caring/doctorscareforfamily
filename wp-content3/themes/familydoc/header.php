<?php
/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section
 *
 */
?>
<!doctype html>
  <html class="no-js"  <?php language_attributes(); ?>>
	<head>
		<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5RZGQFM');</script>
<!-- End Google Tag Manager -->
		
		<meta charset="utf-8">
		<!-- Force IE to use the latest rendering engine available -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- Mobile Meta -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta class="foundation-mq">
		<!-- If Site Icon isn't set in customizer -->
		<?php if ( ! function_exists( 'has_site_icon' ) || ! has_site_icon() ) { ?>
			<!-- Icons & Favicons -->
			<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
			<link href="<?php echo get_template_directory_uri(); ?>/assets/images/apple-icon-touch.png" rel="apple-touch-icon" />	
	    <?php } ?>
		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
		<?php wp_head(); ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@400;600;800&family=Raleway:ital,wght@0,400;0,700;0,800;1,600&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
    <!--<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@400;600;800&family=Raleway:wght@400;700;800&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">-->
    <link href="<?php echo get_template_directory_uri(); ?>/assets/styles/slick.css" rel='stylesheet' />
    <link href="<?php echo get_template_directory_uri(); ?>/assets/styles/font-awesome.min.css" rel='stylesheet' />	
    <link href="<?php echo get_template_directory_uri(); ?>/assets/styles/style.css" rel='stylesheet' id='site-css-css' />	
	</head>
	<body <?php body_class(); ?>>
		<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RZGQFM"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
  <?php
  global $post;
$loginLink = get_field('login_page_url', 'option');
$regLink = get_field('register_page_link', 'option');
$appLink = get_field('appointment_link', 'option');
$banner = get_post_meta($post->ID,'inner_banner_image',true);
if($banner){
  $bannerImg = wp_get_attachment_url($banner);
}else{
  $bannerImg = get_template_directory_uri().'/assets/images/hdr-bg.png';
}
  if(is_front_page()){
    $hdrClass = 'home-hdr';
    }else{
      $hdrClass = 'inner-hdr';
    } ?>
		<div class="off-canvas-wrapper">
			<?php get_template_part( 'parts/content', 'offcanvas' ); ?>
			<div class="off-canvas-content" data-off-canvas-content>
        <?php if(!is_front_page()): /*?>
        <div class="innerHdrBlock" style="background-image:url(<?php echo $bannerImg;?>)"><?php */ ?>
        <div class="innerHdrBlock">
        <?php endif;?>
        <header class="headerBlock <?php echo $hdrClass;?>">
        <div class="grid-container">
          <div class="grid-x grid-padding-x">
            <div class="large-3 medium-6 small-7 cell headerLeft">
              <div class="siteLogo">
                <a href="<?php echo site_url();?>">
                  <img src="/wp-content/uploads/2023/12/family-logo.png" alt="<?php bloginfo( 'name' );?>">
                </a>
              </div>
            </div>
            <div class="large-9 medium-6 small-5 cell headerRight text-right">
               <?php get_template_part( 'parts/nav', 'offcanvas-topbar' ); ?>
            </div>
          </div>
          <div class="top-bar-menu hide-for-large">
            <ul>
              <?php if($regLink):?>
              <li class="register-btn"><a href="<?php echo $regLink;?>" target="_blank">Register Now</a></li>
              <?php endif;?>
              <?php if($loginLink):?>
              <li class="login-btn"><a href="<?php echo $loginLink;?>" target="_blank">Login</a></li>
              <?php endif;?>
              <?php if($appLink):?>
              <li class="appMenu"><a href="<?php echo $appLink;?>" target="_blank">Schedule An Appointment</a></li>
              <?php endif;?>
            </ul>
        </div>
        </div>
			</header> <!-- end .header -->
      <?php if(!is_front_page()):?>
        <section class="innerBanner">
          <div class="grid-x grid-padding-x align-center">
            <div class="large-8 medium-12 small-12 cell text-center">
              <div class="innerBannercontent">
                <h1><?php the_title();?><?php if(is_singular('services')):?>
                  &nbsp;<?php echo get_post_meta($post->ID,'service_type',true);?>
                <?php endif;?></h1>
                <?php echo get_post_meta($post->ID,'inner_banner_description',true);?>
                
                <p class="scroll-down text-center">
                  <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/down-arrow.png"></a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <?php endif;?>