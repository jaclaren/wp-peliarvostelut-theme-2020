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
  <!-- <a href="#">Traileri</a>
  <a href="#">Pelivideo</a> -->

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
    <div class="box">
      <h1><?php echo $game->get_title(); ?></h1>
      Lisätty 6 päivää sitten
    </div>
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
          <div class="c-reviewlist__item">
            <h3><?php echo $review->get_site()->data['name']; ?></h3>
            <div><?php echo $plats[array_rand($plats)]; ?></div>
            <div>
              <?php echo $review->get_summary(); ?>
            </div>
            <div>5 päivää sitten</div>
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
    <?php
    for($reviewIndex = 0; $reviewIndex < 3; $reviewIndex++): ?>
      <div class="c-reviewlist__item">
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        <span><?php echo $sites[array_rand($sites)]; ?></span>
        <span>10 päivää sitten</span>
      </div>
    <?php endfor; ?>
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
