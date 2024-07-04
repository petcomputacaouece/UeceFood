const express = require('express');

const estabelecimentoRouter = require('./routes/registerEstabelecimento.js'); // Caminho para o arquivo registerEstabelecimento.js
const funcionarioRouter = require('./routes/registerFuncionario.js'); // Caminho para o arquivo registerFuncionario
const enderecoRouter = require('./routes/registerEndereco.js'); // Caminho para o arquivo registerendereco.js
const produtoRouter = require('./routes/registerProduto.js'); // Caminho para o arquivo registerProduto.js
const vendaRouter = require('./routes/registerVenda.js'); // Caminho para o arquivo registerVenda.js
const userRouter = require('./routes/register.js'); // Caminho para o arquivo register.js
const loginRoute = require('./routes/login'); //caminho para o arquivo login.js

const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Utiliza a rotas de registro
app.use('/api', estabelecimentoRouter);
app.use('/api', userRouter);
app.use('/api', funcionarioRouter);
app.use('/api', enderecoRouter);
app.use('/api', produtoRouter);
app.use('/api', vendaRouter);
app.use('/api', loginRoute)


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
