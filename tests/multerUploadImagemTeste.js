const axios = require('axios');
const path = require('path');
const FormData = require('form-data')
const fs = require('fs')
//const {response} = require("express");
const express = require("express");


const URL = 'http://localhost:3000/api/uploadImage';

//Arquivo selecionado para upload
//PARA TESTE  MUDE O ' CAMINHO_DO_ARQUIVO ' para um caminho de arquivo em sua maquina, esta é a imagem usada para o upload
const FILE_PATH = ' CAMINHO_DO_ARQUIVO ';
//O id do produto é enviado junto a imagem => req.body => texto
//todas essas informações são enviadas dentro do formdata
//Mude 'PRODUTO_ID' para o id do produto que vai ser posto a imagem
const PRODUT_ID = '1'




async function upload(){

    //Pega o tipo do arquivo ( os ultimos char dps do ultimo '.' )
    const FILE_TYPE = FILE_PATH.substring(FILE_PATH.length, FILE_PATH.lastIndexOf('.'));
    console.log(FILE_TYPE);

    try {
        //O multer recebe um formdata com o arquivo e quaisquer texto junto
        //arquivos enviados para o multer ficam no req.file
        //textos ficam no req.body
        const data = new FormData;
        const fileReadableString = fs.readFileSync(FILE_PATH);

        data.append('image', fileReadableString, 'image' + FILE_TYPE);
        data.append('ID', PRODUT_ID);

        //POST
        //Post com multer é bem chatim, toda a informação deve ser agrupada em um formdata e enviada
        await axios.post(URL, data ,{
            //configurações para enviar formdata
            headers : {
                'Content-Type': "multipart/form-data"
            }
        })
            .then(res => console.log(res));

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

upload()