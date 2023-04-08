// Jan 2023

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  const sockObj = {};
  let count = 0;
  ar.forEach((e) => {
    if (!sockObj[e]) {
      sockObj[e] = 1;
    } else sockObj[e] += 1;
    if (sockObj[e] === 2) {
      sockObj[e] = 0;
      count++;
    }
  });
  return count;
}
