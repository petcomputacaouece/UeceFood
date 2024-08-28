const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');

const router = express.Router();


router.post('/login', async (req, res) => {
    try {
        const { Email, Senha } = req.body;
        console.log("email: ",Email);

        const user = await verificarExistenciaUsuario(Email);
        await verificarSenha(Senha, user);
        res.status(200).json({ message: 'Login bem-sucedido' });

    } catch (error) {
        if (error.message === 'Usuário não encontrado' || error.message === 'Senha incorreta') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

async function verificarExistenciaUsuario(Email) {
    const [rows] = await db.query('SELECT * FROM Estabelecimento WHERE Email = ?', [Email]);

    if(rows.length === 0) {
        throw new Error('Usuário não encontrado');
    } 

    return rows[0];
}

async function verificarSenha(Senha, User) {
    const isMatch = await bcrypt.compare(Senha, User.Senha);
    if (!isMatch) {
        throw new Error('Senha incorreta');
    }
}

module.exports = router;
