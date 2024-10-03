jQuery(document).foundation();
/*
These functions make sure WordPress
and Foundation play nice together.
*/
jQuery(document).ready(function(){// Remove empty P tags created by WP inside of Accordion and Orbit
jQuery('.accordion p:empty, .orbit p:empty').remove();// Adds Flex Video to YouTube and Vimeo Embeds
jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function(){if(jQuery(this).innerWidth()/jQuery(this).innerHeight()>1.5){jQuery(this).wrap("<div class='widescreen responsive-embed'/>");}else{jQuery(this).wrap("<div class='responsive-embed'/>");}});});

/*
Insert Custom JS Below
*/


jQuery(document).ready(function($) {
    $('.testi-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Set autoplay to true
        autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000 for 3 seconds)
        dots: true, // Optionally, enable dots navigation
    });
	
	
	

	//Disable cut copy paste

	jQuery('body').bind('cut copy paste', function (e) {
		e.preventDefault();
	});

	//Disable mouse right click

	jQuery(".siteLogo img").on("contextmenu",function(e){
		return false;
	});

});