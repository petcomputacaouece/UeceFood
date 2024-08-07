const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');

const router = express.Router();

router.post('/register-estabelecimento', async (req, res) => {
    try {
        const { Nome, CNPJ_CPF, TipoEstabelecimento, Email, Senha } = req.body;

        // Verificar se o estabelecimento já existe
        const [rows] = await db.query('SELECT Email FROM Estabelecimento WHERE Email = ?', [Email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'Estabelecimento já existe' });
        }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(Senha, 10);

        // Inserir o novo estabelecimento no banco de dados
        const [result] = await db.query(
            'INSERT INTO Estabelecimento (Nome, CNPJ_CPF, TipoEstabelecimento, Email, Senha) VALUES (?, ?, ?, ?, ?)',
            [Nome, CNPJ_CPF, TipoEstabelecimento, Email, hashedPassword]
        );

        const idEstabelecimento = result.insertId;

        // Criar a tabela de inventário para o novo estabelecimento
        const inventarioTable = `Inventario_${idEstabelecimento}`;
        const createInventarioTableQuery = `
            CREATE TABLE ${inventarioTable} (
                idInventario INT AUTO_INCREMENT PRIMARY KEY,
                idProduto INT,
                Nome CHAR(255),
                Quantidade INT,
                Custo FLOAT,
                Valor FLOAT,
                FOREIGN KEY (idProduto) REFERENCES Produto(idProduto)
            );
        `;

        await db.query(createInventarioTableQuery);

        res.status(201).json({ message: 'Estabelecimento e tabela de inventário criados com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
