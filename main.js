
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
  if (n == 3) {
    console.log(spaces(n-1) + "A");
    console.log(spaces(n-2) + "B" + spaces(1) + "B");
    console.log("C" + spaces(3) + "C");
    console.log(spaces(n-2) + "B" + spaces(1) + "B");
    console.log(spaces(n-1) + "A");
  }
  if (n == 4) {
    console.log(spaces(n-1) + "A");
    console.log(spaces(n-2) + "B" + spaces(1) + "B");
    console.log(spaces(n-3) + "C" + spaces(3) + "C");
    console.log("D" + spaces(5) + "D");
    console.log(spaces(n-3) + "C" + spaces(3) + "C");
    console.log(spaces(n-2) + "B" + spaces(1) + "B");
    console.log(spaces(n-1) + "A");
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);
printDiamond(4);