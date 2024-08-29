const axios = require('axios');

async function testRegisterEstabelecimento() {
    try {
        const response = await axios.post('http://localhost:3000/api/register-estabelecimento', {
            Nome: 'Uecefude',  
            CNPJ_CPF: '8765567', 
            TipoEstabelecimento: '99',
            Email: 'maeo@example.com',
            Senha: 'senha123',
            Endereço: 'Rua da UECE, 0'
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testRegisterEstabelecimento();
