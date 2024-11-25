const express = require("express");
const db = require('../models/db');
const jwt = require ('jsonwebtoken');

const ROTE_PATH = '/Inventario';
const router = express.Router();
const SECRET = 'secreto';




async function verifyToken(req, res, next){
    const token = req.header('x-access-token');
    jwt.verify(token, SECRET, function (err, decoded) {
        if(err) {

            return res.status(403).json({ message: 'Usuário invalidado' });
        }

        req.userId = decoded.userId;
        next();

    })
}

async function getCargoFromDB(req, res, next){

    const idFuncionario = req.userId;
    const [cargo] = await db.query('SELECT Cargo FROM funcionario WHERE id = ?', idFuncionario);

    req.userCargo = cargo[0];

    next();
}

async function getProdutosFromDB(req, res, next){

    const idFuncionario = req.userId;

    try{
            const [idEstabelecimento] = await db.query('SELECT idEstabelecimento FROM produto WHERE id = ?', idFuncionario);
            const [produtos] = await db.query('SELECT * FROM produto WHERE idEstabelecimento = ? AND Ativo = 1', idEstabelecimento[0].idEstabelecimento);

    }catch(err){

        return res.status(500).json({ message: 'Erro ao acessar Banco de dados' });

    }


    if(produtos[0].length=0){

        return res.status(200).json({ message: 'Não existe produtos registrados' });

    }

    req.produtoData = produtos[0];

    next();
}



//Mandar pro cliente os dados do inventario
router.get(ROTE_PATH,verifyToken,getProdutosFromDB, async (req, res) => {

    console.log(req.produtoData);
    res.send(req.produtoData);


});


// {Editar/Deletar}  dados de inventario
router.post(ROTE_PATH,verifyToken, getCargoFromDB, async (req, res) => {

    if(req.userCargo == 'Padrao'){
        res.status(401).json({message: 'Acesso negado'}).end();

    }


    //json com  array de dados alterados dos produtos
    //O json deve ter todos os dados do pruduto, até os dados que não vão ser alterados

    const newData = req.body;

    if(newData.Ativo == 0 ){
        res.status(200).json({message: 'Produto deletado com sucesso'}).end();
    }
    else {
        updateProduto(newData);
        res.status(200).json({message: 'Dados do Produto editados com sucesso'}).end();
    }

    async function updateProduto(infoProduto){
         db.query('UPDATE produto SET Nome = ?, Custo = ?, Preco = ?, PrecoNaMaquina = ?, Desconto = ?, Quantidade = ?  WHERE id = ?', [infoProduto.Nome, infoProduto.Custo, infoProduto.Preco, infoProduto.PrecoMaquina, infoProduto.Desconto, infoProduto.Quantidade, infoProduto.id]);

    }

    async function setProdutoInativo(infoProduto){
        db.query('UPDATE produto SET Ativo = 0 WHERE id = ?', infoProduto.id);
    }

});



module.exports = router;