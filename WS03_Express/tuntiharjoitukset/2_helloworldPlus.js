
var express = require('express');
var app = express();
const port = 3002;

app.get('/', function (req, res) {
    res.send('Hello World Plus!');
});

app.get("/list", function (req, res) {
    res.send("Listing data from a file!");
});

// Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
app.get("*", function (req, res) {
    res.send("Can not find the requested page", 404);
});

app.listen(port, function () {
    console.log('Example app listening on port: ' + port);
});