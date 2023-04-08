// Dec 2022
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const isAM = s.slice(s.length - 2) === "AM";
  let rawTime = s.slice(0, s.length - 2);
  let rawHours = s.slice(0, 2);
  let rawTimeNoHours = rawTime.slice(2);

  if (isAM) {
    if (rawHours !== "12") return rawTime;
    return "00" + rawTimeNoHours;
  }
  let pmHours = rawHours === "12" ? +rawHours : +rawHours + 12;
  return pmHours + rawTimeNoHours;
}
