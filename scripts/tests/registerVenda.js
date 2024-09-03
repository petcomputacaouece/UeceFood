const axios = require('axios');

async function testRegisterVenda() {
    try {
        const response = await axios.post('http://localhost:3000/api/register-venda', {
            idProduto: 2,
            idFuncionario: 1,
            idEstabelecimento: 2,
            ValorTotal: 10.00,
            FormaDePagamento: 'Dinheiro',
            DataHoraVenda: '2021-07-10 22:00:00'
        });
        console.log('Response: ', response.data);
    } catch(error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testRegisterVenda();