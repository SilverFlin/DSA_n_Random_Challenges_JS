// Dec 200
/*
Staircase detail

This is a staircase of size n = 4:

   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
*/
function staircase(n) {
  let stairSymbol = "#";
  let absenceSymbol = " ";

  for (let i = 1; i <= n; i++) {
    let currentLine = "";
    for (let j = 0; j < n - i; j++) {
      currentLine += absenceSymbol;
    }
    for (let j = n - i; j < n; j++) {
      currentLine += stairSymbol;
    }
    ~console.log(currentLine);
  }
}
