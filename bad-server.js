const http = require('http');

const PORT = 7500;

const handleRequest = (request, response) => {
    response.end('You Stink');
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log('The server is listening on port: ' + PORT)
});