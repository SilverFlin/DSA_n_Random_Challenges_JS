// Dec 2022
/*
 * Given five positive integers, find the minimum and maximum values that can be calculated by
 * summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */
function miniMaxSum(arr) {
  // calc min and max sum all the array
  // Sum all the array and found min and max, then extract
  let total = 0;
  let currentMin = Infinity;
  let currentMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    if (arr[i] > currentMax) currentMax = arr[i];
    if (arr[i] < currentMin) currentMin = arr[i];
  }
  let minimumSum = total - currentMax;
  let maximumSum = total - currentMin;
  console.log(`${minimumSum} ${maximumSum}`);
}
