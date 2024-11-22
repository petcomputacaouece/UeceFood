const express = require("express");
const db = require('../models/db');
const jwt = require ('jsonwebtoken');

const ROTE_PATH = '/Inventario';
const router = express.Router();
const SECRET = 'secreto';

function verifyJWT(req, res, next){
    const token = req.header('x-access-token');
    jwt.verify(token, SECRET, function (err, decoded) {
        if(err) {

            return res.status(401).end();
        }
        req.userId = decoded.userId;
        console.log(decoded.userId);
        next();

    })
}


//Mandar pro cliente os dados do inventario
router.get(ROTE_PATH,verifyJWT, async (req, res) => {

    const idFuncionario = req.userId;
    //res.send( await getProdutosFromDB(idFuncionario));

    const data = await getProdutosFromDB(idFuncionario);
    console.log(data);
    res.send(data);

    async function getProdutosFromDB(idFuncionario){

        const [idEstabelecimento] = await db.query('SELECT idEstabelecimento FROM produto WHERE id = ?', idFuncionario);
        const [produtos] = await db.query('SELECT * FROM produto WHERE idEstabelecimento = ? AND Ativo = 1', idEstabelecimento[0].idEstabelecimento);

        return produtos;
    }

});


//Editar dados de inventario
router.post(ROTE_PATH, verifyJWT, async (req, res) => {

    //json com  array de dados alterados dos produtos
    //O json deve ter todos os dados do pruduto, até os dados que não vão ser alterados
    const newData = req.body;

    console.log(newData);

    if(newData.Ativo == 0 ){
        setProdutoInativo(newData);
    }
    else {
        updateProduto(newData);
    }

    res.status(200).end();


    async function updateProduto(infoProduto){
         db.query('UPDATE produto SET Nome = ?, Custo = ?, Preco = ?, PrecoNaMaquina = ?, Desconto = ?, Quantidade = ?  WHERE id = ?', [infoProduto.Nome, infoProduto.Custo, infoProduto.Preco, infoProduto.PrecoMaquina, infoProduto.Desconto, infoProduto.Quantidade, infoProduto.id]);

    }


    async function setProdutoInativo(infoProduto){
        db.query('UPDATE produto SET Ativo = 0 WHERE id = ?', infoProduto.id);
    }
});

module.exports = router;