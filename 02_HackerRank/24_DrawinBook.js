// Jan 2023

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */
function pageCount(n, p) {
  // 4
  // 3]

  //4 - 3 = 1
  // 1
  let rightLeft = Math.floor(n / 2 - Math.floor(p / 2));
  let leftRight = Math.floor(p / 2);

  return Math.min(rightLeft, leftRight);
}
