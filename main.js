
function printDiamond(n) {
  if (n == 1) {
    console.log("A");
  }
  if (n == 2) {
    console.log(" A");
    console.log("B B");
    console.log(" A");
  }
  if (n == 3) {
    console.log("  A");
    console.log(" B B");
    console.log("C   C");
    console.log(" B B");
    console.log("  A");
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);