const express = require('express');
const db = require('../models/db');

const router = express.Router();

router.post('/register-produto', async (req, res) => {
    try {
        const { idEstabelecimento, Nome, Custo, Preco, PrecoNaMaquina, Desconto } = req.body;

        // Verificar se o estabelecimento existe
        const [rows] = await db.query('SELECT idEstabelecimento FROM Estabelecimento WHERE idEstabelecimento = ?', [idEstabelecimento]);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Estabelecimento não encontrado' });
        }

        // Inserir o novo produto no banco de dados
        await db.query(
            'INSERT INTO Produto (idEstabelecimento, Nome, Custo, Preco, PrecoNaMaquina, Desconto) VALUES (?, ?, ?, ?, ?, ?)',
            [idEstabelecimento, Nome, Custo, Preco, PrecoNaMaquina, Desconto]
        );

        res.status(201).json({ message: 'Produto registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
