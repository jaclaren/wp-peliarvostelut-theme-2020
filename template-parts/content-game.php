<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

 $game = new \game(get_post());

?>

<article id="post-<?php the_ID(); ?>">
	<section class="">
		<h1><?php the_title(); ?></h1>
		<?php echo count($game->get_reviews()); ?> arvostelu
	</section>
</article>
