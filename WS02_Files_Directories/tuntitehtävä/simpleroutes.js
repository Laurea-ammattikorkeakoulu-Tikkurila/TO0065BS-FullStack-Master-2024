var http = require("http");

//create a server object:
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    console.log(request.url);

    // Display contents based on requested url

    if (request.url === "/page1") {
      response.write("<h1>You are on page 1</h1>");
    }
    else if (request.url === "/page2") {
      response.write("<h1>You are on page 2</h1>");
    }
    else {
      response.write("<h1>This is the default page </h2>");
    }

    response.end(); //end the response
  })
  .listen(8081); //the server object listens on port 8080
