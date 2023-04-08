// Feb 2023

/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
  let startDate = new Date(y1, m1, d1);
  let endDate = new Date(y2, m2, d2);
  let diff = endDate - startDate;

  // Case 1
  if (diff >= 0) return 0;

  // Case 2
  let diffMilis = Math.abs(diff);
  let diffDays = Math.floor(diffMilis / (1000 * 60 * 60 * 24));
  let isSameMonth = m1 === m2;
  let isSameYear = y1 === y2;
  if (isSameMonth && isSameYear) {
    return 15 * diffDays;
  }
  if (isSameYear) {
    let diffMonths = m1 - m2;
    return 500 * diffMonths;
  }

  return 10000;
}
