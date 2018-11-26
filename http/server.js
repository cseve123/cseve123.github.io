const http = require('http');
const fs = require('fs');

http.createServer(function(request, response){
  console.log('request', request.url);
  if(request.url === '/'){
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
  
    var html = fs.readFileSync('test.html', 'utf-8');
    response.end(html);
  }
  console.log(request.url);
  

  const etag = request.headers['if-none-match'];
  if(request.url === '/script.js'){
    if(etag === '777'){
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=2000000, no-cache',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('123');
    }else{
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=2000000, no-cache',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('console.log("loding start")');
    }
   
  }
 

}).listen(8888);
console.log('server listen 8888')