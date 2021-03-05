<?php

header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
if(isset($_SERVER['HTTP_ORIGIN'])){
    header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
}
if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])){
    header('Access-Control-Allow-Headers: '.$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']);
}
header('Access-Control-Allow-Credentials: true');
header("Content-Type: application/json");