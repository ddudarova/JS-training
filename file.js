const http = require('http');
const data =new Date();

http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});

    response.write('Your vote is accepted: ' + data)
    response.end();
}).listen(5000);
