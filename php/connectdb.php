<?php
   define("HOSTNAME", "127.0.0.1");
   define("PORT", "3306");
   define("USERNAME", "root");
   define("PASSWORD", "");
   define("DATABASE", "sweaptesting");

   $dbhandle=new mysqli(HOSTNAME, USERNAME, PASSWORD, DATABASE) or die("Unable to connect to database.");
?>
