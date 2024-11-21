// services/registerService.js
const bcrypt = require('bcrypt');
const User = require('../models/User');

const createUser = async (userData) => {
    const { cpf, email, senha } = userData;

    // Verifica se o CPF ou o email já estão cadastrados
    const existingUser = await User.findOne({
        where: {
            [Op.or]: [{ cpf }, { email }]
        }
    });

    if (existingUser) {
        throw new Error('CPF ou email já cadastrado');
    }

    // Hash da senha para segurança
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Cria o novo usuário
    const newUser = await User.create({
        ...userData,
        senha: hashedPassword // Armazena a senha criptografada
    });

    return {
        id: newUser.id,
        nome: newUser.nome,
        email: newUser.email,
        estabelecimento: newUser.estabelecimento,
        cargo: newUser.cargo
    };
};

module.exports = { createUser };
