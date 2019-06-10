<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output=[
    'success'=>false
];

$users_id = 1;

if(empty($_SESSION['carts_id'])){
    $cart_create_query="INSERT INTO `carts` SET
        `item_count` = 0,
        `total_price`= 0,
        `created` = NOW(),
        `users_id`= $users_id,
        `changed` = NOW()
    ";
    $cart_result=mysqli_query($conn,$cart_create_query);
    if (!$cart_result){
        throw new Exception(mysqli_error($conn));
    }
    if(mysqli_affected_rows($conn)===0){
        throw new Exception('data was not added to cart table');
    };
    $carts_id = mysqli_insert_id($conn);
    $_SESSION['carts_id']= $carts_id;
}

$carts_id=$_SESSION['carts_id'];
$cart_data_query= "SELECT `c`.`created`,`c`.`total_price`,`c`.`item_count`
FROM `carts` AS `c`
WHERE `c`.`id` = $carts_id";

$cart_data_output=[];
$cart_data_results=mysqli_query($conn,$cart_data_query);

if (!$cart_data_results){
    throw new Exception(mysqli_error($conn));
}

while($row=mysqli_fetch_assoc($cart_data_results)){
    $cart_data_output['created']=$row['created'];
    $cart_data_output['total']=(int)$row['total_price'];
}

$cart_items_query="SELECT `p`.image,`p`.name,`p`.`price`,`c`.`quantity`,`c`.`products_id`,`c`.`id`
FROM `cart_items` AS `c`
JOIN `products` AS `p`
ON `c`.`products_id`=`p`.`id`
JOIN `carts`
ON `c`.`carts_id`=`carts`.`id`
WHERE `carts`.`id` = $carts_id AND `carts`.`users_id` = $users_id
GROUP BY `c`.`products_id`";

$cart_items_results=mysqli_query($conn,$cart_items_query);

if (!$cart_items_results){
    throw new Exception(mysqli_error($conn));
}

$cart_items_output=[];
$cart_items=[];
while($row=mysqli_fetch_assoc($cart_items_results)){
    $cart_items['image']=$row['image'];
    $cart_items['name']=$row['name'];
    $cart_items['price']=(int)$row['price'];
    $cart_items['quantity']=(int)$row['quantity'];
    $cart_items['products_id']=(int)$row['products_id'];
    $cart_items['id']=(int)$row['id'];
    $cart_items_output[]= $cart_items;
};

$output=[
    'success'=>true,
    'cartItems'=>$cart_items_output,
    'cartMetaData'=>$cart_data_output
];
print(json_encode($output));
?>