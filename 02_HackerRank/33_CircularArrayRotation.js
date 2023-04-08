// Jan 2023

/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(a, k, queries) {
  const tempArr = [];
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }

  for (let query of queries) {
    tempArr.push(a[query]);
  }

  return tempArr;
}
