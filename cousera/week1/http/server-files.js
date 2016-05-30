var http = require('http');

var hostname = 'localhost';
var port = 8080;

var server = http.createServer(function(req, resp){
  console.log(req.headers);
  resp.writeHead(200,{'Content-type': 'text-html'});
  resp.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, function(){
  console.log('Server listening to port ${port}');
});
