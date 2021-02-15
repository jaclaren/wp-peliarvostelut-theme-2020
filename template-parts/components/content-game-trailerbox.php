<div class="col-xs-8 col-md--full video-container__column" style="position:relative">
    <iframe      
        width="100%"    
        height="480"
        src="<?php echo @$args['game']->get_any_video(); ?>"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="col-xs-4 video-container__column">
      <?php $highlight_texts = $GLOBALS['game']->get_highlight_texts(); ?>
        <?php $highlight_texts_exist = count($highlight_texts) > 0; ?>
        <?php if($highlight_texts_exist): ?>
            <div id="gamequote"></div>
        <?php endif; ?>

      </div>
  </div>

