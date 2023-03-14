/*
Write a function called recursiveRange 
which accepts a number and adds up all
the numbers from 0 to the number passed to the function
*/

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)); // 21
// 6 + 5 + 4 + 3 + 2 + 1 + 0 = 21
console.log(recursiveRange(10)); // 55
