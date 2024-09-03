const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');

const router = express.Router();

router.post('/register-estabelecimento', async (req, res) => {
    try {
        const { Nome, CNPJ_CPF, TipoEstabelecimento, Email, Senha, Endereço } = req.body;

        const [rows] = await db.query('SELECT Email FROM Estabelecimento WHERE Email = ?', [Email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'Email já está em uso' });
        }

        const hashedPassword = await bcrypt.hash(Senha, 10);

         await db.query(
            'INSERT INTO Estabelecimento (Nome, CNPJ_CPF, TipoEstabelecimento, Email, Senha, Endereço) VALUES (?, ?, ?, ?, ?, ?)',
            [Nome, CNPJ_CPF, TipoEstabelecimento, Email, hashedPassword, Endereço]
        );

        res.status(201).json({ message: 'Estabelecimento criado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
