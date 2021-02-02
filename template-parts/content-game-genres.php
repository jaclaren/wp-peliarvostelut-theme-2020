<?php


function array_flatten($array,$return) {
	for($x = 0; $x <= count($array); $x++) {
		if(is_array($array[$x])) {
			$return = array_flatten($array[$x], $return);
		}
		else {
			if(isset($array[$x])) {
				$return[] = $array[$x];
			}
		}
	}
	return $return;
}


$genre_objects = array_map(
  function($genre) {
    return \genre_group_handler::get_genre_groups_with_term($genre);
  },
  $args['genres']);

foreach(array_flatten($genre_objects, []) as $genre_group):  
  get_template_part('template-parts/content', 'genre-group', ['genre_group' => $genre_group]);
endforeach; 
?>