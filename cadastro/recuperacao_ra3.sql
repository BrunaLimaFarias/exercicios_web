DROP DATABASE IF EXISTS recuperacao;
CREATE DATABASE recuperacao;
USE recuperacao;

CREATE TABLE cadastro (
	id INT PRIMARY KEY AUTO_INCREMENT,
    email_remetente VARCHAR(45),
    email_destinatario VARCHAR(45),
    descricao VARCHAR(45),
    senha VARCHAR(20),
    confirma_senha VARCHAR(20)
    );


INSERT INTO cadastro (id, email_remetente, email_destinatario, descricao, senha, confirma_senha) VALUES
    (1, 'bruna@gmail.com', 'bruna@gmail.com', 'escreve escreve', '1234', '1234'),
    (2, 'lino@gmail.com', 'errado@gmail.com', 'escreve escreve', '5678', '5678');
