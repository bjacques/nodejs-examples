var args = process.argv.slice(2);

var sum = args.reduce((a,b) => Number(a) + Number(b));

console.log(sum);
