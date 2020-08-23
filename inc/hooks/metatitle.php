<?php

function peliarvostelut_net_2020_theme_custom_title($title_parts) {
  if(is_singular('game')) {
    $title_parts['title'] = __(sprintf('Pelin %s arvostelukooste', get_post()->post_title));
  }

    return $title_parts;
}

add_filter( 'document_title_parts', 'peliarvostelut_net_2020_theme_custom_title' );

?>
