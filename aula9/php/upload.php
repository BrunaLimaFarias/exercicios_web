<?php


    $arquivo = $_FILES["arquivo"];

    //print_r($arquivo);

    $novo ="../upload/" . $arquivo["name"];
    move_uploaded_file($arquivo["tmp_name"], $novo);


?>