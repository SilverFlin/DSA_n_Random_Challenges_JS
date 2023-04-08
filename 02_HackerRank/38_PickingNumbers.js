// Feb 2023

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  const orderedNums = a.sort((a, b) => a - b);

  let listOfLengths = [];
  let currentCount = 1;
  let currentMin = orderedNums[0];
  console.log(orderedNums);
  for (let i = 1; i < orderedNums.length; i++) {
    let totalDiff = Math.abs(currentMin - orderedNums[i]);
    if (totalDiff < 2) {
      currentCount++;
    } else {
      currentMin = orderedNums[i];
      listOfLengths.push(currentCount);
      currentCount = 1;
    }
  }
  listOfLengths.push(currentCount);
  return Math.max(...listOfLengths);
}
