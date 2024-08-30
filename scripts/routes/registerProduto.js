const express = require('express');
const db = require('../models/db');

const router = express.Router();

router.post('/register-produto', async (req, res) => {
    try {
        const { idEstabelecimento, Nome, Custo, Preco, PrecoNaMaquina, Desconto, Quantidade, Ativo } = req.body;

        const [rows] = await db.query('SELECT id FROM Estabelecimento WHERE id = ?', [idEstabelecimento]);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Estabelecimento não encontrado' });
        }

        await db.query(
            'INSERT INTO Produto (idEstabelecimento, Nome, Custo, Preco, PrecoNaMaquina, Desconto, Quantidade, Ativo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [idEstabelecimento, Nome, Custo, Preco, PrecoNaMaquina, Desconto, Quantidade, Ativo]
        );

        res.status(201).json({ message: 'Produto registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
