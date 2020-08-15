<?php

  add_shortcode('gamequery-topgame', 'peliarvostelut_net_topgame');

  function peliarvostelut_net_topgame($args) {
    ?>
    <div class="row main">
    <div class="col-xs-12 col-sm-8 col-md--full">
    <div class="box video-container">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/tCI396HyhbQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

    <div class="col-xs-12 col-sm-4">
      <div class="box">
        <div class="row compilationcard--primary">
          <section class="col-xs-8 col-sm-12">
            <h2>Death Stranding: Super long game name here</h2>
            <div>4 arvostelua</div>
            <a href="kooste.php" class="button button--solid">
              Kooste
            </a>
          </section>
          <div class="col-xs-4 col-sm-12 first-sm">
            <div class="o-container o-container-xs--center o-container-xs--middle">
              <div class="c-score" data-score="95"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <?php

  }

?>
