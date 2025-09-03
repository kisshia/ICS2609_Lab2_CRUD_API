const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'ics_kisshiadejesus',
  password: process.env.DB_PASS || 'Jankisshia08182005',
  database: process.env.DB_NAME || 'lab_crud'
});

connection.connect(err => {
  if (err) {
    console.error('❌ DB connection failed:', err.message);
    return;
  }
  console.log('✅ MySQL connected');
});

module.exports = connection;