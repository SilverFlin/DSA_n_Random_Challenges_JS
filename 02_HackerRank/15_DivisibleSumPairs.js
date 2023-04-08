// Dec 2022
/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  let countPairs = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i; j < ar.length; j++) {
      if ((ar[i] + ar[j + 1]) % k === 0) countPairs++;
    }
  }
  return countPairs;
}
