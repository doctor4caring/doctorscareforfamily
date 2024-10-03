<?php 
/**
 * The template for displaying all single posts and attachments
 */

 $blogImage = get_post_meta($post->ID,'blog_main_image',true);
?>

<section class="blog-item-section">
	<div class="grid-container home-contact-wrapper">
		<div class="grid-x grid-padding-x align-center">
			<div class="large-8 medium-4 small-12 cell blog-item-left">
				<?php if($blogImage):?>
				<div class="blog-image">
					<img src="<?php echo wp_get_attachment_url($blogImage);?>">
				</div>
				<?php endif;?>
				<div class="blog-meta"><?php echo date('d M Y',strtotime($post->post_date));?></div>
				<div class="blog-item-content">
					<?php the_content();?>
				</div>
    <?php $authorID = get_post_meta($post->ID,'blog_author',true);?>
    <?php if($authorID):
    $content = apply_filters('the_content', get_post_field('post_content', $authorID));
    $title = apply_filters('the_title', get_post_field('post_title', $authorID));
    ?>
				<div class="author-info-block">
     <div class="grid-x grid-padding-x align-center">
      <div class="large-3 medium-3 small-12 cell">
       <div class="author_thumb">
        <img src="<?php echo wp_get_attachment_url(get_post_meta($authorID,'author_thumb',true));?>">
       </div>
      </div>
      <div class="large-9 medium-9 small-12 cell">
       <div class="author-details">
        <h4><?php echo $title;//get_the_title();?></h4>
        <?php echo $content;//get_the_content($authorID);?>
        <?php
        if( get_field('social_contacts', $authorID) ) {?>
            <ul class="social-contacts"><?php
            while( the_repeater_field('social_contacts', $authorID) ) {?>
                <li>
                 <a href="<?php echo get_sub_field('social_media_link')?>">
                   <i class="fa fa-<?php echo get_sub_field('social_media_class')?>" aria-hidden="true"></i>
                 </a>
                </li>
            <?php }?>
            </ul>
        <?php }?>
       </div>
      </div>
     </div>
    </div>
    <?php endif;?>
    <div class="grid-x grid-padding-x align-center post-nav-section">
     <div class="large-6 medium-6 small-12 cell text-left">
      <div class="prev-post-nav">
         <?php previous_post_link('%link', 'Prev Post'); ?>
      </div>
     </div>
     <div class="large-6 medium-6 small-12 cell text-right">
       <div class="next-post-nav"><?php next_post_link('%link', 'Next Post'); ?></div>
     </div>
    </div>
			</div>
			<div class="large-4 medium-4 small-12 cell blog-item-right">
    <div class="blog-right-inner">
     <div class="search-block">
      <form role="search" method="get" class="search-form" action="<?php echo site_url();?>">
        <div class="search-inputs">
         <input type="search" class="search-field search-input" placeholder="Search" value="" name="s" title="Search for:">
         <input type="submit" class="search-submit search-submit" value="">
         </div>
      </form>
     </div>
     <div class="right-widget-area">
      <?php get_sidebar('sidebar1'); ?>
      <div class="side-related-posts"><?php $category = get_the_category($post->ID);?>
            <?php $args	= array('post_type' => 'post', 'post_status' => 'publish',
           'posts_per_page'=>5,
           'tax_query' => array(array(
            'taxonomy' => 'category',
            'field'    => 'term_id',
            'terms'    => $category[0]->term_id,
           )),
          );
            $query = new WP_Query( $args );	
            if($query->have_posts()) :	//p($memQuery);die; ?>
            <h4>Related Post</h4>
            <div class="reltaed-item-bar">
            <?php
            while ( $query->have_posts() ) : $query->the_post();
            global $post;
            $blogThumb = get_post_meta($post->ID,'blog_thumb',true);
            ?>
             <div class="grid-x grid-padding-x related-item-loop">
              <div class="large-4 medium-4 small-4 cell">
               <div class="rel-thumb">
                <img src="<?php echo wp_get_attachment_url($blogThumb);?>">
               </div>
              </div>
              <div class="large-8 medium-8 small-8 cell rel-right-wrapper">
               <div class="rel-right">
                <h5><a href="<?php echo get_permalink();?>"><?php the_title();?></a></h5>
                <span class="rel-post-date"><?php echo date('d M Y',strtotime($post->post_date));?></span>
               </div>
              </div>
             </div>
            <?php endwhile;?>
            <?php wp_reset_query();endif;?>
            </div>
      </div>
      <?php $posttags = get_the_tags();
      if($posttags):
      $c=1;
      ?>
      <div class="related-tags">
       <h4>Tags</h4>
       <?php foreach($posttags As $posttag):?>
       <span class="tag-items"><?php echo $posttag->name?>
       <?php if(count($posttags) === $c){
        $seperator = '';
       }else{
        $seperator = ' - ';
       }?>
       <?php echo $seperator?>
       </span>
       <?php $c++;endforeach;?>
      </div>
      <?php endif;?>
     </div>
    </div>
			</div>
		</div>
	</div>
</section>
<section class="bottomRelatedBlock">
 <div class="grid-container">
   <div class="grid-x grid-padding-x align-center">
      <div class="large-12 medium-12 small-12 cell">
          <?php $category = get_the_category($post->ID);?>
            <?php $args	= array('post_type' => 'post', 'post_status' => 'publish',
           'posts_per_page'=>3,
           'tax_query' => array(array(
            'taxonomy' => 'category',
            'field'    => 'term_id',
            'terms'    => $category[0]->term_id,
           )),
          );
            $query = new WP_Query( $args );	
            if($query->have_posts()) :	//p($memQuery);die; ?>
            <h3>Related Post</h3>
            <div class="grid-x grid-padding-x align-center">
            <?php
            while ( $query->have_posts() ) : $query->the_post();
            global $post;
            $blogThumb = get_post_meta($post->ID,'blog_thumb',true);
            $blogIntro = get_post_meta($post->ID,'blog_intro_content',true);	
            ?>
             <div class="large-4 medium-4 small-12 cell">
              <div class="blog-item-inner">
                <div class="blog-thumb">
                 <img src="<?php echo wp_get_attachment_url($blogThumb);?>">
                </div>
                <div class="blog-meta"><?php echo date('d M Y',strtotime($post->post_date));?></div>
                <h4><a href="<?php echo get_permalink();?>"><?php the_title();?></a></h4>
                <p><?php echo $blogIntro;?></p>
                <div class="flex-bottom-cta"><a class="blog-more btn button-cta" href="<?php echo get_permalink();?>">Read more<span></span></a></div>
              </div>
             </div>
            <?php endwhile;?>
            </div>
            <?php wp_reset_query();endif;?>
      </div>
      </div>
   </div>
</section>
<section class="comment-section">
 <div class="grid-container">
      <div class="grid-x grid-padding-x">
          <div class="large-8 medium-12 small-12 cell">
            <?php
             if ( comments_open() || get_comments_number() ) :
                comments_template();
             endif;
            ?>
          </div>
      </div>
 </div>
</section>