<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');


$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

$carts_id = $_SESSION['carts_id'];
$products_id = intval($input['products_id']);
$quantity = intval($input['quantity']);
$price = intval($input['price']);

$update_query = "UPDATE `cart_items`
    SET `quantity` = $quantity + 1
    WHERE `carts_id` = $carts_id
    AND `products_id` = $products_id
";

$result = mysqli_query($conn, $update_query);

if (!$result) {
    throw new Exception($conn);
};

if (mysqli_affected_rows($conn) === 0) {
    throw new Exception('Could not update cart item.');
};

$update_cart_query = "UPDATE `carts`
    SET `item_count` = `item_count` + 1,
    `total_price` = `total_price` + $price
    WHERE `id` = $carts_id
";

$result = mysqli_query($conn, $update_cart_query);

if (!$result) {
    throw new exception($conn);
};

if (mysqli_affected_rows($conn) === 0) {
    throw new Exception('Could not update cart.');
};

$output = [
    "success" => true
];

print(json_encode($output));