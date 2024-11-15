const { DataTypes } = require('sequelize');
const sequelize = require('../config/DbConfig'); // Ajuste o caminho conforme necessário

const Estabelecimento = sequelize.define('Estabelecimento', {
  idEstabelecimento: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING(14),
    unique: true,
    allowNull: false,
  },
  ramoDeAtuacao: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

// Relacionamento com a tabela Endereço
Estabelecimento.belongsTo(EnderecoEstabelecimento, { foreignKey: 'idEndereco' });

module.exports = Estabelecimento;
