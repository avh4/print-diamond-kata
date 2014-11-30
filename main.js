
function spaces(n) {
  return new Array(n+1).join(" ");
}

function printDiamond(n) {
  lines = [];
  console.log(spaces(n-1) + "A");
  for (i=n-2, c=1; i >= 0; i--, c++) {
    letter = String.fromCharCode(65 + c)
    var left = spaces(i) + letter + spaces(c);
    var right = spaces(c-1) + letter;
    lines.push(line = left + right);
    console.log(line);
  }
  var line;
  lines.pop();
  while(line = lines.pop()) {
    console.log(line);
  }
  if (n > 1) {
    console.log(spaces(n-1) + "A");
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);
printDiamond(4);
printDiamond(5);
printDiamond(6);