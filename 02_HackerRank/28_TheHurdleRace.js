// Jan 2022
/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);

  return maxHeight - k <= 0 ? 0 : maxHeight - k;
}
