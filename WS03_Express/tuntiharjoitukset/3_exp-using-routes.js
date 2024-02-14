
var express = require('express');
var app = express();
const port = 3003;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/list', function (req, res) {
  res.send('Listing data from a file!');
});

app.get('/add', function (req, res) {
  res.send('Lets try to add some data to a file!');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
  res.send('Cant find the requested page', 404);
});

app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});
