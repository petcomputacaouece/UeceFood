const mysql = require('mysql2/promise');

async function createDatabase() {
    // Configuração da conexão
    const connectionConfig = {
        host: 'localhost', // ou o endereço do seu servidor MySQL
        user: 'root',      // substitua pelo seu usuário do MySQL
        password: 'S1234' // substitua pela sua senha do MySQL
    };

    // Cria uma conexão com o servidor MySQL
    const connection = await mysql.createConnection(connectionConfig);

    try {
        // Cria o banco de dados
        await connection.query('CREATE DATABASE IF NOT EXISTS uece_food_db');

        // Seleciona o banco de dados
        await connection.query('USE uece_food_db');

        // Cria a tabela 'Estabelecimento'
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Estabelecimento (
                idEstabelecimento INT AUTO_INCREMENT PRIMARY KEY,
                Nome CHAR(255),
                CNPJ_CPF CHAR(20) UNIQUE,
                TipoEstabelecimento CHAR(255),
                Email CHAR(255) UNIQUE,
                Senha CHAR(255)
            );
        `);

        // Cria a tabela 'Funcionario'
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Funcionario (
                idFuncionario INT AUTO_INCREMENT PRIMARY KEY,
                idEstabelecimento INT,
                Nome CHAR(255),
                Email CHAR(255) UNIQUE,
                Senha CHAR(255),
                FOREIGN KEY (idEstabelecimento) REFERENCES Estabelecimento(idEstabelecimento)
            );
        `);

        // Cria a tabela 'Endereco'
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Endereco (
                idEndereco INT AUTO_INCREMENT PRIMARY KEY,
                idEstabelecimento INT,
                Cidade CHAR(255),
                Rua CHAR(255),
                Numero INT,
                CEP CHAR(10),
                FOREIGN KEY (idEstabelecimento) REFERENCES Estabelecimento(idEstabelecimento)
            );
        `);

        // Cria a tabela 'Produto'
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Produto (
                idProduto INT AUTO_INCREMENT PRIMARY KEY,
                idEstabelecimento INT,
                Nome CHAR(255),
                Custo FLOAT,
                Preco FLOAT,
                PrecoNaMaquina FLOAT,
                Desconto VARCHAR(255),
                FOREIGN KEY (idEstabelecimento) REFERENCES Estabelecimento(idEstabelecimento)
            );
        `);

        // Cria a tabela 'Venda'
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Venda (
                idVenda INT AUTO_INCREMENT PRIMARY KEY,
                idProduto INT,
                Preco FLOAT,
                FormaDePagamento CHAR(255),
                FOREIGN KEY (idProduto) REFERENCES Produto(idProduto)
            );
        `);

        console.log('Banco de dados e tabelas criados com sucesso.');
    } catch (error) {
        console.error('Erro ao criar o banco de dados ou tabela:', error);
    } finally {
        // Fecha a conexão
        await connection.end();
    }
}

createDatabase();
