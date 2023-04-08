// Dec 2022

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  let couldEncounter = (x1 > x2 && v1 < v2) || (x1 < x2 && v1 > v2);
  console.log(couldEncounter);
  if (!couldEncounter) return "NO";
  const kTrack = {
    ahead: 0,
    aheadVelocity: 0,
    behind: 0,
    behindVelocity: 0,
  };

  if (x1 > x2) {
    kTrack.ahead = x1;
    kTrack.aheadVelocity = v1;
    //
    kTrack.behind = x2;
    kTrack.behindVelocity = v2;
  } else {
    kTrack.ahead = x2;
    kTrack.aheadVelocity = v2;
    //
    kTrack.behind = x1;
    kTrack.behindVelocity = v1;
  }

  while (kTrack.ahead > kTrack.behind) {
    kTrack.ahead += kTrack.aheadVelocity;
    kTrack.behind += kTrack.behindVelocity;
    if (kTrack.ahead === kTrack.behind) return "YES";
  }

  return "NO";
}
