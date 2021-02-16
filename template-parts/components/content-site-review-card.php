<?php if(!empty($args['site']['review'])): ?>
    <div class="c-reviewcard">    
        <div class="c-reviewcard__score c-reviewcard__score--quality-<?php echo \PANet\Utils::get_quality_class_from_score(@$args['site']['review']->get_score()); ?>"><?php echo @$args['site']['review']->get_score(); ?></div>
        <h3 class="c-reviewcard__title"><?php echo $args['site']['name']; ?></h3>
        <div class="c-reviewcard__creation"><?php echo \PANet\Utils::render_wp_post_creation_date($args['site']['review']->review_object); ?></div>                
        <a class="c-reviewcard__link button button--dark1" href="<?php echo $args['site']['review']->get_url(); ?>" rel="nofollow"><?php echo __('Lue'); ?></a>
        
    </div>    
<?php else: ?>
    <div class="c-reviewcard c-reviewcard--empty">
        <div class="c-reviewcard__score">?</div>
        <h3 class="c-reviewcard__title"><?php echo $args['site']['name']; ?></h3>
        <div class="c-reviewcard__creation"><?php echo __('Ei arvosteltu'); ?></div>        
    </div>    
<?php endif; ?>

