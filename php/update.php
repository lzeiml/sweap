<?php
   include_once "connectdb.php";

   $data=json_decode(file_get_contents("php://input"));
   $id=$dbhandle->real_escape_string($data->id);
   $vorname=$dbhandle->real_escape_string($data->vorname);
   $nachname=$dbhandle->real_escape_string($data->nachname);
   $enabled=$dbhandle->real_escape_string($data->enabled);

   $query="UPDATE user
           SET Vorname = $vorname, Nachname = $nachname, enabled = $enabled
           WHERE UserID = $id";
   $dbhandle->query($query);

   print $id;
   print $vorname;
   print $nachname;
   print $enabled;
?>
