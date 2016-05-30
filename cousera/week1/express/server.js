var
  express = require('express'),
  http = require('http');
  util = require('util');
  
var hostname = 'localhost';
var port = 8080;

var app = express();

app.use(function(req, resp, next) {
  console.log(req.headers);

  resp.writeHeader(200, {'Content-type':'text/html'});
  resp.end('<h1>Hello World</h1>');
});

var server = http.createServer(app);

server.listen(port, hostname, function(){
  console.log(util.format('Server listening to port %s', port));
});
