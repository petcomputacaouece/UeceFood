// services/passwordRecoveryService.js
const { generateToken, verifyToken } = require('./authService');
const User = require('../models/userModel');
const sendEmail = require('../utils/emailSender'); // Função para enviar e-mails

const requestPasswordReset = async (email) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Usuário não encontrado');
    }

    const token = generateToken(user.email);
    const resetLink = `https://seu-app.com/reset-password?token=${token}`;

    // Envie o e-mail de recuperação
    await sendEmail(user.email, 'Recuperação de Senha', `Clique no link para redefinir sua senha: ${resetLink}`);

    return { message: 'E-mail enviado' };
};

const resetPassword = async (token, newPassword) => {
    const decoded = verifyToken(token);
    const user = await User.findOne({ where: { email: decoded.email } });
    if (!user) {
        throw new Error('Usuário não encontrado');
    }

    user.password = newPassword; // Certifique-se de hash da senha
    await user.save();

    return { message: 'Senha alterada com sucesso' };
};

module.exports = { requestPasswordReset, resetPassword };
