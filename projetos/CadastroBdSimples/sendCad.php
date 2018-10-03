<?php
    include('conection.php');
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    try{
        $conn = new PDO( 'mysql:host='.MYSQL_HOST.';dbname='.MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
        $conn->exec("set names utf8");
        
        $query = "INSERT INTO `bdtestepdo`.`tbuser`(`nome`, `email`, `senha`) VALUES (:nome, :email, :senha)";
        
        $stmt = $conn->prepare( $query );
        $stmt->bindParam( ':nome', $nome);
        $stmt->bindParam( ':email', $email);
        $stmt->bindParam( ':senha', $senha);
        $result = $stmt->execute();
 
        if (!$result){
            echo 'False';
        }else{
            echo 'True';
        }        
    }catch (PDOException $e ){
        echo 'Erro ao conectar com o MySQL: ' . $e->getMessage();
    }
?>