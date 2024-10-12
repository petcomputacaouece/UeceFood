//Path => modulo nativo do node js
const path = require('path');
const fs = require('fs');
//Express
const express = require('express');
//Multer
const multer  = require('multer');
//Router
const router = express.Router();

//puxa funções externas de fileSystemFunctions.js (arquivo .js em um dir superior)
var fileSystemFunc = require('../fileSystem/fileSystemFunctions')
//banco de dados
const db = require('../models/db');

const ROTE_PATH = '/uploadImage';
//Caminho do dir dos arquivos
const UPLOAD_DIR = `fileSystem\\imagens`;



//configs do multer
const storage = multer.diskStorage({

    //local para salvar imagem
    //As imagens são salvas inicialmente em fileSystem\imagens , para poderem depois serem tratadas e direcionadas para seus respectivos arquivos
    destination: (reg, file, cb) => {
        //callback, Path: UPLOAD_DIR;
        cb(null, UPLOAD_DIR);
    },

    //mudar o nome do arquivo
    filename: (reg, file, cb) =>{
        //Manipular o nome do arquivo
        cb(null,Date.now() + path.extname(file.originalname));
    }

})

//Salvar config do Multer
const upload = multer({ storage: storage });

// .single() ==> Um único arquivo, .single('image') ==> 'image' é a chave de ascesso
// ao fazer um post para essa rota, deve ser usada a chave de ascesso
router.post(ROTE_PATH, upload.single('image'), async (req , res) => {


    //O sever deve receber o arquivo da imagem e o id do produto
    //O multer recebe um formdata com o arquivo e quaisquer texto junto
    //arquivos enviados para o multer ficam no req.file
    //textos ficam no req.body
    //Durante o upload o formdata enviado deve ter uma Chave com o valor ' ID ', esse valor deve conter o id do produto como String
    const id = req.body.ID;
    const file = req.file;

    //manda as imagens para o sistema
    await res.send(`Upload Feito`);
    
    //Nesse momento o arquivo esta na pasta ' fileSystem\Imagens '
    //Vamos agora mudar seu caminho para ' fileSystem\Imagens\NOME_DO_ESTABLECIMENTO '

    //get id do estabelecimento
    const info = await getEstabelecimentoID(req.body.ID);

    //Cria o Dir do estabelecimento em fileSystem\Imagens caso ele ainda não exista
    await fileSystemFunc.fileDirEstabelecimentoCreator(info);

    //altera o caminho da imagem para ' fileSystem\Imagens\NOME_DO_ESTABLECIMENTO '
    fs.renameSync(req.file.path,`${UPLOAD_DIR}\\${info}\\${req.file.filename}`);


    await verifyIfOtherImageExist(id);
    await insertToDatabase(`${UPLOAD_DIR}\\${info}\\${req.file.filename}`,req.body.ID)



    async function verifyIfOtherImageExist(id){
        const [info] = await db.query('SELECT Imagem FROM produto WHERE id = ?', id);
        if (info[0].Imagem === null){
            return;
        }
        await fs.unlink(`${info[0].Imagem}`,(err => {
            if (err) console.log(err);
            else {
                console.log(`Arquivo Deletado: ${info[0].Imagem}`);
            }
        }))

    }
    //Recebe o nome do estabelecimento
    async function getEstabelecimentoID(id){
        const [info] = await db.query('SELECT Nome, idEstabelecimento FROM produto WHERE id = ?', id);
        const [info2] = await db.query('SELECT Nome FROM Estabelecimento WHERE id = ?', info[0].idEstabelecimento);


        return info2[0].Nome
    }

    //insere o caminho da imagem para o banco de dados
    async function insertToDatabase(path,id){
        try{
            await db.query('UPDATE produto SET Imagem = ? WHERE id = ?', [path,id]);
        }catch(err){
            console.log(err) //ajetar dps
        }
    }




});

module.exports = router;

//A fazer:
//Tratamento de Erros
