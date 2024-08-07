const express = require('express');
const db = require('../models/db');

const router = express.Router();

router.post('/register-endereco', async (req, res) => {
    try {
        const { idEstabelecimento, Cidade, Rua, Numero, CEP } = req.body;

        const [rows] = await db.query('SELECT idEstabelecimento FROM Estabelecimento WHERE idEstabelecimento = ?', [idEstabelecimento]);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Estabelecimento não encontrado' });
        }

        await db.query(
            'INSERT INTO Endereco (idEstabelecimento, Cidade, Rua, Numero, CEP) VALUES (?, ?, ?, ?, ?)',
            [idEstabelecimento, Cidade, Rua, Numero, CEP]
        );

        res.status(201).json({ message: 'Endereço registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
