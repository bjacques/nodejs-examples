var express = require("express");
var app = express();
var hello = require("./hello");

app.get("/shout", function(req, resp){
  var shoutedName = req.query.name.toUpperCase();
  resp.send(shoutedName);
});

app.listen(3000);
