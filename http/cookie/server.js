const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
  console.log('request', request.url);
  if (request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': ['id=123; max-age=20', 'abc=456; HttpOnly;domain=test.com']
    })

    var html = fs.readFileSync('test.html', 'utf-8');
    response.end(html);
  }

}).listen(8888);
console.log('server listen 8888')