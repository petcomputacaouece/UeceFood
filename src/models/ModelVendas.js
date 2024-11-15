// models/salesModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Conexão com o banco de dados

const Sale = sequelize.define('Sale', {
    dataVenda: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'data_venda'
    },
    valorVenda: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'valor_venda'
    },
    produtosVendidos: {
        type: DataTypes.JSON, // Armazena a lista de produtos vendidos em formato JSON
        allowNull: false,
        field: 'produtos_vendidos'
    },
    formaPagamento: {
        type: DataTypes.ENUM('dinheiro', 'cartão', 'pix', 'outro'), // Limita as opções de forma de pagamento
        allowNull: false,
        field: 'forma_pagamento'
    },
    vendedorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Vendedores', // Tabela de vendedores
            key: 'id'
        },
        field: 'vendedor_id'
    },
    estabelecimentoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Estabelecimentos', // Tabela de estabelecimentos
            key: 'id'
        },
        field: 'estabelecimento_id'
    }
}, {
    tableName: 'vendas', // Nome da tabela no banco de dados
    timestamps: false // Se você não quiser usar os campos createdAt e updatedAt
});

module.exports = Sale;
