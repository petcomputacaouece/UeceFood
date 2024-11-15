const jwt = require('jsonwebtoken');  // Importa a biblioteca JWT para verificar e decodificar o token

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
    // Tenta obter o token do cabeçalho Authorization
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        // Se não houver token no cabeçalho, retorna um erro de token não fornecido
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        // Verifica e decodifica o token usando a chave secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Adiciona as informações do usuário decodificadas ao objeto req.user
        req.user = decoded;

        // Chama o próximo middleware ou controller
        next();
    } catch (error) {
        // Se houver algum erro ao verificar o token, retorna um erro de token inválido
        res.status(403).json({ message: 'Token inválido ou expirado' });
    }
};

module.exports = authMiddleware;  // Exporta o middleware para ser usado em outras partes da aplicação
