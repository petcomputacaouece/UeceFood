const axios = require('axios');

async function login(){
    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            Email:"Email", 
            Senha:"123"
      });
      console.log('Response:', response.data);

      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
}
}

login();
