var util = require('util');
var argv = require('yargs')
  .usage('Usage: node $0 --a=[num] --b=[num]')
  .demand(['a','b'])
  .argv;

console.log(util.format('a=%s, b=%s', argv.a, argv.b));
