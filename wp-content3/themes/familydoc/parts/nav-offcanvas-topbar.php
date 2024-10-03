<?php
/**
 * The off-canvas menu uses the Off-Canvas Component
 *
 * For more info: http://jointswp.com/docs/off-canvas-menu/
 */

$loginLink = get_field('login_page_url', 'option');
$regLink = get_field('register_page_link', 'option');
$appLink = get_field('appointment_link', 'option');
?>
<div class="top-bar-right float-right hide-for-large">
		<ul class="menu mobile-menu">
			<!-- <li><button class="menu-icon" type="button" data-toggle="off-canvas"></button></li> -->
			<li><a data-toggle="off-canvas"><?php _e( 'Menu', 'jointswp' ); ?></a></li>
		</ul>
	</div>
<div class="top-bar-menu show-for-large">
	<ul>
		<?php if($regLink):?>
		<li><a href="<?php echo $regLink;?>" target="_blank">Register Now</a></li>
		<?php endif;?>
		<?php if($loginLink):?>
		<li><a href="<?php echo $loginLink;?>" target="_blank">Login</a></li>
		<?php endif;?>
		<?php if($appLink):?>
		<li class="appMenu"><a href="https://app.familydoc247.ie/" target="_blank">Schedule An Appointment</a></li>
		<?php endif;?>
	</ul>
</div>
<div class="mainmenuSection">
	<div class="top-bar-right show-for-large">
		<?php joints_top_nav(); ?>	
	</div>
</div>