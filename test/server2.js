const http = require('http');


http.createServer(function(request, response){
    response.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Header-Name",
        "Access-Control-Max-Age": "2000"
    })
    response.end('console.log("server2")');
}).listen(8889);