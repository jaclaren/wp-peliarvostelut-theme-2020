<?php

function peliarvostelut_net_2020_compilation_list( $query ) {
  return;  
}

add_action( 'pre_get_posts', 'peliarvostelut_net_2020_compilation_list', 1 );

?>
