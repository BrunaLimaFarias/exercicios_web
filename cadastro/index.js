function gravar()
{
    var form = document.getElementById('formCadastro');
    var dados = new FormData(form);

    var senha = document.getElementById("senha").value;
    var confirma_senha = document.getElementById("confirma_senha").value;
    var descricao = document.getElementById("descricao").value;
    var email_remetente=document.getElementById("email_remetente").value;
    var email_destinatario=document.getElementById("email_destinatario").value;
    

    if (senha == confirma_senha && email_remetente == email_destinatario && senha != '' && confirma_senha != '' && descricao != '' && email_remetente != '' && email_destinatario != '') {
        
    fetch("gravar.php",{
        method: "POST",
        body: dados
    })
        alert("Enviado com sucesso")
    }

    else if(senha!=confirma_senha ){
        alert("As senhas nao coincidem")
    }

    else if(email_remetente!=email_destinatario){
        alert("Emails nao coincidem")
    }

    else 
        alert("Há campos vazios")
    
}