const axios = require('axios');

async function testRegisterEstabelecimento() {
    try {
        const response = await axios.post('http://localhost:3000/api/register-estabelecimento', {
            Nome: 'Meu Estabelecimento',
            CNPJ_CPF: '12345678901234', // Substitua pelo CNPJ ou CPF válido
            TipoEstabelecimento: 'Restaurante',
            Email: 'meuestabelecimento@example.com',
            Senha: 'senha123'
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testRegisterEstabelecimento();
