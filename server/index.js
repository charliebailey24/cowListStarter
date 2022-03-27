const express = require('express');
const db = require('../database/mysql/index.js');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/api/cows', (req, res) => {
  var query = 'SELECT * FROM cowlist';
  db.connection.query(query, function(err, results) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

app.post('/api/cows', (req, res) => {
  var { name, description } = req.body;
  var query = 'INSERT INTO cowlist VALUES (null, ?, ?)';
  var queryArgs = [name, description];
  db.connection.query(query, queryArgs, function(err, results) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(results);
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
