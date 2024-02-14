var fs = require("fs");

var data2 = fs.readFileSync("example2.txt");
var data = fs.readFileSync("example.txt");

var uusiData = data + data2;

try{
fs.writeFileSync('uusiFile.txt', data);
fs.appendFileSync('uusiFile.txt', data2);
} catch (err){
  console.log("Tuli virhe "+err);
}

console.log("Results of fileread:");
console.log(data.toString());
console.log(data2.toString());
