<?php
    $id = intval($_POST['id']);
    $title = $_POST['title'];
    $platformJSON = $_POST['platform'];
    $price = intval($_POST['price']);
    $isFavorite = $_POST['isFavorite'];

    header('Content-type: application/json');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Credentials: true');

    if (!$id || !($title || $platformJSON || $price|| $isFavorite)) {
        header('HTTP/1.1 404 Not Found');
        echo json_encode([
            'status' => 'incorrect request'
        ]);
        exit();
    }

    $databaseJson = file_get_contents('database.json');
    $database = json_decode($databaseJson);

    $found = false;

    for ($i = 0; $i < count($database); $i++) {
        if ($id === intval($database[$i]->id)) {
            $found = true;
            if ($title) {
                $database[$i]->title = $title;
            }
            if ($platformJSON) {
                $platform = json_decode($platformJSON);
                $database[$i]->platform = $platform;
            }
            if ($price) {
                $database[$i]->price = $price;
            }
            if ($isFavorite) {
                $database[$i]->isFavorite = $isFavorite;
            }
        }
    }

    if (!$found) {
        header('HTTP/1.1 404 Not Found');
        echo json_encode([
            'status' => 'game not found'
        ]);

        exit();
    }

    file_put_contents('database.json', json_encode($database));

    echo json_encode([
        'status' => 'ok'
    ]);
