<?php

  add_shortcode('gamequery-horizontal', 'peliarvostelut_net_gamequery_horizontal');

  function peliarvostelut_net_gamequery_horizontal($args) {
    ?>
    <div class="row">
      <div class="col-xs-12 o-box--horizontal" style="position: relative">
        <h2>Uudet koosteet</h2>
        <div class="games" id="games"></div>
      </div>
    </div>
    <?php
  }

?>