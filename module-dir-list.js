var fs = require("fs");

module.exports = function(dir, ext, callback) {

    var returnFiles;
    var returnErr;

    fs.readdir(dir, function(err, files) {
      if (err) {
        callback(err, null);
        return;
      }

      returnFiles = files.filter(function(elm, idx, arr) {
         return elm.endsWith("." + ext) ? true : false;
      });

      callback(null, returnFiles);
    });
};
