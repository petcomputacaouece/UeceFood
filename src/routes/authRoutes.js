const express = require('express');
const router = express.Router();

const loginController = require('../controllers/auth/loginController');
const registerController = require('../controllers/auth/registerController');
const passwordRecoveryController = require('../controllers/auth/passwordRecoveryController');

router.post('/register', registerController.register); // Registro
router.post('/login', loginController.login);         // Login
router.post('/password-recovery', passwordRecoveryController.requestPasswordRecovery); // Solicitar recuperação
router.post('/reset-password', passwordRecoveryController.resetPassword); // Redefinir senha

module.exports = router;
