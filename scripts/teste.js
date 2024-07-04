const axios = require('axios');

async function testRegisterEstabelecimento() {
    try {
        const response = await axios.post('http://localhost:3000/api/register-estabelecimento', {
            Nome: 'Uecefude',
            CNPJ_CPF: '8765', // Substitua pelo CNPJ ou CPF válido
            TipoEstabelecimento: '99',
            Email: 'meo@example.com',
            Senha: 'senha123'
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testRegisterEstabelecimento();
