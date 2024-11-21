// controllers/registerController.js
const registerService = require('../services/registerService');

const registerUser = async (req, res) => {
    try {
        const { nome, cpf, dataNascimento, id, endereco, estabelecimento, cargo, email, senha } = req.body;

        if (!nome || !cpf || !dataNascimento || !id || !endereco || !estabelecimento || !cargo || !email || !senha) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        const result = await registerService.createUser({
            nome,
            cpf,
            dataNascimento,
            id,
            endereco,
            estabelecimento,
            cargo,
            email,
            senha
        });

        return res.status(201).json({ message: 'Usuário registrado com sucesso', user: result });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar o usuário', error: error.message });
    }
};

module.exports = { registerUser };
