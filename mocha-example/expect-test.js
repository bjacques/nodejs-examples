var expect = require('expect.js');

var expected, arrayFromString;

// @BeforeClass
before(function(){
  expected = ['a','b','c'];
});

describe('string split tests', function(){

  // @Before
  beforeEach(function(){
     arrayFromString = 'a,b,c'.split(',');
  });

  // @Test
  it('should create an Array', function(){
    expect(Array.isArray(arrayFromString)).to.be(true);
  });

  // @Test
  it('should have equal elements', function(){
    expect(expected.length).to.equal(arrayFromString.length);

    for(var i=0; i < expected.length; i++) {
      expect(expected[i]).equal(arrayFromString[i]);
    }
  });
});
