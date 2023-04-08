// Feb 2023

/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
  let countLate = 0;
  for (let student of a) {
    if (student <= 0) countLate++;
  }
  return countLate < k ? "YES" : "NO";
}
