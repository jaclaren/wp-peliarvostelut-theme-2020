<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Peliarvostelut.NET_2020_Theme
 */

?>

	<footer class="c-sitefooter">
    <div class="c-sitefooter__column">
      <ul class="c-sitefooter__list">
        <li class="c-sitefooter__item">
          <a rel="nofollow" href="https://www.facebook.com/peliarvostelut" class="c-sitefooter__link c-sitefooter__link--icon c-icon c-icon__some__facebook">
            <?php peliarvostelut_net_2020_icons_facebook(); ?>
          </a>
        </li>
        <li class="c-sitefooter__item">
          <a rel="nofollow" href="https://twitter.com/_peliarvostelut" class="c-sitefooter__link c-sitefooter__link--icon c-icon c-icon__some__twitter">
            <?php peliarvostelut_net_2020_icons_twitter(); ?>
          </a>
        </li>
      </ul>
    </div>
    <div class="c-sitefooter__column c-sitefooter__column__partners">
      <h3 class="c-sitefooter__columnheader">Yhteistyössä</h3>
      <a href="https://www.gamereality.org" rel="nofollow" class="c-sitefooter__link c-sitefooter__link__partner">
        www.gamereality.org
      </a>
    </div>
    <div class="c-sitefooter__column c-sitefooter__copyright">
      &copy; Peliarvostelut.NET (2018-<?php echo date("Y"); ?>)
    </div>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
