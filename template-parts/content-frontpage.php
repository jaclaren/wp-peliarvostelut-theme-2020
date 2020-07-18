<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */


$posts = get_posts(['post_type' => 'game', 'posts_per_page' => 5]);
$game = new \game(@$posts[0]);

?>

<section class="">
	<p><?php echo __('Uusin tasokas kooste'); ?></p>
	<?php if (strlen($game->get_youtube_trailer()) > 3) : ?>
		<iframe width="648" height="224" src="<?php echo $game->get_youtube_trailer(); ?>" frameborder="0" allowfullscreen>    </iframe>
	<?php endif; ?>
	<?php echo $game->get_title(); ?>
	<?php printf(__('%s arvostelua'), count($game->get_reviews())); ?>
	<a class="c-button" href="<?php echo get_permalink($game->game_object);  ?>"><?php echo __('Kooste'); ?></a>
</section>
