// Dec 2022
/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems.
 The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
 */
function plusMinus(arr) {
  const countRatio = {
    negative: 0,
    zero: 0,
    positive: 0,
  };

  for (let item of arr) {
    if (item < 0) {
      countRatio.negative += 1;
      continue;
    }
    if (item > 0) {
      countRatio.positive += 1;
      continue;
    }
    countRatio.zero += 1;
  }
}
