
function printDiamond(n) {
  if (n > 1) {
    spaces = " ";
  } else {
    spaces = "";
  }
  console.log(spaces + "A");
  if (n > 1) {
    console.log("B" + spaces + "B");
    console.log(spaces + "A");
  }
}

printDiamond(1);
printDiamond(2);