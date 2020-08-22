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

			?>
			<!-- <div class="row">
				<div class="col-xs-12">
			<?php
			the_post_navigation(
				array(
					'next_text' => '<div class="nav-item-col"><img src="'.(!empty($next_game) ? $next_game->get_coverimg(true) : '').'" class="nav-coverimage" /><span>%title</span></div><header class="nav-item-head">Seuraava >></header>',
					'prev_text' => '<div class="nav-item-col"><img src="'.(!empty($previous_game) ? $previous_game->get_coverimg(true) : '').'" class="nav-coverimage" /><span>%title</span></div><header class="nav-item-head"><< Edellinen</header>'
				)
			);
			?>
			</div>
			</div> -->
			<?php

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
