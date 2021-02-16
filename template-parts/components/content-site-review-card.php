<?php 
    // $related_review = \PANet\Utils::get_related_review_by_sitename($args['site']['name'], $args['reviews']);
?>

<?php if(!empty($args['site']['review'])): ?>
    <div class="c-reviewcard">    
        <div class="c-reviewcard__score"><?php echo @$args['site']['review']->get_score(); ?></div>
        <div class="c-reviewcard__title"><?php echo $args['site']['name']; ?></div>
        <div class="c-reviewcard__creation"><?php echo \PANet\Utils::render_wp_post_creation_date($args['site']['review']->review_object); ?></div>                
        <a href="#" rel="nofollow"><?php echo __('Lue'); ?></a>
        
    </div>    
<?php else: ?>
    <div class="c-reviewcard--empty">
        <div class="c-reviewcard__score">?</div>
        <div class="c-reviewcard__title"><?php echo $args['site']['name']; ?></div>        
        <div class="c-reviewcard__creation"><?php echo __('Ei arvosteltu'); ?></div>        

    </div>    
<?php endif; ?>

<p>