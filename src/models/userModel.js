// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Conexão com o banco de dados

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estabelecimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.ENUM('vendedor', 'supervisor', 'analista', 'gerente'),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users', // Nome da tabela no banco de dados
    timestamps: true,   // Cria automaticamente os campos createdAt e updatedAt
});

module.exports = User;
