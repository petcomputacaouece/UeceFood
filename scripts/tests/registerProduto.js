const axios = require('axios');

async function testRegisterProduto() {
    try {
        const response = await axios.post('http://localhost:3000/api/register-produto', {
            idEstabelecimento: 30,
            Nome: 'Coca-Cola',
            Custo: 2.5,
            Preco: 5,
            PrecoNaMaquina: 4,
            Desconto: '10%',
            Quantidade: 100,
            Ativo: true
        });
        console.log('Response: ', response.data);
    } catch(error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testRegisterProduto();