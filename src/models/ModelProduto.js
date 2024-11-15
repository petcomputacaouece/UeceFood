const { DataTypes } = require('sequelize');
const sequelize = require('../config/DbConfig'); // Ajuste o caminho conforme necessário

const Produto = sequelize.define('Produto', {
  idProduto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING(255), // URL ou caminho da imagem
  },
});

module.exports = Produto;