const expect  = require('chai').expect;
const diamond = require("./diamond");

describe('prints lovely diamond', function(){

  it('should print A only', function(){
    expect(diamond('A')).to.deep.equal(["A"]);
  });

  it('should print A + B', function(){
    expect(diamond('B')).to.deep.equal([
        " A ",
        "B B",
        " A "
      ]);
  });

  it('should print A + B + C', function(){
    expect(diamond('C')).to.deep.equal([
        "  A  ",
        " B B ",
        "C   C",
        " B B ",
        "  A  "
      ]);
  });
})
