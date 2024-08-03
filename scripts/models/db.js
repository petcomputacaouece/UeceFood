const mysql = require('mysql2');

// Criação da conexão com o banco de dados MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'uece_food_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
