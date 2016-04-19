var assert  = require('assert');

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
    assert(Array.isArray(arrayFromString));
  });

  // @Test
  it('should have equal elements', function(){
    assert.equal(expected.length, arrayFromString.length);

    for(var i=0; i < expected.length; i++) {
      assert.equal(expected[i], arrayFromString[i], i + " elm is equal");
    }
  });
});
