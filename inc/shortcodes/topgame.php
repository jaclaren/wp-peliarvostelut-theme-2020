<?php

  add_shortcode('gamequery-topgame', 'peliarvostelut_net_topgame');


  function peliarvostelut_net_topgame($args) {
    $games = \game_handler::get_with_highest_score_and_reviews();
    $game = @$games[0];
    ?>
    <div class="row main">
    <div class="col-xs-12 col-sm-8 col-md--full">
    <div class="box video-container">
      <iframe
        width="100%"
        height="315"
        src="<?php echo $game->get_youtube_trailer(); ?>"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

    <div class="col-xs-12 col-sm-4">
      <div class="box">
        <div class="row compilationcard--primary">
          <section class="col-xs-8 col-sm-12">
            <h2><?php echo $game->get_title(); ?></h2>
            <div><?php echo count($game->get_reviews()); ?> arvostelua</div>
            <a href="<?php echo get_permalink($game->game_object); ?>" class="button button--solid">
              <?php echo __('Kooste'); ?>
            </a>
          </section>
          <div class="col-xs-4 col-sm-12 first-sm">
            <div class="o-container o-container-xs--center o-container-xs--middle">
              <div class="c-score" data-score="<?php echo $game->get_average_score(); ?>"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <?php

  }

?>
