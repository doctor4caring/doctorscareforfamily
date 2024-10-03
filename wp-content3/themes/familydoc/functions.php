<?php
/** 
 * For more info: https://developer.wordpress.org/themes/basics/theme-functions/
 *
 */			
	
// Theme support options
require_once(get_template_directory().'/functions/theme-support.php'); 

// WP Head and other cleanup functions
require_once(get_template_directory().'/functions/cleanup.php'); 

// Register scripts and stylesheets
require_once(get_template_directory().'/functions/enqueue-scripts.php'); 

// Register custom menus and menu walkers
require_once(get_template_directory().'/functions/menu.php'); 

// Register sidebars/widget areas
require_once(get_template_directory().'/functions/sidebar.php'); 

// Makes WordPress comments suck less
require_once(get_template_directory().'/functions/comments.php'); 

// Replace 'older/newer' post links with numbered navigation
require_once(get_template_directory().'/functions/page-navi.php'); 

// Adds support for multiple languages
require_once(get_template_directory().'/functions/translation/translation.php'); 

// Adds site styles to the WordPress editor
// require_once(get_template_directory().'/functions/editor-styles.php'); 

// Remove Emoji Support
// require_once(get_template_directory().'/functions/disable-emoji.php'); 

// Related post function - no need to rely on plugins
// require_once(get_template_directory().'/functions/related-posts.php'); 

// Use this as a template for custom post types
// require_once(get_template_directory().'/functions/custom-post-type.php');

// Customize the WordPress login menu
// require_once(get_template_directory().'/functions/login.php'); 

// Customize the WordPress admin
// require_once(get_template_directory().'/functions/admin.php');

if( function_exists('acf_add_options_page') ) {
  	acf_add_options_page();
  	acf_add_options_sub_page(array(
    	'page_title'  => 'Theme General Settings',
    	'menu_title'  => 'Theme Settings',
    	'menu_slug'   => 'theme-general-settings',
    	'capability'  => 'edit_posts',
    	'redirect'  => false
  	));
}

function customPrevNextPagination($page = 1,$countPages = 2,$postsPerPage = 2,$showpageNumbers=1){
	$rowsPerpage = $postsPerPage;
	$items = $countPosts;
	$currentpage = $page;
	if($countPages>1){
		$pageCount = $items/$rowsPerpage;
		$pageCount = ceil($pageCount);
		
		$pageCount = $countPages;
		
		$nextPgNo  = $page+1;
		$prevPgNo  = $page-1;
		if($page==$pageCount){
			$nextPgNo = 0;
		}		
		
		if($page==1){
			$prevPgNo = 0;
		}		
		//echo '<br/>page<br/>';
		
		$memcontent = '<div align="center" class="paginationDiv large-12 medium-12 small-12 cell'.$pageCount.'"><div class="pagenation-inner">';
		$memcontent .= '<ul class="pagination text-center" id="pagination">';
		$adjacents = 7;
		$total_pages = $pageCount;							
		for($i=1; $i<=$pageCount; $i++):
			
			$addCls= ($i==$page)?"active":"";
			$pgAdd = 'data-totalpage="'.$pageCount.'"';
			
			if($page==$i){
				$pageNavLink = '<span class="pagenav">'.$i.'</span>';
			}else{
				$pageNavLink = '<a href="javascript:void(0);">'.$i.'</a>';
			}
			
			if($i == 1){
				$memcontent .= '<li class="prevPage" '.$pgAdd.' data-pageno="'.$prevPgNo.'">';
				if($page==1){
					$memcontent .= '<span class="pagenavTxt">Prev</span>';							
				}else{
					$memcontent .= '<a href="javascript:void(0);" title="Prev" class="pagenavTxt">Prev</a>';								
				}
				$memcontent .= '</li>';
				if($showpageNumbers==1){//pagination numbers
					$memcontent .= '<li class="page '.$addCls.'" '.$pgAdd.' data-pageno="'.$i.'" id="'.$i.'">'.$pageNavLink.'</li>';
				}
			}else{
				if($showpageNumbers==1){ //pagination numbers
					$memcontent .= '<li class="page '.$addCls.'" id="'.$i.'" '.$pgAdd.' data-pageno="'.$i.'">'.$pageNavLink.'</li>';	
				}					
			}					
			
			if($pageCount==$i){						
				$memcontent .= '<li class="nextPage next" '.$pgAdd.' data-pageno="'.$nextPgNo.'">';
				if($page==$pageCount){
					$memcontent .= '<span class="pagenavTxt">Next</span>';							
				}else{
					$memcontent .= '<a href="javascript:void(0);" title="Next" class="next pagenavTxt">Next</a>';								
				}
				$memcontent .= '</li>';
			}				
		endfor;
		$memcontent .= '</ul>';
		$memcontent .= '</div></div>';
	}
	echo $memcontent;
}

// Members page ajax items Load
add_action('wp_ajax_load_members_results', 'load_members_results');
add_action('wp_ajax_nopriv_load_members_results', 'load_members_results');
function load_members_results(){
	global $wpdb, $post;
	$termID		= $_POST['termid'];
	$page		= $_POST['page'];
	if(!isset($page)){
		$page = 1;
	}
	$postsPerPage = 6;
	$paged	= (get_query_var('paged')) ? get_query_var('paged') : 1;	
	if($termID){
		$args	= array('post_type' => 'post', 'post_status' => 'publish',
			'paged' => $paged,
			'posts_per_page'=>$postsPerPage,
			'tax_query' => array(array(
				'taxonomy' => 'category',
				'field'    => 'term_id',
				'terms'    => $termID,
			)),
		);
	}else{
		$args	= array('post_type' => 'post', 'post_status' => 'publish','paged' => $paged,'posts_per_page'=>$postsPerPage);
	}
	
	if(isset($page) && $page!=''){
		$args['offset'] = ($page-1)*$postsPerPage;
	}
			
    ob_start();
	
	$countPages = 1;
	
	$memQuery = new WP_Query( $args );	
	if($memQuery->have_posts()) :	//p($memQuery);die;
		$countPages = $memQuery->max_num_pages;
			while ( $memQuery->have_posts() ) : $memQuery->the_post();
				$blogThumb = get_post_meta($post->ID,'blog_thumb',true);
				$blogIntro = get_post_meta($post->ID,'blog_intro_content',true);																																
				echo '<div class="large-4 medium-4 small-12 cell blog-item"><div class="blog-item-inner">';
					echo '<div class="blog-thumb">
							<img src="'.wp_get_attachment_url($blogThumb).'">
						</div>
						<div class="blog-meta">'.date('d M Y',strtotime($post->post_date)).'</div>
						<h4><a href="'.get_permalink().'">'.get_the_title().'</h4>
						<p>'.$blogIntro.'</p>
						<a class="blog-more btn button-cta" href="'.get_permalink().'">Read more<span></span></a>';
				echo '</div></div>';
			endwhile;
		customPrevNextPagination($page,$countPages,$postsPerPage,$showpageNumbers=1);
		wp_reset_query();
	else :	
		echo '<div class="large-4 medium-4 small-12 cell blog-item">';
			echo '<p>Nothing Found</p>';
		echo '</div>';
	endif;
	echo $content;	
	die();			
}

function custom_filter_wpcf7_is_tel( $result, $tel ) { 
  $result = preg_match( '/^\(?\+?([0-9]{1,4})?\)?[-\. ]?(\d{10})$/', $tel );
  return $result; 
}

add_filter( 'wpcf7_is_tel', 'custom_filter_wpcf7_is_tel', 10, 2 );




//How to get Elementor Templates globally - put given code in the functions.php and use like this short code [global-template template-id=7108]

add_shortcode( 'global-template', 'globalTemplate' );
function globalTemplate($atts) {
    $frontend = new \Elementor\Frontend();
    if($atts){
    $templateID  = $atts['template-id'];
    }else{
        $templateID  = 0;
    }
  
   return $frontend->get_builder_content_for_display( $templateID, $with_css = true );
}