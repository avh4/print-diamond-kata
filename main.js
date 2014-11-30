
function spaces(n) {
  return new Array(n+1).join(" ");
}

function printArray(lines) {
  lines.forEach(function(line) {
    console.log(line);
  });
}

function printReflection(lines) {
  var line;
  lines.pop();
  while(line = lines.pop()) {
    console.log(line);
  }
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
    lines.push(left + right);
  }
  printArray(lines);
  printReflection(lines);
}

printDiamond(1);
printDiamond(2);
printDiamond(3);
printDiamond(4);
printDiamond(5);
printDiamond(6);