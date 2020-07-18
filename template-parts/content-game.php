<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

 $game = new \game(get_post());
 $coverimage_url = $game->get_coverimage_url();
 $coverimage = $game->get_coverimg();
 $coverimage_is_valid = !empty($coverimage);

 if($coverimage_is_valid) {
   $coverimage_is_valid = !empty(@$coverimage[0]) && get_class($coverimage[0]) !== "WP_Error";
 }
 
 if(!$coverimage_is_valid && !empty($coverimage_url)) {
   if(preg_match('/http|https/', $coverimage_url)) {
     set_image_to_game($coverimage_url, $game);
   }
 }

?>

<article id="post-<?php the_ID(); ?>">
	<section class="">
		<h1><?php the_title(); ?></h1>
    <?php var_dump( $game->get_coverimage_url()); ?>
		<?php echo count($game->get_reviews()); ?> arvostelu
	</section>
</article>
