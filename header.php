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
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'peliarvostelut-net-2020-theme' ); ?></button>
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
					<li><a href="#">Diablo 4</a></li>
					<li><a href="#">Death Stranding</a></li>
					<li><a href="#">Persona 4 Golden</a></li>
					<li><a href="#">Astral Chain</a></li>
				</ul>
			</div>
	</header><!-- #masthead -->
