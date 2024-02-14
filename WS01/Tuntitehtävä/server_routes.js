var http = require("http");
var fs = require("fs");

//create a server object:
http.createServer(function(request, response) {
   

    if (request.url === "/"){
        response.writeHead(200, { "Content-Type": "text/html" });

        response.write("Olet saapunut palvelimen juureen.");
        } 
        else if (request.url === "/helloworld"){
            response.writeHead(200, { "Content-Type": "text/html" });
        
            var html = fs.readFileSync('frontpage.html');
        
            response.write(html);
        } 

        else if (request.url === "/json"){
            response.writeHead(200, { "Content-Type": "text/json" });
            var json = require('./data.json');
        
            response.write(JSON.stringify(json));
        } 


        
        response.end(); //end the response
  })
  .listen(8081); //the server object listens on port 8081
