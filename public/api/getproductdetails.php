<?php
require_once('functions.php');
require_once('config.php');
set_exception_handler('handleError');
require_once('mysqlconnect.php');

if (empty($_GET['productId'])){
    throw new Exception ('productId is a required value');
}
$id=(int)$_GET['productId'];

$output['success'] = false;

$query= "SELECT `id`,`name`,`price`,`image`,`description`,`misc_details` AS `miscDetails` FROM `products` WHERE `id`=$id";

$results = mysqli_query($conn,$query);

if (!$results){
    throw new Exception(mysqli_error($conn));
}
if (mysqli_num_rows($results)===0){
    throw new Exception("no data available for product id $id");
}

$data=mysqli_fetch_assoc($results);

$data['price']=intval($data['price']);
$data['miscDetails']= json_decode($data['miscDetails']);

$output=[
    'success'=>true,
    'productInfo'=>$data
];

$json_output = json_encode($output);
print($json_output);


?>
