var express = require("express");
var fs = require("fs");
var app = express();
const port = 30055;

// Require the module required for using form data
var bodyParser = require("body-parser");

app.use(express.static("./public"));

// create application/x-www-form-urlencoded parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
); // for parsing application/x-www-form-urlencoded

// Serve browser a form (HTML) from a file
app.get("/adduser", function (req, res) {
  res.sendFile(__dirname + "/public/adduser.html");
});

// POST Route to send FORM data back to server and store it to a JSON file
app.post("/adduser", function (req, res) {
  // Load the existing data from a file
  var data = require("./data/exampledata2.json");

  data.push({
    Name: req.body.name,
    Company: req.body.company,
    Email: req.body.email,
    Date: new Date()
  });

  // Convert the JSON object to a string format
  var jsonStr = JSON.stringify(data);

  // Write data to a file
  fs.writeFile("./data/exampledata2.json", jsonStr, err => {
    if (err) throw err;
    console.log("It's saved!");
  });
  res.send(
    "Saved the data to a file. Browse to the /details to see the contents of the file"
  );
});

// parse JSON file details and serve to Browser
app.get("/details", function (req, res) {
  var data = require("./data/exampledata2.json");

  // Parse the results into a variabke
  var results = '<table border="1"> ';

  for (var i = 0; i < data.length; i++) {
    results +=
      "<tr>" +
      "<td>" +
      data[i].Name +
      "</td>" +
      "<td>" +
      data[i].Email +
      "</td>" +
      "</tr>";
  }

  res.send(results);
});

app.listen(port, function () {
  console.log("Example app listening on port: " + port);
});
