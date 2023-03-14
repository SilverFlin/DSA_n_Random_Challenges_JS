/*
Write a recursive function called fib which accepts a number
and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 
1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter
is equal to the sum of the previous two numbers
*/

function fib(num) {
  if (num <= 0) return 0;
  if (num <= 2) return 1;
  return fib(num - 2) + fib(num - 1);
}

// 4 -> fib(2) + fib(3)
// fib(3) = fib(1) + fib(2)
// fib(2) = 1
// fib(1) = 1

// fib(4) // 3
// 1, 1, 2, 3, 4
//             ^
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
