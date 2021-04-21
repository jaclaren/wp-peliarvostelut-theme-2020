<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Peliarvostelut.NET on suomalainen peliarvioiden koostesivusto, jonka sisältö kootaan suomalaisista peliarvioista.">

	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto&display=swap" rel="stylesheet">

	<?php peliarvostelut_net_2020_theme_google_analytics(); ?>
	<?php wp_head(); ?>
	
</head>

<body>
<?php wp_body_open(); ?>
	<header class="c-topheader">
		<nav class="c-nav--primary">
		<div class="c-sitebranding">
			<a href="<?php echo get_site_url(); ?>"><?php peliarvostelut_net_2020_theme_utils::the_site_svg_icon(); ?></a>
			<?php peliarvostelut_net_2020_theme_utils::the_site_text(); ?>		
		</div>

			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"></path>
				</svg>
			</button>

			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
					'menu_class' => 'c-mobilemenu'
				)
			);
			?>

			<button class="c-search" id="main-search-icon">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
			</button>
		</nav>

		<div id="search__overlay" class="o-modal c-searchoverlay">
	    <span id="search-close" title="Close Overlay">x</span>
	    <div class="c-overlay-content">
	      <form action="<?php echo get_site_url(); ?>">
	        <input id="search-box-input" type="text" placeholder="<?php echo __('Haku ...'); ?>" name="s">
	        <button type="submit">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
	        </button>
	      </form>
	    </div>
	  </div>

			<div class="c-mobilemenu__submenu">
				<ul>
					<?php foreach(\game_handler::get_with_highest_score_and_reviews() as $i => $game): ?>
						<?php if($i > 2) continue; ?>
					<li><a href="<?php echo get_permalink($game->game_object); ?>"><?php echo $game->get_title(); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>
	</header><!-- #masthead -->
