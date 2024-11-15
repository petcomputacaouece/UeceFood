// services/authService.js
const jwt = require('jsonwebtoken');

const generateToken = (email) => {
    const token = jwt.sign({ email }, 'seu-segredo-jwt', { expiresIn: '1h' });
    return token;
};

const verifyToken = (token) => {
    return jwt.verify(token, 'seu-segredo-jwt');
};

module.exports = { generateToken, verifyToken };
