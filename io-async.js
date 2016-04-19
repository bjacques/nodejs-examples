var fs = require('fs');

var filename = process.argv[2];
//var filename = 'g:/temp/test.txt';

fs.readFile(filename, 'utf8', function(err, data) {
  if(err) throw err;
  var numLines = data.split("\n").length - 1;
  console.log(numLines);
});
