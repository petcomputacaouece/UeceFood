const { DataTypes } = require('sequelize');
const sequelize = require('../config/DbConfig'); // Ajuste o caminho conforme necessário

const EnderecoEstabelecimento = sequelize.define('EnderecoEstabelecimento', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cidade: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  rua: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

// Relacionamento com a tabela Estabelecimento
EnderecoEstabelecimento.hasOne(Estabelecimento, { foreignKey: 'idEndereco' });

module.exports = EnderecoEstabelecimento;
