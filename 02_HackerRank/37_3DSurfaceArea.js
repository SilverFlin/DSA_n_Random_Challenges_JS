// Feb 2023

/*
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

function surfaceArea(A) {
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (i === 0) count += A[i][j]; // back face
      if (i === A.length - 1) count += A[i][j]; // front face
      if (j === 0) count += A[i][j]; // L side
      if (j === A[i].length - 1) count += A[i][j]; // R side
      if (A[i][j] !== 0) count += 2; // bottom n top

      /* X' height difference */
      if (A[i][j + 1]) count += Math.abs(A[i][j] - A[i][j + 1]);
      /* Y' height difference */
      if (A[i + 1]) count += Math.abs(A[i][j] - A[i + 1][j]);
    }
  }

  return count;
}
