// Jan 2023

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
  let arr = [];
  for (let i = 0; i < n; i++) arr.push([]);
  let lastAnswer = 0;
  let idx;
  const answers = [];
  for (let i = 0; i < queries.length; i++) {
    let [query, x, y] = queries[i];
    idx = (x ^ lastAnswer) % n;
    if (query === 1) arr[idx].push(y);

    if (query === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }
  return answers;
}
