<?php
    $login = $_POST['user'];          //recebendo valor do form
    $senha = MD5($_POST['password']); //recebendo valor do form tbm
    
    $connect = mysql_connect('localhost','root',''); //criando uma conexao com o server, user e password 
    $db = mysql_select_db('bdtesteuser');            //especificando o nome do banco

    /*/////////////////////////////////////////////////////////////////////////*/
    $query = "SELECT * FROM Usuario WHERE Email = :email AND Senha = :senha";

    $query_select = "SELECT * FROM tbUser WHERE user_name = '$login'"; 

    $select = mysql_query($query_select, $connect);

    $array = mysql_fetch_array($select);

    $logarray = $array['login'];
 
    if($login == "" || $login == null){
        echo"<script language='javascript' type='text/javascript'>alert('O campo login deve ser preenchido');window.location.href='cadastro.html';</script>";
 
    }else{
      if($logarray == $login){
 
        echo"<script language='javascript' type='text/javascript'>alert('Esse login já existe');window.location.href='cadastro.html';</script>";
        die();
 
      }else{
        $query = "INSERT INTO usuarios (login,senha) VALUES ('$login','$senha')";
        $insert = mysql_query($query,$connect);
         
        if($insert){
          echo"<script language='javascript' type='text/javascript'>alert('Usuário cadastrado com sucesso!');window.location.href='login.html'</script>";
        }else{
          echo"<script language='javascript' type='text/javascript'>alert('Não foi possível cadastrar esse usuário');window.location.href='cadastro.html'</script>";
        }
      }
    }
?>