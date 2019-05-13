<?php

    header('Content-type: application/json');
    header('Access-Control-Allow-Origin: *');

    $databaseJson = file_get_contents('database.json');
    $database = json_decode($databaseJson);

    echo json_encode($database);
