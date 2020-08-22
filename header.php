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

	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto&display=swap" rel="stylesheet">

	<?php wp_head(); ?>
</head>

<body>
<?php wp_body_open(); ?>
	<header class="c-topheader">
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

			<div class="c-mobilemenu__submenu">
				<ul>
					<?php foreach(\game_handler::get_with_highest_score_and_reviews() as $game): ?>
					<li><a href="<?php echo get_permalink($game->game_object); ?>"><?php echo $game->get_title(); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>
	</header><!-- #masthead -->
