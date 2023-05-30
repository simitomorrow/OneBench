<?php

dump($_POST);

function dump( ...$variables ) {
  foreach ( $variables as $variable ) {
      echo gettype( $variable ) . '<br>';
      echo '<pre>';
      print_r( $variable );
      echo '</pre>';
  }
}

function newMemory() {

}

?>