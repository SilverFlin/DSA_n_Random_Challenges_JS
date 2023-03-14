// Dec 2022

/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

function diagonalDifference(arr) {
  let lrDiagonal = 0;
  let rlDiagonal = 0;

  let i = 0;
  let j = arr.length - 1;

  while (i < arr.length) {
    lrDiagonal += arr[i][i];
    rlDiagonal += arr[i][j];
    i++;
    j--;
  }
  return Math.abs(lrDiagonal - rlDiagonal);
}
