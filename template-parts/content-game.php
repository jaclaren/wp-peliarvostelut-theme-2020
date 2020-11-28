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
      <span class="c-item__detail c-item__detail__creationdate"><?php echo \PANet\Utils::render_wp_post_creation_date($game->game_object); ?></span>
    </header>
  </div>
  <div class="col-xs-5 col-sm-4 last-sm o-box--centered">
    <div class="c-score box" data-score="<?php echo $game->get_average_score(); ?>"></div>
  </div>



</div>

<div class="row">
  <div class="col-xs-12 first-sm o-box--horizontal">
    <div class="box">
    <h2>Arvostelut</h2>
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
            <?php $plat = platform_handler::create_platform_instance_by_name(@$review->get_platform()[0]->name); ?>
            <?php if(!empty($plat->post_object)): ?>
              <span class="c-item__detail c-reviewlist__item__platform" style="background: <?php echo $plat->get_color(); ?>">
                <?php echo $plat->get_title(); ?>
              </span>
            <?php endif; ?>

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
            <span class="c-item__detail c-item__detail__sitename c-newslist__item__sitename"><?php echo get_site_name_from_url($news_item->url)->data["name"]; ?></span>
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
