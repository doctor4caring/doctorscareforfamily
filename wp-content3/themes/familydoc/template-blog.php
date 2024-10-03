<?php
/*
Template Name: Blog Page
*/

get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();?>

<?php the_content(); ?>

<?php endwhile; endif; ?>
<section class="blog-section">
	<div class="grid-x grid-padding-x align-center">
		<div class="large-10 medium-12 small-12 cell">
			<div class="cat-filter"><?php
				$categories = get_categories( array(
					'orderby' => 'name',
					'order'   => 'ASC'
				) );
				?>
				<ul>
					<li><a href="#" data-id="0" class="active-cat">All</a></li>
					<?php foreach($categories AS $category):?>
					<li>
						<a href="#" data-id="<?php echo $category->term_id;?>">
							<?php echo $category->name;?>
						</a>
					</li>
					<?php endforeach;?>
				</ul>
			</div>
			<div class="grid-x grid-padding-x align-center" id="blog-listing"><?php
				$args = array( 'posts_per_page' => 6);
				$query = new WP_Query( $args );
				//$paged	= (get_query_var('paged')) ? get_query_var('paged') : 1;
				if ( $query->have_posts() ):
				
				while ( $query->have_posts() ):
				$query->the_post();
				global $post;
				$blogThumb = get_post_meta($post->ID,'blog_thumb',true);
				$blogIntro = get_post_meta($post->ID,'blog_intro_content',true);
				?>
				<div class="large-4 medium-4 small-12 cell blog-item">
					<div class="blog-item-inner">
						<div class="blog-thumb">
							<img src="<?php echo wp_get_attachment_url($blogThumb);?>">
						</div>
						<div class="blog-meta"><?php echo date('d M Y',strtotime($post->post_date));?></div>
						<h4><a href="<?php echo get_permalink();?>"><?php the_title();?></a></h4>
						<p><?php echo $blogIntro;?></p>
						<a class="blog-more btn button-cta" href="<?php echo get_permalink();?>">Read more<span></span></a>
					</div>
				</div>
				<?php endwhile;?>
				<?php customPrevNextPagination(1,$query->max_num_pages,2,$showpageNumbers=1); ?>
				<?php endif;?>
				
			</div>
		</div>
	</div>
</section>
<?php get_footer(); ?>
<script type="text/javascript">
	jQuery(document).on('click', '.pagination a', function(e){
			e.preventDefault();
			$this	= jQuery(this);
			$pgNo	= $this.parent('li').data("pageno");
			$termID = jQuery('.cat-filter .active-cat').data("id");										
			pgNo 	= jQuery(this).parent('li').attr('data-pageno');//alert(pgNo);		
			//$data = 'action=load_members_results&page='+pgNo;
			jQuery('#blog-listing').addClass('processing');
			$data = 'action=load_members_results&termid='+ $termID+'&page='+pgNo;
			doajax2LoadMembers($data);
			
			return false;
		});
	function doajax2LoadMembers($data){
			jQuery.ajax({
				type:"POST",
				url: '<?php echo admin_url('admin-ajax.php');?>',
				data: $data,
				beforeSend: function() {					
					jQuery('.memberItems').addClass('processing');
				},
				success : function( response ) {
					jQuery('#blog-listing').removeClass('processing');                        
					jQuery('#blog-listing').html(response);
				}
			});
		}
		jQuery(document).on('click', '.cat-filter a', function(e){
			e.preventDefault();
			$this	= jQuery(this);
			jQuery('.cat-filter a').removeClass('active-cat');
			$termID = $this.data("id");
			jQuery(this).addClass('active-cat');
			//$data = 'action=load_members_results&page=1';
			$data = 'action=load_members_results&termid='+ $termID+'&page=1';   
			doajax2LoadMembers($data);
			return false;
		});
</script>
