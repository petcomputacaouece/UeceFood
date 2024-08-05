const mysql = require('mysql2/promise');

async function createDatabase() {
    // Configuração da conexão
    const connectionConfig = {
        host: 'localhost', // ou o endereço do seu servidor MySQL
        user: 'root',      // substitua pelo seu usuário do MySQL
        password: '1234' // substitua pela sua senha do MySQL
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
                id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                Nome CHAR(255), 
                CNPJ_CPF CHAR(20) UNIQUE,
                TipoEstabelecimento CHAR(255),
                Email CHAR(255) UNIQUE,
                Senha CHAR(255),
                Endereço CHAR(255)
            );
        `);

        // Cria a tabela 'Funcionario'
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Funcionario (
                id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                idEstabelecimento INT,
                Nome CHAR(255),
                Email CHAR(255) UNIQUE,
                Senha CHAR(255),
                Ativo BOOLEAN,
                FOREIGN KEY (idEstabelecimento) REFERENCES Estabelecimento(id)
            );
        `);

        // Cria a tabela 'Produto'
        // Falta a foto do produto
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Produto (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                idEstabelecimento INT,
                Nome CHAR(255),
                Custo FLOAT,
                Preco FLOAT,
                PrecoNaMaquina FLOAT,
                Desconto VARCHAR(255),
                Quantidade INT,
                Ativo BOOLEAN,
                FOREIGN KEY (idEstabelecimento) REFERENCES Estabelecimento(id)
            );
        `);

        // Cria a tabela 'Venda'
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Venda (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                idProduto INT,
                idFuncionario INT,
                idEstabelecimento INT, 
                ValorTotal FLOAT,
                FormaDePagamento CHAR(255),
                DataHoraVenda DATETIME,
                FOREIGN KEY (idProduto) REFERENCES Produto(id),
                FOREIGN KEY (idFuncionario) REFERENCES Funcionario(id),
                FOREIGN KEY (idEstabelecimento) REFERENCES Estabelecimento(id)
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
