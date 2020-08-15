<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Peliarvostelut.NET_2020_Theme
 */


$posts = get_posts(['post_type' => 'game', 'posts_per_page' => 5]);
$game = new \game(@$posts[0]);

?>
<div class="row main">
	<div class="col-xs-12 col-sm-8 col-md--full">
			<div class="box video-container">
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube.com/embed/tCI396HyhbQ"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
	</div>

	<div class="col-xs-12 col-sm-4">
		<div class="box">
			<div class="row compilationcard--primary">
				<section class="col-xs-8 col-sm-12">
					<h2>Death Stranding: Super long game name here</h2>
					<div>4 arvostelua</div>
					<a href="kooste.php" class="button button--solid">
						Kooste
					</a>
				</section>
				<div class="col-xs-4 col-sm-12 first-sm">
					<div class="o-container o-container-xs--center o-container-xs--middle">
						<div class="c-score" data-score="95"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<section>
	<div class="row">
		<div class="col-xs-12 o-box--horizontal" style="position: relative">
			<h2>Uudet koosteet</h2>
			<div class="games" id="games"></div>
		</div>
	</div>
</section>

	<div class="row">
		<div class="col-xs-12">
			<h2>Sivustojen arvostelut</h2>
			<div id="reviews"></div>
		</div>
	</div>
