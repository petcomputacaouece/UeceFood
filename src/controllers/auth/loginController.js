const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/authService');
const User = require('../models/userModel');

// Função de login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await User.findOne({ where: { email } });

      if (!user || user.password !== password) {
          return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      // Gera os tokens (access token e refresh token)
      const accessToken = authService.generateToken(user);
      const refreshToken = authService.generateRefreshToken(user);

      // Armazene o refresh token no banco de dados ou em um armazenamento seguro
      // Exemplo: await user.update({ refreshToken });

      res.status(200).json({
          accessToken,
          refreshToken
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

// Função para renovar o access token usando o refresh token
const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token não fornecido' });
  }

  try {
      // Verifica a validade do refresh token
      const decoded = authService.verifyRefreshToken(refreshToken);

      // Verifica se o refresh token corresponde ao do banco de dados
      // Exemplo: const user = await User.findOne({ where: { id: decoded.id, refreshToken } });
      
      const user = await User.findOne({ where: { id: decoded.id } });

      if (!user) {
          return res.status(403).json({ message: 'Token inválido' });
      }

      // Gera um novo access token
      const newAccessToken = authService.generateToken(user);
      
      res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
      res.status(403).json({ message: 'Refresh token inválido' });
  }
};

module.exports = { login, refreshToken };
