const http = require('http');

const PORT = 7000;

const handleRequest = (request, response) => {
    response.end("You're Awesome");
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log('The server is listening on port: ' + PORT)
});