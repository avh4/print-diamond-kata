
function spaces(n) {
  return new Array(n+1).join(" ");
}

function row(rowIndex, totalRows) {
  indentation = totalRows - rowIndex - 1;
  letter = String.fromCharCode(65 + rowIndex);
  left = spaces(indentation) + letter + spaces(rowIndex);
  if (rowIndex == 0) {
    return left;
  } else {
    return left + spaces(rowIndex-1) + letter;
  }
}

function printDiamond(n) {
  for (rowIndex=0;
       rowIndex < n;
       rowIndex++) {
    console.log(row(rowIndex, n));
  }
  for (rowIndex=n-2;
       rowIndex >= 0;
       rowIndex--) {
    console.log(row(rowIndex, n));
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);
printDiamond(4);
printDiamond(5);
printDiamond(6);
printDiamond(200);
