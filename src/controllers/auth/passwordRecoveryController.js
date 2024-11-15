// controllers/passwordRecoveryController.js
const { requestPasswordReset, resetPassword } = require('../services/passwordRecoveryService');

const sendPasswordResetEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await requestPasswordReset(email);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const resetUserPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        const result = await resetPassword(token, newPassword);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { sendPasswordResetEmail, resetUserPassword };
