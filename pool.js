const mysql = require('mysql');
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'qiannv',
  connectionLimit: 10 
});

module.exports = pool;



