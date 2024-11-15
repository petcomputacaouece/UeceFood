const { DataTypes } = require('sequelize');
const sequelize = require('../config/DbConfig'); // Ajuste o caminho conforme necessário

const EnderecoFuncionario = sequelize.define('EnderecoFuncionario', {
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

// Relacionamento com a tabela Funcionário
EnderecoFuncionario.hasOne(Funcionario, { foreignKey: 'idEndereco' });

module.exports = EnderecoFuncionario;
