const { DataTypes } = require('sequelize');
const sequelize = require('../config/DbConfig'); // Ajuste o caminho conforme necessário

const Funcionario = sequelize.define('Funcionario', {
  idFuncionario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(11),
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  nivelDeAcesso: {
    type: DataTypes.ENUM('vendedor', 'supervisor', 'analista', 'gerente'),
    allowNull: false,
  },
});

// Relacionamento com a tabela Endereço
Funcionario.belongsTo(EnderecoFuncionario, { foreignKey: 'idEndereco' });

module.exports = Funcionario;
