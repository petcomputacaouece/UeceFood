//Path => modulo nativo do node js
const path = require('path');
const fs = require('fs');
//Express
const express = require('express');
//Multer
const multer  = require('multer');
//Router
const router = express.Router();
const ROTE_PATH = '/uploadImage';

//Banco de Dados
const db = require('../models/db');


//Config do Caminho do dir dos arquivos
const UPLOAD_DIR = `fileSystem\\imagens`;



//configs do multer
const storage = multer.diskStorage({

    //local para salvar imagem
    //As imagens são salvas inicialmente em fileSystem\imagens , para poderem depois serem tratadas e direcionadas para seus respectivos caminhos
    destination: (reg, file, cb) => {
        cb(null, UPLOAD_DIR);
    },

    //manipula o nome do arquivo
    filename: (reg, file, cb) =>{
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
    //Arquivo multerUploadImagemTeste.js exemplifica um post

    const id = req.body.ID;
    const file = req.file;
    await res.send(`Upload Feito`);
    
    //Nesse momento o arquivo esta na pasta ' fileSystem\Imagens ' :  <UPLOAD_DIR>
    //Vamos agora mudar seu caminho para ' fileSystem\Imagens\NOME_DO_ESTABLECIMENTO '

    const info = await getEstabelecimentoName(id);

    //Cria o Dir do estabelecimento em fileSystem\Imagens caso ele ainda não exista
    await fileDirEstabelecimentoCreator(info);

    //altera o caminho da imagem para ' fileSystem\Imagens\<NOME_DO_ESTABLECIMENTO> '
    fs.renameSync(file.path,`${UPLOAD_DIR}\\${info}\\${file.filename}`);


    await deleteOtherImageIfAny(id);
    await insertToDatabase(`${UPLOAD_DIR}\\${info}\\${file.filename}`,req.body.ID);




    async function deleteOtherImageIfAny(id){
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
    async function getEstabelecimentoName(id){
        const [produtoData] = await db.query('SELECT Nome, idEstabelecimento FROM produto WHERE id = ?', id);
        const [estabilecimentoData] = await db.query('SELECT Nome FROM Estabelecimento WHERE id = ?', produtoData[0].idEstabelecimento);


        return estabilecimentoData[0].Nome
    }

    //insere o caminho da imagem para o banco de dados
    async function insertToDatabase(path,id){
        try{
            await db.query('UPDATE produto SET Imagem = ? WHERE id = ?', [path,id]);
        }catch(err){
            console.log(err) //ajetar dps
        }
    }

    async function fileDirEstabelecimentoCreator(estabelecimentoName){

        //caso o Dir já exista o código não para
        try {
            await fs.promises.mkdir('fileSystem\\Imagens\\'+estabelecimentoName);
            //observa o dir a cima e espera até que o dir seja criado, evita que o código use o dir sem que ele esteja criado
            await fs.watch('fileSystem\\Imagens', (eventType, fileName) => {

                console.log(`Arquivo ${fileName} foi modificado`)
                console.log(`Modificaçao: ${eventType}`)
            })
            console.log('diretorio criado');
        }catch(err){
            console.log('Nao foi possivel criar o arquivo: ' + err);
        }
    }




});

module.exports = router;
