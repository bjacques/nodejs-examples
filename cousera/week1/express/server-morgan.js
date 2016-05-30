var
  express = require('express'),
  morgan = require('morgan');
  util = require('util');

var hostname = 'localhost';
var port = 8080;

var app = express();

// morgan is a logging framework
app.use(morgan('dev'));

// __dirname is the current directory of this script
// static files only support GET requests
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(util.format('Server listening to port %s', port));
});
