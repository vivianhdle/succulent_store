<?php
require_once('functions.php');
require_once('config.php');
set_exception_handler('handleError');
require_once('mysqlconnect.php');

$output['success'] = false;

$query= 'SELECT `name`,`price`,`image`,`id` FROM `products`';

$results = mysqli_query($conn,$query);

if (!$results){
    throw new Exception(mysqli_error($conn));
}
$output['products'] = [];

while ($row = mysqli_fetch_assoc($results)){
    $output['products'][]=[
        "name"=>$row['name'],
        "price"=>$row['price'],
        "image"=>$row['image'],
        "id"=>$row['id']
    ];
}

$output['success'] = true;

$json_output = json_encode($output);
print($json_output);

?>
