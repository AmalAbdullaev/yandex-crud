<?php
    $title = $_GET['title'];

    header('Content-type: application/json');  
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Credentials: true');;

    if (!$title) {
        header('HTTP/1.1 404 Not Found');
        echo json_encode([
            'status' => 'incorrect request'
        ]);
        exit();
    }

    $databaseJson = file_get_contents('database.json');
    $database = json_decode($databaseJson);

    $result = false;
    while($result = array_pop($database)) {
        if ($result->title === $title) {
            break;
        }
    }


    if (!$result) {
        header('HTTP/1.1 404 Not Found');
        echo json_encode([
            'status' => 'game not found'
        ]);

        exit();
    }

    echo json_encode($result);
