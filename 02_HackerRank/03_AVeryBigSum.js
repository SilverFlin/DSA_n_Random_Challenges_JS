// Dec 2022

/*
In this challenge, you are required to calculate and print the sum of the elements in an array,
 keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
*/

function aVeryBigSum(ar) {
  let sum = 0;
  ar.map((e) => {
    sum += e;
  });
  return sum;
}
