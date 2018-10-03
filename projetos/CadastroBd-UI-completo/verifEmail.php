<?php
    include('conection.php');
    $email = $_POST['email'];
    try{
        $conn = new PDO( 'mysql:host='.MYSQL_HOST.';dbname='.MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
        $conn->exec("set names utf8");

        $search = '%'.$email.'%';
        $query = "SELECT * FROM User WHERE email LIKE :search";

        $stmt = $conn->prepare( $query );
        $stmt->bindParam( ':search', $search );
        $stmt->execute();

        $rows = $stmt->fetchAll( PDO::FETCH_ASSOC );
        if(sizeof($rows) > 0){
            echo 'True';
        } else{
            echo 'False';
        }
    }catch (PDOException $e ){
        echo 'Erro ao conectar com o MySQL: ' . $e->getMessage();
    }
?>
