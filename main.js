
function spaces(n) {
  return new Array(n+1).join(" ");
}

function printDiamond(n) {
  if (n == 1) {
    console.log(spaces(n-1) + "A");
  }
  if (n == 2) {
    console.log(spaces(n-1) + "A");
    console.log("B" + spaces(1) + "B");
    console.log(spaces(n-1) + "A");
  }
  if (n == 3 || n == 4) {
    console.log(spaces(n-1) + "A");
    j = 1;
    for (i=n-2, c=1; i >= 0; i--, j+=2, c++) {
      letter = String.fromCharCode(65 + c)
      console.log(spaces(i) + letter + spaces(j) + letter);
    }
    j -= 4;
    for (i=1, c=n-2; i <= n-2; i++, j-=2, c--) {
      letter = String.fromCharCode(65 + c)
      console.log(spaces(i) + letter + spaces(j) + letter);   
    }
    console.log(spaces(n-1) + "A");
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);
printDiamond(4);