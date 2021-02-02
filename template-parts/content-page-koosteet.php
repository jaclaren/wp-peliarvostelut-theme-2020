<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

?>

<?php if(empty(get_query_var('genre'))): ?>
	<?php do_shortcode('[gamequery-horizontal mode="latest" title="Uusimmat"]'); ?>
	<?php do_shortcode('[gamequery-horizontal mode="best" title="Parhaat"]'); ?>
	<?php do_shortcode('[gamequery-horizontal mode="popular" title="Suosituimmat"]'); ?>
	<?php do_shortcode('[gamequery-horizontal mode="mostreviews" title="Eniten arvosteluita"]'); ?>	
<?php else: ?>
	<?php do_shortcode('[gamequery-horizontal mode="latest" title="Uusimmat"]'); ?>
	<div class="row">
		<div class="col-xs-12">
			<?php the_widget('peliarvostelut_net_compilations_list', [], ['genre' => get_query_var('genre')]); ?>
		</div>
	</div>
<?php endif; ?>

