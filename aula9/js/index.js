function upload(){

    var arquivo = document.getElementById('arquivo').files;

    var dados = new FormData();
    dados.append('arquivo', arquivo[0]);


    fetch('php/upload.php',{
        method: "POST",
        body: dados
    });


}