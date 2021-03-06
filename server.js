var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg').Pool;
var config ={
User: 'bablooyerram',
Database: 'bablooyerram',
host: 'db-imad.hasura-app.io',
port: '5432',
Password: process.env.db-bablooyerram-13997
};
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var pool=new pool(config);
app.get('/:article', function (req, res) {
    pool.query("SELECT* FROM article WHERE id = "+req.params.article, function(err, result)
    {
        if(err)
        { res.status(500).send(err.toString());
        }
        else {
            if (result.rows.length===0){
                res.status(400).send("article not found");
            }else{ var articled=result.rows[0];
            res.send(createTemplate(articled));
            }
        }
    });
});
    var articletemp});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
