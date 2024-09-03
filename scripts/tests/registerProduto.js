const axios = require('axios');

async function testRegisterProduto() {
    try {
        const response = await axios.post('http://localhost:3000/api/register-produto', {
            idEstabelecimento: 2,
            Nome: 'Pratinho',	
            Custo: 1.5,
            Preco: 5,
            PrecoNaMaquina: 4,
            Desconto: '0%',
            Quantidade: 3,
            Ativo: true
        });
        console.log('Response: ', response.data);
    } catch(error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testRegisterProduto();