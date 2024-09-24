//Path => modulo nativo do node js
const path = require('path');
const fs = require('fs');
//Express
const express = require('express');
//Multer
const multer  = require('multer');
//Router
const router = express.Router();

var fileSystemFunc = require('./../fileSystemFunctions')


const ROTE_PATH = '/uploadImage';
//Caminho do dir dos arquivos
const UPLOAD_DIR = `fileSystem\\imagens`;



//configs do multer
const storage = multer.diskStorage({

    //local para salvar imagem
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
router.post(ROTE_PATH, upload.single('image'), async (req , res) => {


    //O sever deve receber o arquivo da imagem e o nome do estabelecimnto logado
    //O Multer recebe os arquivos sempre no req.file, no req.body é recebido quaisquer texto enviado junto ao arquivo
    console.log(req.file);
    console.log(req.body.text);


    //As config do dir pelo multer ocorrem antes do post
    //Nesse momento o arquivo esta na pasta ' fileSystem\Imagens '
    //Vamos agora mudar seu caminho para ' fileSystem\Imagens\NOME_DO_ESTABLECIMENTO '


    await res.send(`teste sucesso`);

    //Cria o Dir do estabelecimento em fileSystem\Imagens caso ele ainda não exista
    await fileSystemFunc.fileDirEstabelecimentoCreator(req.body.text);

    //altera o caminho da imagem para ' fileSystem\Imagens\NOME_DO_ESTABLECIMENTO '
    console.log(`${UPLOAD_DIR}\\${req.body.text}\\${req.file.filename}`)
    fs.renameSync(req.file.path,`${UPLOAD_DIR}\\${req.body.text}\\${req.file.filename}`)


});

module.exports = router;

//A fazer:
//Implementação com bancos de dados
//Limitar usuário a dar upload apenas de arquivos  de  imagens /  tratar erros caso o arquivo n seja .png .jpeg etc etc