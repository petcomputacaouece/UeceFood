const express = require('express');
const db = require('../models/db');

const router = express.Router();

router.post('/register-venda', async (req, res) => {
    try {
        const { idProduto, idFuncionario, idEstabelecimento, ValorTotal, FormaDePagamento, DataHoraVenda } = req.body;

        await verificarIds(idProduto, idFuncionario, idEstabelecimento);
        await verificarRelacionamentos(idProduto, idFuncionario, idEstabelecimento);

        await db.query(
            'INSERT INTO Venda (idProduto, idFuncionario, idEstabelecimento, ValorTotal, FormaDePagamento, DataHoraVenda) VALUES (?, ?, ?, ?, ?, ?)',
            [idProduto, idFuncionario, idEstabelecimento, ValorTotal, FormaDePagamento, DataHoraVenda]
        );

        res.status(201).json({ message: 'Venda registrada com sucesso' });
    } catch (error) {
        if(error.message === 'Validations error(s)') {
            return res.status(400).json({ message: error.messages });
        }
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});

async function verificarIds(idProduto, idFuncionario, idEstabelecimento) {
    const errors = [];
    const queries = [
        db.query('SELECT id FROM Produto WHERE id = ?', [idProduto]),
        db.query('SELECT id FROM Funcionario WHERE id = ?', [idFuncionario]),
        db.query('SELECT id FROM Estabelecimento WHERE id = ?', [idEstabelecimento])
    ];
    
    const [resultProduto, resultFuncionario, resultEstabelecimento] = await Promise.all(queries);

    if(resultProduto[0].length === 0) {
        errors.push('Produto não encontrado');	
    }

    if(resultFuncionario[0].length === 0) {
        errors.push('Funcionário não encontrado');
    }  

    if(resultEstabelecimento[0].length === 0) {
        errors.push('Estabelecimento não encontrado');
    }  

    if(errors.length > 0) {
        const error = new Error('Validations error(s)');
        error.messages = errors;
        throw error;
    }
}

async function verificarRelacionamentos(idProduto, idFuncionario, idEstabelecimento) {
    const errors = [];
    const queries = [
        db.query('SELECT id FROM Produto WHERE id = ? AND idEstabelecimento = ?', [idProduto, idEstabelecimento]),
        db.query('SELECT id FROM Funcionario WHERE id = ? AND idEstabelecimento = ?', [idFuncionario, idEstabelecimento])
    ];
    
    const [resultProduto, resultFuncionario] = await Promise.all(queries);

    if(resultProduto[0].length === 0) {
        errors.push('Estabelecimento não possui o produto informado');	
    }

    if(resultFuncionario[0].length === 0) {
        errors.push('Funcionário não pertence ao estabelecimento informado');
    }  

    if(errors.length > 0) {
        const error = new Error('Validations error(s)');
        error.messages = errors;
        throw error;
    }
}

module.exports = router;
