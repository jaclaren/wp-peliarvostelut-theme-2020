<?php
abstract class rendering_functions {
  static function render_platforms_to_card($platforms) {
    $platform_name = @$platforms[0]->name;
    $platform_not_given = false;

    if(empty($platform_name) || $platform_name === 'not-available')
    {
      $platform_name = __('Alustaa ei ilmoitettu');
      $platform_not_given = true;
    } else {
      $platform_name = platform_handler::create_platform_instance_by_name(@$platforms[0]->name)->get_title();
    }

    ?>
    <div class="c-reviewcard__platform__main<?php echo $platform_not_given ? '--inactive' : ''; ?>">
      <?php
        echo $platform_name;
       ?>
    </div>
    <?php if(count($platforms) > 1): ?>
    <div class="c-reviewcard__platform__showall">
      ...
      <?php self::render_platform_card_extra($platforms); ?>
    </div>
    <?php endif; ?>
    <?php
  }

  static function render_review_empties($reviews, $max, $offset = 0) {
    $classes = get_all_review_classes_as_array();
    $review_count = count($reviews);
    $rendered = 0;
    ?><div class="c-reviewcards__combocolumn"><?php
    foreach($classes as $index => $class) {
      $exists_in_reviews = false;

      if($rendered >= $max) break;

      foreach($reviews as $review) {
        if(@get_site_name_from_url($review->get_url())->data['name'] === $class->data['name']) {
          $exists_in_reviews = true;
          break;
        }
      }

      if($exists_in_reviews || $index < $offset) continue;

      ?>
      <div class="c-reviewcard--empty">
          <div class="c-reviewcard__combocols">
            <div class="c-reviewcard__score u-bg__score--<?php echo $css_quality_flavor; ?>">x</div>
            <div class="c-reviewcard__metas">
              <div class="c-reviewcard__metas__sitename"><?php echo $class->data['name']; ?></div>
              <div class="c-reviewcard__metas__summary"><?php echo __('Ei arvosteltu'); ?></div>
            </div>
          </div>
        </div>
      <?php
      $rendered++;
    }
    ?></div><?php
  }

  static function render_platform_card_extra($platforms) {
    ?>
    <div class="c-reviewcard__platform__showall__content u-fadein ">
      <?php foreach($platforms as $platform): ?>
        <div class="c-reviewcard__platform__all__item">
          <?php echo platform_handler::create_platform_instance_by_name($platform->name)->get_title(); ?></div>
      <?php endforeach; ?>
    </div>

    <?php
  }
}

 ?>
