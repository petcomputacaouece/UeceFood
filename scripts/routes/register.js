const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verificar se o usuário já existe
        const [rows] = await db.query('SELECT username FROM users WHERE username = ?', [username]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Inserir o novo usuário no banco de dados
        await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
