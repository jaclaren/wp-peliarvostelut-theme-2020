<?php

if ( ! function_exists( 'peliarvostelut_net_2020_theme_enqueues' ) ) :
  function peliarvostelut_net_2020_theme_enqueues() {
    wp_enqueue_style('core',
      get_stylesheet_directory_uri().'/css/core.css'
    );
  }

  add_action('wp_enqueue_scripts', 'peliarvostelut_net_2020_theme_enqueues');

endif;
