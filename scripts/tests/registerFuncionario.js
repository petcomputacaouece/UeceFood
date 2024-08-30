const axios = require('axios');

async function testRegisterFuncionario() {
    try {
        const response = await axios.post('http://localhost:3000/api/register-funcionario', {
            idEstabelecimento: 1,
            Nome: 'Funcionario1',
            Email: 'joaozin@gmail.com',
            Senha: 'senha123',
            Ativo: true
        });
        console.log('Response: ', response.data);
    } catch(error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testRegisterFuncionario();