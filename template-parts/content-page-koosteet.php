<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

?>

<article>

	<?php peliarvostelut_net_2020_theme_post_thumbnail(); ?>

	<?php	the_content(); ?>

</article><!-- #post-<?php the_ID(); ?> -->
