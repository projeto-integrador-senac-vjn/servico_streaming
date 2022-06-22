const express = require('express')
const app = express()
const port = 3001

app.use(express.json());
app.use(function(req,res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next()
})

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '58599769-Xx',
  database : 'servico_streaming',
  port: 3306
});

app.get('/comentarios', (req, res) => {

 
    connection.query('SELECT * FROM comentario where id_filmes = "555"', function (error, results, fields) {
      if (error) throw error;
      res.send( results );
    });
     

})

app.get('/favoritos', (req, res) => {

 
    connection.query('SELECT * FROM favoritos', function (error, results, fields) {
      if (error) throw error;
      res.send( results );
    });
     

})

app.get('/curtidos', (req, res) => {

 
    connection.query('SELECT * FROM curtidos', function (error, results, fields) {
      if (error) throw error;
      res.send( results );
    });
     

})

app.get('/usuarios', (req, res) => {

 
    connection.query('SELECT * FROM usuario', function (error, results, fields) {
      if (error) throw error;
      res.send( results );
    });
     

})
