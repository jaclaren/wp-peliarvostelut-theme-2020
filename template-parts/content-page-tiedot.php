<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

?>


<article class="col-xs-9 col-md-8 col-md-offset-2 col-xs-offset-1 middle-sm">
	<h1 class="c-page__title"><?php the_title(); ?></h1>
	<?php	the_content(); ?>
	<?php peliarvostelut_net_2020_theme_post_thumbnail(); ?>

</article><!-- #post-<?php the_ID(); ?> -->
