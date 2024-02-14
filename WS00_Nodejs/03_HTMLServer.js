var http = require("http");

//create a server object:
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<h1>Miten menee?!<h1>"); //write a response to the client
    response.write("<h2>How are you today</h2>");
    response.write(
      " <img src='https://nodejs.org/static/images/logo.svg' alt = 'Kuva hukuksissa'>"
    );

    var data =
      "<table border='1'><tr><td>Eka rivi eka solu</td><td>Toka solu</td></tr><tr><td>Toka rivi eka solu</td><td>Toka solu</td></tr></table>";
    response.write(data);

    response.end("<strong>This is the end</strong>"); //end the response
  })
  .listen(8081); //the server object listens on port 8081
