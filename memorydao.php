<?php
include 'dbconnection.php';
$_POST = json_decode(file_get_contents("php://input"), true);

if (isset($_POST["action"])) {
  $action = $_POST["action"];
  if ($action == "newMemory") {
    newMemory($_POST["data"], $conn);
  }
  if ($action == "readAllMemories") {
    readAllMemories($conn);
  }
}

function newMemory($memory, $conn)
{
  foreach ($memory as $key => $value) {
    $memory[$key] = addslashes($value);
  }

  $sql = "INSERT INTO MEMORY(Question, Message, Color) VALUES ('{$memory["question"]}','{$memory["message"]}','{$memory["color"]}');";

  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

function readAllMemories($conn)
{
  $sql = "SELECT * FROM MEMORY;";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    $concat = [];
    while($row = $result->fetch_assoc()) {
      $concat[] = $row;
    }
    echo json_encode($concat);
  } else {
    echo "0 results";
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