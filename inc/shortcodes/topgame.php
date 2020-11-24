<?php

  add_shortcode('gamequery-topgame', 'peliarvostelut_net_topgame');


  function peliarvostelut_net_topgame($args) {    
    $games = \game_handler::get_top_recent(2, 80);
    $game = @$games[0];
    ?>
    <script>
      let topGames = [<?php print implode(array_map(function($game) {
        return json_encode(
          array(
            'title' => $game->get_title(),
            'href' => get_permalink($game->get_id()),
            'reviewCount' => count($game->get_reviews()),
            'score' => $game->get_average_score(),
            'video' => $game->get_any_video(),
            'metas' => $game->get_review_count_as_string()
          )
        );
      }, $games), ',')?>];

      let currentIndex = 0

    </script>
    <div class="row main c-topgame">

    </div>

    <?php

  }

?>
