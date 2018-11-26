const http = require('http');
const fs = require('fs');

http.createServer(function(request, response){
    console.log(request.url);
    response.writeHead(200, {
        "Content-Type": "text/html",
        "Accept": "text/html",
        "Accept-Encoding": "gzip",
        "Accept-Language": "zh",
        "Set-Cookie": ['id=123; max-age=20', 'abc=321;HttpOnly'],
        "Cache-control": "max-age=2000, no-cache",
        "Last-Modified": "123456",
        "Etag": "ddd",
        "Content-Sercurity-Policy": "default-src \'self\'"
    })
    if(request.url === '/'){
        response.writeHead(302, {
            "Location": '/news'
        })
    }
    var html = fs.readFileSync('ajax.html', 'utf-8');
    response.end(html);
}).listen(8888);