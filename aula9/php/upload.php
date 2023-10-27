<?php

    $arquivo = $_FILES["arquivo"];
    if (($arquivo["type"]) == "image/png") {
        $novo ="../upload/".$arquivo["name"];
        move_uploaded_file($arquivo["tmp_name"], $novo);
        $mensagem = "Upload feito com sucesso";
    }

    else{
        $mensagem = "Somente é permitido imagem em PNG";
    }

    $json = json_encode($mensagem);
    echo $json;
    
?>