
window.onload = async function carrega() {
    var promise = fetch("php/listar-app.php", {
        method: "GET"
    
    });

    var dados = await promise.json();

    for(var i = 0; i < dados.length; i++ ){

        var conteudo =
        `<div class="card">
            <div class="card-imagem">
                <img src="imgs/logotipos/${i}.png" width="60"/>
            </div>
            <div class="card-titulo">
                ${dados[i].nome}
            </div>
            
            <div class="card-desc">
                ${dados[i].descricao}
            </div>
            
            <div class="card-botao">
                <button>READ MORE</button>
            </div>
        </div>`;

        document.getElementById('aplicativos').innerHTML += conteudo;
    }

}