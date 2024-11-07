<?php
include 'connect.php';

$sql = 'SELECT * FROM users';
$result = $conn->query($sql);

if (!$result)
{
  die("invalid query");
};

$user = [];

while ($row = $result->fetch_assoc())
{
  $user[] = $row;
};


header("Content-Type: application/json");


echo json_encode($user);  


$conn->close(); 
exit;




?>