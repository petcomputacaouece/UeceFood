const express = require('express');
const fileSystemFunc = require('./fileSystem/fileSystemFunctions')

const uploadImageRoute = require('./routes/uploadImagem');//

const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());


// Utiliza a rotas de registro
app.use('/api', uploadImageRoute);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


//verifica os arquivos do fileSystem, por via de teste pode apagar o caminho e fileSystemm e rodar o sever.js que vao ser criados dnv
fileSystemFunc.fileSystemVerify();