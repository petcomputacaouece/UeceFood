const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');

const router = express.Router();


router.post('/login', async (req, res) => {
    try {
        const { Email, Senha } = req.body;
        console.log("email: ",Email);

        // Verificar se o usuário existe
        const [rows] = await db.query('SELECT * FROM Estabelecimento WHERE Email = ?', [Email]);
        console.log("email: ",Email);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        const user = rows[0];

        // Comparar a senha fornecida com a senha hash armazenada
        const isMatch = await bcrypt.compare(Senha, user.Senha);
        if (!isMatch) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        res.status(200).json({ message: 'Login bem-sucedido' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
