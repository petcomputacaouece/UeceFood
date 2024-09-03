const axios = require('axios');

async function testLoginEstabelecimento(){
    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            Email:"meo@example.com", 
            Senha:"senha123"
      });
      console.log('Response:', response.data);

      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
}
}

testLoginEstabelecimento();
