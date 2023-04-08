// Feb 2023

/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
  const strNum = n + "";
  const numOfDigis = strNum.length;
  let count = 0;
  for (let digit of strNum) {
    if (n % +digit === 0) count++;
  }
  return count;
}
