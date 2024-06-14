const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');

const router = express.Router();

router.post('/register-estabelecimento', async (req, res) => {
    try {
        const { Nome, CNPJ_CPF, TipoEstabelecimento, Email, Senha } = req.body;

        // Verificar se o CNPJ/CPF ou Email já estão registrados
        const [rowsCNPJ] = await db.query('SELECT CNPJ_CPF FROM Estabelecimento WHERE CNPJ_CPF = ?', [CNPJ_CPF]);
        if (rowsCNPJ.length > 0) {
            return res.status(400).json({ message: 'CNPJ/CPF já está registrado' });
        }

        const [rowsEmail] = await db.query('SELECT Email FROM Estabelecimento WHERE Email = ?', [Email]);
        if (rowsEmail.length > 0) {
            return res.status(400).json({ message: 'Email já está registrado' });
        }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(Senha, 10);

        // Inserir o novo estabelecimento no banco de dados
        await db.query('INSERT INTO Estabelecimento (Nome, CNPJ_CPF, TipoEstabelecimento, Email, Senha) VALUES (?, ?, ?, ?, ?)', 
                       [Nome, CNPJ_CPF, TipoEstabelecimento, Email, hashedPassword]);

        res.status(201).json({ message: 'Estabelecimento registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
