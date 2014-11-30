
function spaces(n) {
  return new Array(n+1).join(" ");
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
  for (indentation=n-1, rowIndex=0;
       indentation >= 0;
       indentation--, rowIndex++) {
    console.log(row(rowIndex, indentation));
  }
  for (indentation=1, rowIndex=n-2;
       rowIndex >= 0;
       indentation++, rowIndex--) {
    console.log(row(rowIndex, indentation));
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);
printDiamond(4);
printDiamond(5);
printDiamond(6);
printDiamond(200);
