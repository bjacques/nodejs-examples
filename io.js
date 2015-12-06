var fs = require('fs');

var buf = fs.readFileSync('C:/Users/Brad/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/fs.html');

var numLines = buf.toString().split("\n").length;

console.log(numLines);
