const express = require('express');
const db = require('../models/db');

const router = express.Router();

router.post('/register-venda', async (req, res) => {
    try {
        const { idProduto, Preco, FormaDePagamento } = req.body;

        // Verificar se o produto existe
        const [rows] = await db.query('SELECT idProduto FROM Produto WHERE idProduto = ?', [idProduto]);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Produto não encontrado' });
        }

        // Inserir a nova venda no banco de dados
        await db.query(
            'INSERT INTO Venda (idProduto, Preco, FormaDePagamento) VALUES (?, ?, ?)',
            [idProduto, Preco, FormaDePagamento]
        );

        res.status(201).json({ message: 'Venda registrada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
