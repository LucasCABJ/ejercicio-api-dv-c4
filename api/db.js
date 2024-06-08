const mysql = require('mysql2/promise');

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'usuario',
  password: '',
  database: 'api_musica',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
