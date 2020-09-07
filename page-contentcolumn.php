<?php

/* Template Name: Content column */

get_header();
?>
<main id="primary" class="row">

	<article class="col-xs-9 col-md-8 col-md-offset-2 col-xs-offset-1 middle-sm">
		<h1 class="c-page__title"><?php the_title(); ?></h1>
		<?php	the_content(); ?>
		<?php peliarvostelut_net_2020_theme_post_thumbnail(); ?>

	</article><!-- #post-<?php the_ID(); ?> -->

</main>
<?php
get_sidebar();
get_footer();
