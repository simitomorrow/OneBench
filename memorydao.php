<?php
include 'dbconnection.php';
$_POST = json_decode(file_get_contents("php://input"), true);

if (isset($_POST["action"])) {
  $action = $_POST["action"];
  if ($action == "newMemory") {
    newMemory($_POST["data"], $conn);
  }
}

function newMemory($memory, $conn)
{
  // dump($memory);
  // dump($memory["question"]);

  foreach ($memory as $key => $value) {
    $memory[$key] = addslashes($value);
  }

  $sql = "INSERT INTO memory(Question, Message, Color, By_User_Hash) VALUES ('{$memory["question"]}','{$memory["message"]}','{$memory["color"]}','{$memory["userHash"]}')";
  // echo $sql;

  if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}



function dump(...$variables)
{
  foreach ($variables as $variable) {
    echo gettype($variable) . '<br>';
    echo '<pre>';
    print_r($variable);
    echo '</pre>';
  }
}

?>