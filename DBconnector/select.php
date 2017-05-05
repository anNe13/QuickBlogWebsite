<?php
//database settings
include "connectdb.php";


if(function_exists($_GET['method'])){
    $_GET['method']();

}

    $user_sql= mysqli_query($con, "select * from useraccount");
    $users = array();

    while ($user = mysqli_fetch_array($user_sql)) {
        $users[] = $user;

    }
    echo $users = json_encode($users);
   // echo $_GET['jsoncallback'] . '(' .$users . ')';


?>

