const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cows'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

module.exports.connection = connection;

