<?php
   include "connectdb.php";

   $data=json_decode(file_get_contents("php://input"));
   $vorname=$dbhandle->real_escape_string($data->vorname);
   $nachname=$dbhandle->real_escape_string($data->nachname);
   $enabled=$dbhandle->real_escape_string($data->enabled);

   $query="INSERT INTO user (Vorname, Nachname, enabled)
           VALUES ('$vorname', '$nachname', '$enabled')";

   $dbhandle->query($query);
?>
