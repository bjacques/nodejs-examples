var http = require('http');
var fs = require('fs');
var path = require('path');
var util = require('util');

var hostname = 'localhost';
var port = 8080;

var server = http.createServer(function(req, resp){
  console.log('Request for ' + req.url + ' using method ' + req.method);

  if(req.method == 'GET') {
    var fileUrl;

    if(req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    console.log(fileUrl);

    var filePath = path.resolve('./public' + fileUrl);

    var fileExt = path.extname(filePath);

    if(fileExt == '.html') {
      fs.exists(filePath, function(exists) {

        if(!exists) {
          resp.writeHead(404, {'Content-type':'text/html'});
          resp.end('<h1>Error 404:</h1>' + fileUrl + ' not found</h1>');
          return;
        }

        resp.writeHead(200, {'Content-type':'text/html'});
        fs.createReadStream(filePath).pipe(resp);

      });
    }
    else {
      resp.writeHead(404, {'Content-type':'text/html'});
      resp.end('<h1>Error 404:</h1>' + fileUrl + ' not HTML file</h1>');
    }
  }
  else {
    resp.writeHead(404, {'Content-type':'text/html'});
    resp.end('<h1>Error 404:</h1>' + req.method + ' not GET Request</h1>');
  }
});

server.listen(port, hostname, function(){
  console.log(util.format('Server listening to port %s', port));
});
