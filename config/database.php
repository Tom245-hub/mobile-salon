<?php

class DBParams
{
    private $mysql_host;
    private $port;
    private $username;
    private $password;
    private $database;
    private $charset;


   public function DBConnect()
    {
        $this->mysql_host = 'localhost';
        $this->port = '3306';
        $this->username = 'root';
        $this->password = '';
        $this->database = 'mobile-salon';
        $this->charset = 'utf8';

        $pdo = new PDO("mysql:host=".$this->mysql_host.";dbname=".$this->database.";charset=".$this->charset.';port='.$this->port, $this->username, $this->password);

        $pdo->query('SET NAMES utf8');
        $pdo->query('SET CHARACTER_SET utf8_unicode_ci');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;


    }

}




//
//$mysql_host = 'localhost';
//$port = '3306';
//$username = 'root';
//$password = '';
//$database = 'mobile-salon';