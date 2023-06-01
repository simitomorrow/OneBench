<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "onebench";
// $username = "smizz_onebench";
// $password = "GE-9YAu:8gy;6c";
// $dbname = "smizz_onebench";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>