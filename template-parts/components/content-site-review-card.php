<?php $review = $args['site']['review']; ?>

<?php if(!empty($review)): ?>

    <div class="c-reviewcard revealable">            
    
        <div class="c-reviewcard__score c-reviewcard__score--quality-<?php echo \PANet\Utils::get_quality_class_from_score(@$review->get_score()); ?>"><?php echo @$review->get_score(); ?></div>
        
        <h3 class="c-reviewcard__title"><?php echo $args['site']['name']; ?></h3>                
        <div class="c-reviewcard__creation"><?php echo \PANet\Utils::render_wp_post_creation_date($review->review_object); ?></div>                
        <div class="c-reviewcard__cite"><cite>"<?php echo html_entity_decode(@$review->get_highlight_text()['text']); ?>"</cite></div>
        
        
        <a class="c-reviewcard__link button button--dark1" href="<?php echo $review->get_url(); ?>" rel="nofollow"><?php echo __('Lue arvostelu'); ?></a>
        
    </div>    
<?php else: ?>
    <div class="c-reviewcard c-reviewcard--empty revealable">
        <div class="c-reviewcard__score">?</div>
        <h3 class="c-reviewcard__title"><?php echo $args['site']['name']; ?></h3>
        <div class="c-reviewcard__creation"><?php echo __('Ei arvosteltu'); ?></div>        
    </div>    
<?php endif; ?>

