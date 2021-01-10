<?php $latest_games = array_filter(\game_handler::get_latest_games(20), function($item) {
  return !empty($item->get_title());
}); ?>

<?php $games = @array_splice($args["games"], count($games)-2, 3); ?>
<?php $games = array_merge($games, $latest_games); ?>
<?php $games = @array_splice($games, 0, 4); ?>
<h3 class=""><?php echo __('Muita pelejä'); ?></h3>
<?php if(count($games) > 0): ?>
  <div class="c-associatedgames">
  <?php foreach($games as $game): ?>
    <?php if(!empty($game)): ?>
    <?php $coverimg = $game->get_coverimage_url(); ?>
      <a href="<?php echo get_permalink($game->get_id()); ?>">
        <img src="<?php echo $game->get_coverimage_url(); ?>" alt="" />
      </a>
    <?php endif; ?>
  <?php endforeach; ?>
</div>
<?php endif; ?>
