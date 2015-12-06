var http = require("http");

var url = process.argv[2];
// url = "http://www.bbc.co.uk/news"

http.get(url, function(res) {
  // console.log(res.statusCode);
  res.setEncoding("utf8");

  var html = "";

  res.on("data", function(chunk) {
    html += chunk;
    console.log(chunk);
  });

  res.on("end", function() {
    // console.log(html);
  })

}).on('error', function(err) {
  console.log("Error: " + err.message)
});
