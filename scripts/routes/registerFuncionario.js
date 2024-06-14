const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');

const router = express.Router();

router.post('/register-funcionario', async (req, res) => {
    try {
        const { idEstabelecimento, Nome, Email, Senha } = req.body;

        const [rows] = await db.query('SELECT Email FROM Funcionario WHERE Email = ?', [Email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'Funcionário já existe' });
        }

        const hashedPassword = await bcrypt.hash(Senha, 10);
        await db.query(
            'INSERT INTO Funcionario (idEstabelecimento, Nome, Email, Senha) VALUES (?, ?, ?, ?)',
            [idEstabelecimento, Nome, Email, hashedPassword]
        );

        res.status(201).json({ message: 'Funcionário registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
