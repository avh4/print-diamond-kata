
function spaces(n) {
  return new Array(n+1).join(" ");
}

function printDiamond(n) {
  if (n == 1) {
    console.log(spaces(n-1) + "A");
  }
  if (n == 2) {
    console.log(spaces(n-1) + "A");
    console.log("B B");
    console.log(spaces(n-1) + "A");
  }
  if (n == 3) {
    console.log(spaces(n-1) + "A");
    console.log(spaces(n-2) + "B B");
    console.log("C   C");
    console.log(spaces(n-2) + "B B");
    console.log(spaces(n-1) + "A");
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);