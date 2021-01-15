<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

 $game = new \game(get_post());
 $coverimage_url = $game->get_coverimage_url();
 $coverimage = $game->get_coverimg();
 $coverimage_is_valid = !empty($coverimage);

 if($coverimage_is_valid) {
   $coverimage_is_valid = !empty(@$coverimage[0]) && @get_class($coverimage[0]) !== "WP_Error";
 }

 if(!$coverimage_is_valid && !empty($coverimage_url)) {
   if(preg_match('/http|https/', $coverimage_url)) {
     set_image_to_game($coverimage_url, $game);
   }
 }

 $Review_platforms = [];
 foreach($game->get_reviews() as $review) {
   $platform = platform_handler::create_platform_instance_by_name(@$review->get_platform()[0]->name);
   if(!empty($platform->post_object))
    $Review_platforms[$platform->get_id()] = $platform;
 }

?>

<script type="application/ld+json">
    {
        "@context" : "https://schema.org",
        "@type" : "VideoGame",
                "applicationCategory" : "Game",
                "name" : "<?php echo $game->get_title(); ?>",
                "aggregateRating" : {
                "@type" : "AggregateRating",
                "bestRating" : "100",
                "worstRating" : "0",
                "ratingValue" : "<?php echo $game->get_average_score(); ?>",
                "ratingCount" : "<?php echo count($game->get_reviews()); ?>"
                            }
            }
</script>

<div class="row main">

  <div class="col-xs-12 col-sm-8 col-md--full last-sm">
      <div class="box video-container">
        <iframe
          width="100%"
          height="315"
          src="<?php echo $game->get_any_video(); ?>"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  </div>

  <div class="col-xs-7">
    <header class="box c-gameheader c-item">
      <h1><?php echo $game->get_title(); ?></h1>
      <div class="c-gameheader__metas">
        <?php if(!empty($Review_platforms)): ?>
        <div class="c-gameheader__metas__platforms">
          <?php foreach($Review_platforms as $plat): ?>
          <?php if(!empty($plat->post_object)): ?>
            <span class="c-item__detail c-reviewlist__item__platform" style="background: <?php echo $plat->get_color(); ?>">
              <?php echo $plat->get_title(); ?>
            </span>
          <?php endif; ?>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
    <span class="c-item__detail c-item__detail__creationdate"><?php echo \PANet\Utils::render_wp_post_creation_date($game->game_object); ?></span>
  </div>
    </header>
  </div>
  <div class="col-xs-5 col-sm-4 last-sm o-box--centered">
    <div class="c-score box" data-score="<?php echo $game->get_average_score(); ?>"></div>
  </div>



</div>

<div class="row">
<?php $highlight_texts = $GLOBALS['game']->get_highlight_texts(); ?>
<?php $highlight_texts_exist = count($highlight_texts) > 0; ?>
<?php if($highlight_texts_exist): ?>
  <div class="col-xs-12 col-sm-8 first-sm">
    <figure class="c-hlquote">
      <?php $random_index = array_rand(@$GLOBALS['game']->get_highlight_texts()); ?>
      <?php $item = @$GLOBALS['game']->get_highlight_texts()[$random_index]; ?>
      <blockquote cite="<?php echo $item['url']; ?>" class="c-hlquote__quote">
          <p><?php echo $item['text']; ?></p>
      </blockquote>
        <span>--</span>
        <span class="c-hlquote__site">
          <?php echo $item['site_name']; ?>
        </span>
        <a class="c-button c-button--link" rel="nofollow" href="<?php echo $item['url']; ?>"><?php echo __('Lue koko arvostelu'); ?><span>&raquo;</span></a>
    </figure>
  </div>
<?php endif; ?>

  <?php
      // if(current_user_can( 'edit_others_posts' )):
      if(true):
    ?>
    <?php
    // $connected_games = \game_handler::generate_game_instances_by_ids(
    $ids =[];
    foreach($GLOBALS['game']->get_connections() as $id => $value) {
      if($id > 0)
        $ids[] = $id;
    }
    ?>
    <?php if(!empty(@$GLOBALS['game']->get_highlight_texts()[0])): ?>
  <div class="col-xs-12 col-sm-4 <?php echo !empty(@$GLOBALS['game']->get_highlight_texts()[0]) ? 'first-sm' : ''; ?>">
    <?php get_template_part( 'template-parts/components/c-gamecard-assoc', 'page', ["games" => array_map(function($id) {
      return $id !== $GLOBALS['game']->get_id() ? new \game(get_post($id)) : null;
    },$ids)]); ?>
  </div>
    <?php endif; ?>
  <?php endif; ?>

  <?php if(count($game->get_reviews()) > 1 || !$highlight_texts_exist): ?>
  <div class="col-xs-12 first-sm o-box--horizontal">
    <div class="box">
    <h2><?php echo __('Arvostelut'); ?></h2>
    <div class="c-reviewlist">
      <?php
        foreach($game->get_reviews() as $review): ?>
          <div class="c-reviewlist__item c-item">
            <header class="c-reviewlist__item__header">
              <div class="c-reviewlist__item__header__score c-score--tiny c-score--<?php echo \PANet\Utils::get_color_class_by_score($review->get_score()); ?>"><?php echo $review->get_score(); ?></div>
              <div>
                <h3><?php echo $review->get_site()->data['name']; ?></h3>
                <div class="c-reviewlist__item__metas">
                  <div class="c-item__detail c-item__detail__creationdate">
                    <?php echo \PANet\Utils::render_wp_post_creation_date($review->review_object); ?>
                  </div>
                </div>
              </div>
            </header>
            <div class="c-reviewcard__summary">
              <blockquote>
              <?php echo $review->get_summary(180); ?>
              </blockquote>
            </div>
            <a class="button--dark" rel="nofollow" href="<?php echo $review->get_url(); ?>"><?php echo __('Lue arvostelu'); ?></a>
          </div>
        <?php endforeach; ?>

      </div>
    </div>
  </div>
  <?php endif; ?>

</div>

<div class="row">

</div>

<div class="row">
  <div class="col-xs-12 col-sm-4 c-newslist">
    <?php $news_items = json_decode(@$game->get_news_items()[0]); ?>
    <?php if(!empty($news_items)): ?>
      <h2 class="c-newslist__header">Liiteyt uutiset</h2>
      <?php foreach($news_items as $news_item): ?>
        <a href="<?php echo $news_item->url; ?>" rel="nofollow" class="c-newslist__item">
          <h3 class="c-newslist__item__header"><?php echo utf8_decode($news_item->title); ?></h3>
          <div class="c-newslist__item__metas">
            <span class="c-item__detail c-item__detail__sitename c-newslist__item__sitename"><?php echo \PANet\Utils::get_site_name_from_url($news_item->url)->data["name"]; ?></span>
            <span class="c-item__detail c-item__detail__creationdate c-newslist__item__creationdate">
              <?php
              $year = date("Y", strtotime($news_item->write_date));
              if($year > 2016)
              echo date("j.n.o", strtotime($news_item->write_date));
              ?>
            </span>
        </div>
        </a>
      <?php endforeach; ?>
    <?php endif; ?>
  </div>

  <div class="col-xs-12 col-sm-8 first-lg">
    <h2>Pelin tiedot</h2>
    <div class="box">
      <table style="width: 100%;">
        <tr>
          <td>Nimi</td>
          <td><?php echo $game->get_title(); ?></td>
        </tr>
        <?php if(!empty($game->get_developer())): ?>
          <tr>
            <td>Kehittäjä</td>
            <td><?php echo $game->get_developer(); ?></td>
          </tr>
        <?php endif; ?>
        <?php if(!empty($game->get_tax_platforms())): ?>
          <tr>
            <td>Alustat</td>
            <td><?php echo implode(', ',$game->get_tax_platforms()); ?></td>
          </tr>
        <?php endif; ?>
        <?php if(!empty($game->get_tax_platforms())): ?>
        <tr>
          <td>Julkaistu</td>
          <td><?php echo $game->get_tax_release_year(); ?></td>
        </tr>
        <?php endif; ?>
        <?php if(!empty($genres)): ?>
          <tr>
            <td>Genret</td>
            <td><?php echo !empty($genres) ? implode(', ', $genres) : null; ?></td>
          </tr>
        <?php endif; ?>

      </table>


    </div>
  </div>

</div>
