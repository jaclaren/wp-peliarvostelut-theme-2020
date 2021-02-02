<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

?>

<article <?php post_class(); ?>>

	<?php peliarvostelut_net_2020_theme_post_thumbnail(); ?>
	

	<div class="entry-content">
		<?php
		the_content();
		?>
	</div>

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
			?>
		</footer>
	<?php endif; ?>
</article>
