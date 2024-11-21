const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const { id, name, email, role } = user;
    const token = jwt.sign(
        { id, name, email, role },
        'seu-segredo-jwt',
        { expiresIn: '1h' }  // Access token expira em 1h
    );
    return token;
};

const generateRefreshToken = (user) => {
    const { id, name, email, role } = user;
    const refreshToken = jwt.sign(
        { id, name, email, role },
        'seu-segredo-refresh-jwt',  // Segredo para o refresh token
        { expiresIn: '7d' }  // Refresh token expira em 7 dias
    );
    return refreshToken;
};

const verifyToken = (token) => {
    return jwt.verify(token, 'seu-segredo-jwt');
};

const verifyRefreshToken = (refreshToken) => {
    return jwt.verify(refreshToken, 'seu-segredo-refresh-jwt');
};

module.exports = { generateToken, generateRefreshToken, verifyToken, verifyRefreshToken };
