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
   $coverimage_is_valid = !empty(@$coverimage[0]) && get_class($coverimage[0]) !== "WP_Error";
 }

 if(!$coverimage_is_valid && !empty($coverimage_url)) {
   if(preg_match('/http|https/', $coverimage_url)) {
     set_image_to_game($coverimage_url, $game);
   }
 }

?>

<div class="row main">

  <div class="col-xs-12 col-sm-8 col-md--full last-sm">
      <div class="box video-container">
        <iframe
          width="100%"
          height="315"
          src="<?php echo $game->get_youtube_trailer(); ?>"
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
        $f = fopen('mocks/reviewlist01.json', 'r');
        $j = fread($f,filesize("mocks/reviewlist01.json"));

        $reviews = json_decode($j);
        $plats = ['PC', 'PlayStation 4', 'Xbox One', 'Switch'];
        $sites = ['Game Reality', 'Game Reactor Suomi', 'Muropaketti', 'KonsoliFIN', 'Fintendo', 'Respawn'];
        $lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        $loremArr = explode(' ', $lorem);
        $r = array_rand($loremArr);

        foreach($game->get_reviews() as $review): ?>
          <div class="c-reviewlist__item c-item">
            <header>
              <div class="c-score--tiny"><?php echo $review->get_score(); ?></div>
              <div>
                <h3><?php echo $review->get_site()->data['name']; ?></h3>
                <div class="c-item__detail c-item__detail__creationdate">
                  <?php echo \PANet\Utils::render_wp_post_creation_date($review->review_object); ?>
                </div>
              </div>
            </header>
            <div class="c-reviewcard__summary">
              <blockquote>
              <?php echo $review->get_summary(180); ?>
              </blockquote>
            </div>
            <a class="button--dark" href="<?php echo $review->get_url(); ?>"><?php echo __('Lue arvostelu'); ?></a>
          </div>
        <?php endforeach; ?>

      </div>
    </div>
  </div>

</div>

<div class="row">

</div>

<div class="row">
  <div class="col-xs-12 col-sm-4">
    <h2>Liiteyt uutiset</h2>
    <?php error_reporting(E_ALL); ?>
    <?php foreach(json_decode(@$game->get_news_items()[0]) as $news_item): ?>
      <a href="<?php echo $news_item->url; ?>" class="c-reviewlist__item">
        <h3><?php echo utf8_decode($news_item->title); ?></h3>
        <div>
          <span class="c-item__detail c-item__detail__creationdate">
            <?php
            $year = date("Y", strtotime($news_item->write_date));
            if($year > 2016)
            echo date("j.n.o", strtotime($news_item->write_date));
            ?>
          </span>
        <span class="c-item__detail c-item__detail__sitename">-- <?php echo get_site_name_from_url($news_item->url)->data["name"]; ?></span>
      </div>
      </a>
    <?php endforeach; ?>
  </div>

  <div class="col-xs-12 col-sm-8 first-lg">
    <h2>Pelin tiedot</h2>
    <div class="box">
      <table style="width: 100%;">
        <tr>
          <td>Nimi</td>
          <td>Death Stranding</td>
        </tr>
        <tr>
          <td>Alustat</td>
          <td>PC, PlayStation 4</td>
        </tr>
        <tr>
          <td>Julkaistu</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>Genret</td>
          <td>Seikkailu</td>
        </tr>
        <tr>
          <td colspan="2">
            <?php #include('partials/svg.php'); ?>
          </td>
        </tr>

      </table>


    </div>
  </div>

</div>
