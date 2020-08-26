<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

?>


<div class="row">
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	$game = new \game(get_post(get_the_ID()));
	?>
	<a href="<?php esc_url( get_permalink() ); ?>">
	<header class="entry-header" class="col-xs-12 col-sm-4">

		<?php the_title( sprintf( '<h2 class="entry-title">', esc_url( get_permalink() ) ), '</h2>' ); ?>

		<?php if ( 'game' === get_post_type() ) : ?>
		<div class="entry-meta">

			<img src="<?php echo $game->get_coverimg(true); ?>" />
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->
	</a>

	<?php peliarvostelut_net_2020_theme_post_thumbnail(); ?>

</article><!-- #post-<?php the_ID(); ?> -->
</div>
