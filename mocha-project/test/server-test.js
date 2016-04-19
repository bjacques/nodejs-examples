var expect = require("chai").expect;
var request = require("request");

describe("HTTP Request Tests", function(){

/*
start the web server first !!!
  > node main/server.js
*/
  var url = "http://localhost:3000/shout?name=brad";

  it("returns status 200", function(done){
    /*
    "done" is a callback we can use in aynch. tests so that Mocha knows to wait until we call it
    otherwise the test will execute and complete before the http responsse has been received.
    */
    request(url, function(error, response, body){
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("returns shouted name in uppercase", function(done){
    request(url, function(error, response, body){
      expect(body).to.equal("BRAD");
      done();
    });
  });
});
