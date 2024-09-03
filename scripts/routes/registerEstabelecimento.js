const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');

const router = express.Router();

router.post('/register-estabelecimento', async (req, res) => {
    try {
        const { Nome, CNPJ_CPF, TipoEstabelecimento, Email, Senha, Endereço } = req.body;

        const errors = [];

        const [rowsEmail] = await db.query('SELECT Email FROM Estabelecimento WHERE Email = ?', [Email]);
        if (rowsEmail.length > 0) {
            errors.push({ message: 'Email já está em uso333' });
        }

        const [rowsCNPJ_CPF] = await db.query('SELECT CNPJ_CPF FROM Estabelecimento WHERE CNPJ_CPF = ?', [CNPJ_CPF]);
        if (rowsCNPJ_CPF.length > 0) {
            errors.push({ message: 'CNPJ/CPF já está em uso333' });
        }

        if (errors.length > 0) {
            return res.status(400).json({ errors });
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
