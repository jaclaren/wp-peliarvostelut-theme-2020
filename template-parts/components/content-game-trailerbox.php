<div class="col-xs-12 col-md-8 col-md--full video-container__column" style="position:relative">
    <iframe      
        width="100%"    
        height="100%"
        src="<?php echo @$args['game']->get_any_video(); ?>"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>


    <div class="col-xs-12 col-md-4 o-box--centered u-bg--grey9">
    <div class=""><?php echo count($GLOBALS['game']->get_reviews()); ?>:n sivuston keskiarvo</div>
    <div class="c-score box" data-score="<?php echo $GLOBALS['game']->get_average_score(); ?>"></div>        
  </div>

    <!-- <?php $highlight_texts = $GLOBALS['game']->get_highlight_texts(); ?>
        <?php $highlight_texts_exist = count($highlight_texts) > 0; ?>
        <?php if($highlight_texts_exist): ?>
            <div id="gamequote"></div>
        <?php endif; ?> -->





