var express = require('express');
var fs = require('fs');
var app = express();
const port = 3006;

// Serve static files from the "public" directory
app.use(express.static('/public'));

//Serving a static file instead of a written message
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Listing user data from a file!
app.get('/list', function (req, res) {
  // Read file with some data and display to the user
  res.sendFile(__dirname + "/data/exampledata.txt");
});

// Send out the entire raw data
app.get('/jsondata', function (req, res) {
  var data = require(__dirname + '/data/exampledata2.json');
  res.json(data);
});

// Or we can parse out the details

app.get('/details', function (req, res) {
  var data = require(__dirname + '/data/exampledata2.json');

  // Parse the results into a variabke
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

// Add data
app.get('/add', function (req, res) {

  // Load the existing data from a file
  var data = require(__dirname + '/data/exampledata2.json');

  // Create a new JSON object and add it to the existing data variable
  data.push({
    "Name": "Jaska Jokunen",
    "Company": "Laurea",
    "Email": "jaska@laurea.fi",
    "Date": "30/3/2016 \r\n"
  });

  // Convert the JSON object to a string format with pretty print
  var jsonStr = JSON.stringify(data, null, 4);

  // Write data to a file
  fs.writeFile(__dirname + '/data/exampledata2.json', jsonStr, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });

  res.send("Saved the data to a file. Browse to the /details to see the contents of the file");
});

// Serve a form to the user
app.get('/adduser', function (req, res) {
  res.sendFile(__dirname + '/public/adduser.html');
});

// Require the module required for using form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Route for form sending the POST data

app.post("/adduser", function (req, res) {
  // Load the existing data from a file
  var data = require(__dirname + "/data/exampledata2.json");

  // Create a new JSON object and add it to the existing data variable

  data.push({
    Name: req.body.name,
    Company: req.body.company,
    Email: req.body.email,
    Date: new Date()
  });

  // Convert the JSON object to a string format
  var jsonStr = JSON.stringify(data);

  // Write data to a file
  fs.writeFile(__dirname + "/data/exampledata2.json", jsonStr, err => {
    if (err) throw err;
    console.log("It's saved!");
  });
  res.send(
    "Saved the data to a file. Browse to the /details to see the contents of the file"
  );
});

app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});
