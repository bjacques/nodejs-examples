const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

module.exports = function (input) {

  var chars = alpha.filter(ch => ch <= input);

  var lines = chars.map((ch,idx) => {
    var outerPad = padding(chars.length - idx -1);
    if (idx === 0 ) {
      return outerPad + ch + outerPad;
    }
    else {
      var innerPad = padding(idx * 2 - 1);
      return outerPad + ch + innerPad + ch + outerPad;
    }

  });

  var copyOf = lines.slice(0,chars.length-1);
  copyOf.reverse();
  return lines.concat(copyOf);
}

function padding(num) {
  return Array(num).fill(' ').join('');
}
