const axios = require('axios');
const path = require('path');
const FormData = require('form-data')
const fs = require('fs')
//const {response} = require("express");
const express = require("express");


const URL = 'http://localhost:3000/api/uploadImage';

//Arquivo selecionado para upload
//PARA TESTE  MUDE O ' CAMINHO_DO_ARQUIVO ' para um caminho de arquivo em sua maquina.
const FILE_PATH = 'CAMINHO_DO_ARQUIVO';
//nome do estabelecimento logado
//O nome do estabelcimento é enviado junto a imagem => req.body => texto
const ESTB_NAME = 'ESTABELECIMENTO_TESTE'




async function upload(){

    //Pega o tipo do arquivo ( os ultimos char dps do ultimo '.' )
    const FILE_TYPE = FILE_PATH.substring(FILE_PATH.length, FILE_PATH.lastIndexOf('.'));
    console.log(FILE_TYPE);

    try {
        //axios manda um formdata com o arquivo
        const data = new FormData;
        const fileReadableString = fs.readFileSync(FILE_PATH);
        // ( CHAVE DE ASCESSO DO MULTER, ARQUIVO NA FORMA DE UMA STRING LEGÍVEL [readableString], NOME DO FORMDATA + TIPO DO ARQUIVO)
        data.append('image', fileReadableString, 'image' + FILE_TYPE);
        //data.append(data,ESTB_NAME);
        console.log(data);
        //Juntar no formdata o texto do nome do estabelecimento
        data.append('text', ESTB_NAME)

        //POST
        await axios.post(URL, data ,{
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