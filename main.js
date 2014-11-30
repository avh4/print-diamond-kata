
function spaces(n) {
  return new Array(n+1).join(" ");
}

function printDiamond(n) {
  lines = [];
  console.log(spaces(n-1) + "A");
  for (i=n-2, j=1, c=1; i >= 0; i--, j+=2, c++) {
    letter = String.fromCharCode(65 + c)
    lines.push(line = spaces(i) + letter + spaces(j) + letter);
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