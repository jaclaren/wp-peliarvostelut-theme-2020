<?php

  add_shortcode('gamequery-horizontal', 'peliarvostelut_net_gamequery_horizontal');

  function peliarvostelut_net_gamequery_horizontal($args) {
    ?>
    <div class="row">
      <div class="col-xs-12 o-box--horizontal" style="position: relative">
        <h2><?php echo @$args['title']; ?></h2>
        <div class="games" data-mode="<?php echo @$args['mode']; ?>" id="games"></div>
      </div>
    </div>
    <?php
  }

?>
