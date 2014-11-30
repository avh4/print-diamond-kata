
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

function row(rowIndex, indentation) {
  letter = String.fromCharCode(65 + rowIndex);
  left = spaces(indentation) + letter + spaces(rowIndex);
  if (rowIndex == 0) {
    return left;
  } else {
    return left + spaces(rowIndex-1) + letter;
  }
}

function printDiamond(n) {
  lines = [];
  var letter, left, right;
  for (i=n-1, c=0; i >= 0; i--, c++) {
    lines.push(row(c, i));
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