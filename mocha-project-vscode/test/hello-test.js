var expect = require("chai").expect;
var hello = require("../main/hello");

// https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

describe("Hello tests", function(){
  it("returns uppercase string that is passed in as argument", function(){
    // given
    var name = "brad";
    //when
    var result = hello.shout(name);
    // then
    expect(result).to.equal(name.toUpperCase());
  });
});
