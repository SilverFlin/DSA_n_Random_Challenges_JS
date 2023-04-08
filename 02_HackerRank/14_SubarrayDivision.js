// Dec 2022
/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(chocolate, birthDay, birthMonth) {
  const segment = birthMonth;
  const totalSum = birthDay;
  const segmentsToShare = [];

  for (let i = 0; i < chocolate.length - segment + 1; i++) {
    let currentSum = 0;
    for (let j = i; j < i + segment; j++) {
      currentSum += chocolate[j];
    }
    if (currentSum === totalSum) {
      let newSegment = [];
      for (let j = i; j < i + segment; j++) {
        newSegment.push(chocolate);
        currentSum += chocolate[j];
      }
      segmentsToShare.push(newSegment);
    }
  }

  return segmentsToShare.length;
}
