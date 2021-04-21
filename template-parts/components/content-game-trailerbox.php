
<div class="col-xs-12 col-md-8 col-md--full video-container__column" style="position:relative" 
    data-coltype="youtube-embed" 
    data-trailer-url="<?php echo @$args['game']->get_any_video(); ?>" 
    data-gameplay-url="<?php echo @$args['game']->get_youtube_url(); ?>">
  </div>

  <div class="col-xs-12 col-md-4 u-bg--grey9 c-gamevideo__infobox">

    <!-- <div class="" yv-hide-on-play><?php echo count($GLOBALS['game']->get_reviews()); ?>:n sivuston keskiarvo</div> -->

    <div class="c-gamevideo__tabcontrol o-tab"> 
      <button class="c-gamevideo__tabcontrol__column active" yt-button-action="load:trailer"><?php echo __('Traileri'); ?></button>
      <button class="c-gamevideo__tabcontrol__column" yt-button-action="load:gameplay"><?php echo __('Pelivideo'); ?></button>
    </div>

    <div class="c-gamevideo__infobox__content">
      <div class="c-score box" data-score="<?php echo $GLOBALS['game']->get_average_score(); ?>" yv-hide-on-play></div>  
      <div id="gamequote" class="c-gamevideo__highlights" yv-show-on-play></div>        
    </div>

  </div>

    <!-- <?php $highlight_texts = $GLOBALS['game']->get_highlight_texts(); ?>
        <?php $highlight_texts_exist = count($highlight_texts) > 0; ?>
        <?php if($highlight_texts_exist): ?>
            <div id="gamequote"></div>
        <?php endif; ?> -->





