<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

get_header();
?>
	<main id="primary" class="row middle-sm">
			<div class="c-icon c-icon--huge c-icon__404 col-xs-12 col-sm-4">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"/></svg>
			</div>
			<header class="page-header col-xs-12 col-sm-8 c-404box">
				<h1 class="c-404box__title"><?php esc_html_e( 'Sivua ei löytynyt.', 'peliarvostelut-net-2020-theme' ); ?></h1>
				<div class="page-content">
					<p><?php esc_html_e( 'Hakemaasi sisältöä ei löytynyt. Tämä voi johtua linkkirakenteen muutoksista tai sisältö on siirretty toiseen osoitteeseen.', 'peliarvostelut-net-2020-theme' ); ?></p>

						<?php
						get_search_form();

						// the_widget( 'WP_Widget_Recent_Posts' );
						?>

				</div><!-- .page-content -->

			</header><!-- .page-header -->


		<section class="col-xs-12 not-found">
		</section><!-- .error-404 -->

	</main><!-- #main -->

<?php
get_footer();
