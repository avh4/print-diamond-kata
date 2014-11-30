
function spaces(n) {
  return new Array(n+1).join(" ");
}

function printDiamond(n) {
  lines = [];
  var letter, left, right;
  for (i=n-1, c=0; i >= 0; i--, c++) {
    letter = String.fromCharCode(65 + c)
    left = spaces(i) + letter + spaces(c);
    if (c == 0) {
      right = "";
    } else {
      right = spaces(c-1) + letter;
    }
    lines.push(line = left + right);
    console.log(line);
  }
  var line;
  lines.pop();
  while(line = lines.pop()) {
    console.log(line);
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);
printDiamond(4);
printDiamond(5);
printDiamond(6);