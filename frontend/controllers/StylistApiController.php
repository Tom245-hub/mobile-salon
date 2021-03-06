<?php

include '../../config/acl.php';
include '../../config/database.php';

class StylistApiController extends DBParams
{
    public function indexAction(){

        $stmt = $this->DBConnect()->query('SELECT * FROM stylists');

        $stylistList = [];
        while($row = $stmt->fetch()) {
            $stylistList[] = [
                'id_stylist' => $row['id_stylist'],
                'name' => $row['name'],
                'image' => $row['image'],
                'services' => [
                    'wedding_hair' => $row['wedding_hair'] == 1 ? true : false,
                    'wedding_makeup' => $row['wedding_makeup'] == 1 ? true : false,
                    'event_hair' => $row['event_hair'] == 1 ? true : false,
                    'event_makeup' => $row['event_makeup'] == 1 ? true : false,
                ],
                'city' => $row['city'],
                'desc' => $row['desc'],
            ];
        };

        $response['stylistList'] = $stylistList;
        
        echo json_encode($response);
    }
}

$api = new StylistApiController();
echo $api->indexAction();








//try{
//    $pdo = new PDO('mysql:host=' . $mysql_host . ';dbname=' . $database . ';port=' . $port . ";charset=utf8", $username, $password );
//    $stmt = $pdo->query('SELECT * FROM stylists');
//
//    $response = [];
//    while($row = $stmt->fetch()) {
//        $response[] = [
//            'id_stylist' => $row['id_stylist'],
//            'name' => $row['name'],
//            'image' => $row['image'],
//            'services' => [
//                'wedding_hair' => $row['wedding_hair'] == 1 ? true : false,
//                'wedding_makeup' => $row['wedding_makeup'] == 1 ? true : false,
//                'event_hair' => $row['event_hair'] == 1 ? true : false,
//                'event_makeup' => $row['event_makeup'] == 1 ? true : false,
//            ],
//            'city' => $row['city'],
//            'desc' => $row['desc'],
//        ];
//    };
//
//}catch(PDOException $e){
//    echo 'Bład połączenia';
//    die();
//}
//
//echo json_encode($response);



