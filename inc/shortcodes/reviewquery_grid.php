<?php

  add_shortcode('reviewquery-grid', 'peliarvostelut_net_reviewquery_grid');

  function peliarvostelut_net_reviewquery_grid($args) {
    ?>
    <div class="row">
      <div class="col-xs-12 o-box--horizontal" style="position: relative">
        <h2><?php echo @$args['title']; ?></h2>
        <div class="reviewgrid" data-mode="<?php echo @$args['mode']; ?>" id="games"></div>
      </div>
    </div>
    <?php
  }

?>
