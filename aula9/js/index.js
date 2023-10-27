async function upload(){

    var arquivo = document.getElementById('arquivo').files;

    var dados = new FormData();
    dados.append('arquivo', arquivo[0]);

    var promise = await fetch('php/upload.php',{
        method: "POST",
        body: dados
    });

    var resposta = await promise.json();
    alert(resposta);


}