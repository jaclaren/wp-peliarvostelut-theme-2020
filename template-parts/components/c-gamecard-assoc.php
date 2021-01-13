<?php $latest_games = array_filter(\game_handler::get_latest_games(20), function($item) {
  return !empty($item->get_title())
    && $item->get_id() !== $GLOBALS['game']->get_id()
  ;
}); ?>

<?php $filtered_games = array_filter($args["games"], function($game) { return !empty($game) ; }); ?>
<?php $reverse_connected_games = \game_handler::get_reverse_connections($GLOBALS['game']->get_id()); ?>
<?php $games = @array_splice(array_merge($filtered_games, array_reverse($reverse_connected_games)), count($games)-2, 3); ?>
<?php $games = @array_splice($games, 0, 3); ?>
<?php $excluded_ids = array_map(function($game){ return $game->get_id(); },$games); ?>
<?php $games = array_merge($games, \game_handler::get_next_games_by_id($GLOBALS['game']->get_id(), 10, $excluded_ids)); ?>
<?php $games = array_filter($games, function($g) { return $g->game_object->post_status === 'publish'; }); ?>
<?php #$games = array_merge($games, $latest_games); ?>

<h3 class=""><?php echo __('Muita pelejä'); ?></h3>
<?php if(count($games) > 0): ?>
  <div class="c-associatedgames">
  <?php foreach(array_splice($games,0,4) as $game): ?>
    <?php if(!empty($game) && $game->game_object->post_status == 'publish'): ?>
      <a href="<?php echo get_permalink($game->get_id()); ?>">        
        <img src="<?php echo $game->get_coverimg(true); ?>" alt="" />
      </a>
    <?php endif; ?>
  <?php endforeach; ?>
</div>
<?php endif; ?>
