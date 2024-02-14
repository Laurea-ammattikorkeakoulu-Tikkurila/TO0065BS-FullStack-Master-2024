// Step 1: Import the HTTP module
const http = require('http');
const PORT = 3000;
// Import the URL module
const url = require("url");

// Make our HTTP server
const server = http.createServer((req, res) => {
    // Parse the request url
    const reqUrl = url.parse(req.url).pathname
    if (reqUrl == "/") {
        res.write("Olet hakemistossa /")
        res.end()
    }
    else if (reqUrl == "/hello") {
        res.write("Olet hakemistossa /hello")
        res.end()
    } else {
        res.write("Hakemaasi sivua ei löydy - 404 Not Found")
        res.end()
    }
})
// Bind the server to a specific port and start listening for incoming connections
server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

//  Open the terminal and run the file using the command node 02_http_server_routes.js