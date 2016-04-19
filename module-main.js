var dirList = require("./module-dir-list.js");

var dir = process.argv[2];
var ext = process.argv[3];


// dirList(dir, ext, function(err, files) {
//   files.forEach(function(elm, idx, arr) {
//     console.log(elm);
//   });
// });

testListDirFiles();

function testListDirFiles() {

  dirList("g:/temp", "txt", function(err, files) {
    console.log("#1 " + err);
    console.log("#2 " + files);
  });


  dirList("g:/dir-does-not-exist/", "txt", function(err, files) {
    console.log("#3 " + err);
    console.log("#4 " + files);
  });
}
