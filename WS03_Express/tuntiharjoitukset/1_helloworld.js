
var express = require('express');
var app = express();
const port = 3001

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});