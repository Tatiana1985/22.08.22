<?php
header('Content-Type: text/html; charset=utf-8');
session_start();

$mysqli = mysqli_connect("localhost", "oefnbvtr_0755", "12345", "oefnbvtr_0755");

if ($mysqli == false) {
  print("error");
} else {
  $email = trim(mb_strtolower($_POST["email"]));
  $pass = trim($_POST["pass"]);

  $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
  $result = $result->fetch_assoc();

  //var_dump($result["pass"]);

  if (password_verify($pass, $result["pass"])) {
    echo "ok";
    $_SESSION["name"] = $result["name"];
    $_SESSION["lastname"] = $result["lastname"];
    $_SESSION["email"] = $result["email"];
    $_SESSION["id"] = $result["id"];
  } else {
    echo "user-not-found";
  }

}
