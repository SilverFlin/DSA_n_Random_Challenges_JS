// Feb 2023

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(clouds) {
  let jumps = 0;
  for (let i = 0; i < clouds.length - 1; i++) {
    if (clouds[i + 2] !== 1) i++;
    jumps++;
  }
  return jumps;
}
