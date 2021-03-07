<?php

include '../../config/acl.php';
include '../../config/database.php';

class ServiceApiController extends DBParams
{
    public function indexAction(){

        $stmt = $this->DBConnect()->query('SELECT * FROM stylists');

        $serviceList = [];
        while($row = $stmt->fetch()) {
            $serviceList[] = [
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

        $response['serviceList'] = $serviceList;
        
        echo json_encode($response);
    }
}

$api = new ServiceApiController();
echo $api->indexAction();