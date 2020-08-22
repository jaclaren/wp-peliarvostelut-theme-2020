<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );

			$previous = get_previous_post();
			$next = get_next_post();

			if(!empty($next)) {
				$next_game = new game($next);
			}
			if(!empty($previous)) {
				$previous_game = new game($previous);
			}

			the_post_navigation(
				array(
					'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'peliarvostelut-net-2020-theme' ) . '</span> </span> <img src="'.(!empty($previous_game) ? $previous_game->get_coverimg(true) : '').'" class="nav-coverimage" /> <span class="nav-title">%title</span>',
					'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'peliarvostelut-net-2020-theme' ) . '</span> <img src="'.(!empty($next_game) ? $next_game->get_coverimg(true) : '').'" class="nav-coverimage" /></span> <span class="nav-title">%title</span>',
				)
			);

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
