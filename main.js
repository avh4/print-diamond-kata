
function printDiamond(n) {
  if (n == 1) {
    console.log(new Array(n).join(" ") + "A");
  }
  if (n == 2) {
    console.log(new Array(n).join(" ") + "A");
    console.log("B B");
    console.log(new Array(n).join(" ") + "A");
  }
  if (n == 3) {
    console.log(new Array(n).join(" ") + "A");
    console.log(new Array(n-1).join(" ") + "B B");
    console.log("C   C");
    console.log(new Array(n-1).join(" ") + "B B");
    console.log(new Array(n).join(" ") + "A");
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);