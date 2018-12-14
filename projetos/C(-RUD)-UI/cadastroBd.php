<?php
  include('conection.php');


  $array = json_decode($_POST['dados']);
  $nome = $array->nome;
  $email = $array->email;
  $senha = $array->senha;

  try{
      $conn = new PDO( 'mysql:host='.MYSQL_HOST.';dbname='.MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
      $conn->exec("set names utf8");

      $query = "INSERT INTO User (nome, email, senha) VALUES (:_nome,:_email,:_senha)";

      $stmt = $conn->prepare( $query );
      $stmt->bindParam( ':_nome', $nome );
      $stmt->bindParam( ':_email', $email );
      $stmt->bindParam( ':_senha', $senha );
      $stmt->execute();

      $rowsAffected = $stmt->rowCount();
      if($rowsAffected > 0){
          echo 'True';
      } else{
          echo 'False';
      }
  }catch (PDOException $e ){
      echo 'Erro ao conectar com o MySQL: ' . $e->getMessage();
  }
?>
