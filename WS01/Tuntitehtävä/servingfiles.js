var http = require("http");
var fs = require("fs");
 
//create a server object:
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    // Readfile
    fs.readFile("example.txt", function(err, data) {
      response.writeHead(200, { "Content-Type": "text/html" });
      // Output the data to the browser
      response.write(data);
      response.end();
    });
  })
  .listen(8081);
