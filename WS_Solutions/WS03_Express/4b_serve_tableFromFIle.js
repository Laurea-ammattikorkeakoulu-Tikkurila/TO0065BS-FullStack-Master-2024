var express = require('express');
var fs = require('fs');
var app = express();
const port = 30044

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/public/index.html');
   console.log("Polku: " + __dirname);
});

app.get('/details', function (req, res) {

   var data = require(__dirname + '/data/exampledata2.json');

   var results = '<table border="1"> ';

   for (var i = 0; i < data.length; i++) {
      results +=
         '<tr>' +
         '<td>' + data[i].Name + '</td>' +
         '<td>' + data[i].Email + '</td>' +
         '</tr>';
   }

   res.send(results);
});

app.listen(port, function () {
   console.log('Example app listening on port: ' + port);
});
