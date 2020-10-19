<?php

  add_shortcode('reviewlist', 'peliarvostelut_net_reviewlist');


  function peliarvostelut_net_reviewlist($args) {
    ?>
    <div class="row">
      <div class="col-xs-12 o-box--horizontal">
        <h2><?php echo @$args['title']; ?></h2>
        <div class="reviews"></div>
      </div>
    </div>
    <?php

  }

?>
