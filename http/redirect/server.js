const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
  console.log('request', request.url);
  if (request.url === '/') {
    response.writeHead(302, {
      'Location': '/new'
    })
    response.end('console.log("redirect")');
  }


  if (request.url === '/new') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    })

    var html = fs.readFileSync('test.html', 'utf-8');
    response.end(html);
  }

}).listen(8888);
console.log('server listen 8888')