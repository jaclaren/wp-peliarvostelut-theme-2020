<?php $genre_group = $args['genre_group']; ?>

<a href="<?php echo sprintf("%s/%s?genre=%s",get_site_url(), 'koosteet', $genre_group->get_id()); ?>">
	<?php echo __($genre_group->get_title()); ?>
</a>