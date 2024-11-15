const { Sequelize } = require('sequelize');

// Configuração da conexão
const sequelize = new Sequelize('PETaí', 'root', 'ca141200', {
  host: 'localhost', // ou o endereço do seu servidor MySQL
  dialect: 'mysql',  // pode ser 'mysql', 'sqlite', 'postgres', 'mssql'
  logging: false,    // defina como true se quiser ver os logs das queries
});

const testarConexao = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
};

testarConexao();

module.exports = sequelize;