// Jan 2022

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  let count = 0;
  let currentPos = 0;
  path.split("").forEach((e) => {
    if (e === "U") {
      currentPos++;
      if (currentPos === 0) count += 1;
    }
    if (e === "D") {
      currentPos--;
    }
  });
  return count;
}
