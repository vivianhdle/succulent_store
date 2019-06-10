<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output['success'] = false;

$email = 'guest';
$user_name = 'Guest';
$password = 'guest';
$hashedPassword = sha1($password);

$sign_up_query = "INSERT INTO `user` SET 
    `name`=?,
    `email`=?,
    `password`=?
";

$sign_up_statement = mysqli_prepare($conn, $sign_up_query);
mysqli_stmt_bind_param($sign_up_statement, 'sss', $user_name, $email, $hashedPassword);
$sign_up_result = mysqli_stmt_execute($sign_up_statement);
$sign_up_result = mysqli_stmt_get_result($sign_up_statement);
$returned_guest_id = $sign_up_statement->insert_id;

if(mysqli_affected_rows($conn) === 0){
    throw new Exception('User was not signed up');
}

$output['success'] = true;
$output['guest'] = $returned_guest_id;

$json_output = json_encode($output);
print($json_output);
?>