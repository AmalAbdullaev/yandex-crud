<?php
    $title = $_POST['title'];
    $platformJSON = $_POST['platform'];
    $price = intval($_POST['price']);
    $description = $_POST['description'];
    $cover = $_POST['cover'];

    header('Content-type: application/json');
    header('Access-Control-Allow-Origin: *');

    if (!$title || !$platformJSON || !$price) {
        header('HTTP/1.1 404 Not Found');
        echo json_encode([
            'status' => 'incorrect request'
        ]);
        exit();
    }

    $platform = json_decode($platformJSON);

    $databaseJson = file_get_contents('database.json');
    $database = json_decode($databaseJson);

    $id = 0;

    for ($i = 0; $i < count($database); $i++) {
        if ($id <= intval($database[$i]->id)) {
            $id = $database[$i]->id + 1;
        }
    }

    array_push($database, [
        'id' => $id,
        'title' => $title,
        'platform' => $platform,
        'price' => $price,
        'votes' => 0,
        'description' => $description,
        'cover' => $cover,
        'isFavorite' => false,
        'rating' => 0
    ]);

    file_put_contents('database.json', json_encode($database));

    echo json_encode([
        'status' => 'ok'
    ]);
