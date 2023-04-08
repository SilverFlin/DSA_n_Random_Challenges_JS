// Feb 2023

/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

function strangeCounter(t) {
  let currTime = 1;
  let currValue = 3;
  let tempInitialNum = 3;
  while (currTime < t) {
    console.log(currTime, currValue);
    currTime += currValue;
    if (currTime > t) {
      currTime -= currValue;
      break;
    }
    currValue = tempInitialNum * 2;
    tempInitialNum = currValue;
  }

  return currTime === t ? currValue : currValue - (t - currTime);
}
