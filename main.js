
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
  for (indentation=n-1, rowIndex=0;
       indentation >= 0;
       indentation--, rowIndex++) {
    lines.push(row(rowIndex, indentation));
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