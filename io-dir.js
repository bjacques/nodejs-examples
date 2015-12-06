var fs = require('fs');

var dir = process.argv[2];
//dir = 'g:/temp/';
var ext = process.argv[3];
//ext = "txt";

fs.readdir(dir, function(err, files) {
  if(err) throw err;

  var filesOfInterest = files.filter(function(elm, idx, arr) {
    return elm.endsWith(ext) ? true : false;
  });

  filesOfInterest.forEach(function(elm, idx, arr) {
    console.log(elm);
  });
});
