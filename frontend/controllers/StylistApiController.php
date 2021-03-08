<?php


include '../../config/acl.php';
include '../../config/database.php';

class StylistApiController extends DBParams
{
    public function indexAction(){

        $stmt = $this->DBConnect()->query('SELECT * FROM stylists');


        $url = $_SERVER['REQUEST_URI'];
        if(strstr($url, '?city=')) {
            parse_str(parse_url($url)['query'], $params);
        }


        $stylistList = [];
        while($row = $stmt->fetch()) {
            $stylistList[] = [
                'id_stylist' => $row['id_stylist'],
                'name'       => $row['name'],
                'image'      => $row['image'],
                'services'   => [
                    'wedding_hair'      => $row['wedding_hair'] == 1 ? true : false,
                    'wedding_makeup'    => $row['wedding_makeup'] == 1 ? true : false,
                    'event_hair'        => $row['event_hair'] == 1 ? true : false,
                    'event_makeup'      => $row['event_makeup'] == 1 ? true : false,
                ],
                'city'       => $row['city'],
                'desc'       => $row['desc'],
            ];
        };

        $response['stylists'] = $stylistList;
        $response['city'] = $params['city'] ?? null;
        
        
        echo json_encode($response);
    }
}

$api = new StylistApiController();
echo $api->indexAction();

