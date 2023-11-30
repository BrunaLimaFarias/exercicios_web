<?php

    $con = mysqli_connect("localhost:3306", "root", "root", "recuperacao");

    $senha = $_POST["senha"];
    $confirma_senha = $_POST["confirma_senha"];
    $descricao = $_POST["descricao"];
    $email_remetente = $_POST["email_remetente"];
    $email_destinatario = $_POST["email_destinatario"];

    
    $query = "INSERT INTO cadastro (email_remetente, email_destinatario, descricao, senha, confirma_senha) VALUES ('$email_remetente', '$email_destinatario', '$descricao', '$senha', '$confirma_senha')";

    mysqli_query($con, $query);

?>