var http = require("http");

//create a server object:
http
    .createServer(function (request, response) {
        response.writeHead(200, { "Content-Type": "text/HTML" });
        if (request.url === "/helloworld") {

            response.write("<table border = 2><tr><td>" + request.url + "</td></tr></table>");
            // do something
        }
        else {

       //     response.write("<strong>" + request.url + "</strong>");
            response.write("<strong> Hakemaasi sivua ei löydy! </strong>");
            // do something
        }

        response.end(); //end the response
    })
    .listen(8080); //the server object listens on port 8080