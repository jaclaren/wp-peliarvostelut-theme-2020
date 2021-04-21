<div class="col-xs-12 col-md-8 col-md--full video-container__column" style="position:relative" 
    data-coltype="youtube-embed" 
    data-trailer-url="<?php echo @$args['game']->get_any_video(); ?>" 
    data-gameplay-url="<?php echo @$args['game']->get_youtube_url(); ?>">
  </div>


    <div class="col-xs-12 col-md-4 o-box--centered u-bg--grey9">
    <div class=""><?php echo count($GLOBALS['game']->get_reviews()); ?>:n sivuston keskiarvo</div>
    <div class="c-score box" data-score="<?php echo $GLOBALS['game']->get_average_score(); ?>"></div>  
    <button id="video-toggler" />      
  </div>

    <!-- <?php $highlight_texts = $GLOBALS['game']->get_highlight_texts(); ?>
        <?php $highlight_texts_exist = count($highlight_texts) > 0; ?>
        <?php if($highlight_texts_exist): ?>
            <div id="gamequote"></div>
        <?php endif; ?> -->





