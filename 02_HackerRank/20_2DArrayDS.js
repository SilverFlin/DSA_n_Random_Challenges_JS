// Jan 2023
/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  let hourGlassSums = [];

  // HourGlass - >
  // [0][0] [0][1] [0][2]
  //        [1][1]
  // [2][0] [2][1] [2][2]
  let topHourGlass, centerHourGlass, bottomHourGlass, totalHourGlass;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      topHourGlass = arr[0 + i][0 + j] + arr[0 + i][1 + j] + arr[0 + i][2 + j];
      centerHourGlass = arr[1 + i][1 + j];
      bottomHourGlass =
        arr[2 + i][0 + j] + arr[2 + i][1 + j] + arr[2 + i][2 + j];
      totalHourGlass = topHourGlass + centerHourGlass + bottomHourGlass;
      hourGlassSums.push(totalHourGlass);
    }
  }
  console.log(hourGlassSums);
  return hourGlassSums.reduce((prev, curr) => (curr > prev ? curr : prev));
}
