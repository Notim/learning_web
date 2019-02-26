<?php
    //recebe dados
    $nome = $_POST["nome"];
    $email = $_POST["email"];

    echo json_encode(array("email" => $email, "nome" => $nome));
?>