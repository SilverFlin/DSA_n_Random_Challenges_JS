// Jan 2023
/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
  let currPpl = 5;
  let currShares = 0;
  let currLikes = 0;
  for (let i = 0; i < n; i++) {
    currShares += Math.floor(currPpl / 2);
    currLikes += currPpl * 3;
    currPpl = Math.floor(currPpl / 2) * 3;
  }

  console.log(currPpl, currShares, currLikes);
  return currShares;
}
