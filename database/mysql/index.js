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

// connection.query('select * from cowlist', function(err, results) {
//   console.log('results:::', results);
// });


module.exports.connection = connection;

// Don't forget to export your functions!
// module.exports = {

// };
