const fs = require('fs');
const path = require('path');

//exporta funçoes relacionadas a arquivos
module.exports = {
    //verifica o sistema de arquivos, caso algum diretorio n exista, cria ele
    fileSystemVerify :  async function (){
        var files = new Array();

        // add o diretorio no array para ele ser verificado
        files = ['fileSystem', 'fileSystem\\Imagens'];


        for (const i in files) {
//verifica se os caminhos existem, se não, cria o caminho que não existe
            fs.access(files[i], fs.constants.F_OK,  async function  (err){
                if (err) {
                    console.log(`Arquivo ${files[i]} nao existe`);
                    fs.promises.mkdir(files[i]);
                }

            })
        }
    },

    //Cria o dir do estabelecimento
    fileDirEstabelecimentoCreator :  async function (estabeleciimento){

        //caso o Dir já exista o código não para
        try {
            //cria o dir
            fs.promises.mkdir('fileSystem\\Imagens\\'+estabeleciimento);
            //observa o dir superior e espera até que o dir seja criado, evita que o código use o dir sem que ele esteja criado
            await fs.watch('fileSystem\\Imagens', (eventType, fileName) => {

                console.log(`Arquivo ${fileName} foi modificado`)
                console.log(`Modificaçao: ${eventType}`)
            })
            console.log('diretorio criado');
        }catch(err){
            console.log('Nao foi possivel criar o arquivo: ' + err);
        }
    }
};