// Jan 2022

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
  if (year === 1918) return "26.09.1918";

  const isJulian = year <= 1917;

  if (isJulian) {
    return year % 4 === 0 ? "12.09." + year : "13.09." + year;
  } else {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
      ? "12.09." + year
      : "13.09." + year;
  }
}
