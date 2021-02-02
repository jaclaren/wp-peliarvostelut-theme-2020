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
		<div class="col-xs-12 c-compilationlist__genregroup">
			<?php foreach(\genre_group_handler::get_latest_groups() as $group): ?>				
				<a href="<?php echo add_query_arg(['genre' => $group->get_id()]); ?>" class="button button--purple button--thin <?php echo $group->get_id() === intval(get_query_var('genre')) ? 'active' : ''; ?>" href="<?php get_permalink($group->get_id()); ?>"><?php echo $group->get_title(); ?></a>
			<?php endforeach; ?>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12">
			<?php the_widget('peliarvostelut_net_compilations_list', [], ['genre' => get_query_var('genre')]); ?>
		</div>
	</div>
<?php endif; ?>

