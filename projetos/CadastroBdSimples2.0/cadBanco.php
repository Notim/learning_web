<?php
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $senha = $_POST['senha'];

  try{
    $conn = new PDO("mysql:host=localhost;dbname=bdSite", "root", "") ;
    $stmt = $conn->prepare("INSERT INTO user (nome, email, senha) VALUES(:nome,:email,:senha)");
    $stmt->bindParam(':nome',$nome);
    $stmt->bindParam(':email',$email);
    $stmt->bindParam(':senha',$senha);
    $stmt->execute();

    if($stmt->rowCount() > 0){
      echo 'True';
    }else{
      echo 'False';
    }
    $conn = null;

  }catch(PDOException $e){
    echo "Erro: ".$e;
  }
?>
