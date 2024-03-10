<?php

$host = "casaponissa.ddns.net";
    $username = "manfredi";
    $password = "manfredi";
    $database = "manfredi";


    $connessione = new mysqli($host, $username, $password, $database);
    if ($connessione->connect_error) {
        die("Connessione fallita: " . $connessione->connect_error);
    }
?>