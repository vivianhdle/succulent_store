<?php
// require_once('functions.php');
// require_once('config.php');
set_exception_handler('handleError');
require_once('mysqlconnect.php');


$output['success'] = false;

$query= 'SELECT name,price,image,id from products';

$results = mysqli_connect($conn,$query);

if ($result){
    throw new Exception(mysqli_error($conn));
}
$output['data'] = [];

while ($row = mysqli_fetch_assoc($result)){
    $output['data'][]=[
        'id':$row['id'],
        'name':$row['name'],
        'price':$row['price'],
        'image':$row['image']
    ];
}
$output['success'] = true;

$json_output = json_encode($output);
print($json_output);

?>
