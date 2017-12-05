<?php
   include "connectdb.php";

   $data=json_decode(file_get_contents("php://input"));
   $id=$data->id;

   $query="DELETE FROM user WHERE UserID = $id";
   $dbhandle->query($query);
?>
