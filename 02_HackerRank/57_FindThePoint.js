// Feb 2023

/*
 * Complete the 'findPoint' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER px
 *  2. INTEGER py
 *  3. INTEGER qx
 *  4. INTEGER qy
 */

function findPoint(px, py, qx, qy) {
  const rx = qx > px ? qx + Math.abs(qx - px) : qx - Math.abs(qx - px);
  const ry = qy > py ? qy + Math.abs(qy - py) : qy - Math.abs(qy - py);
  return [rx, ry];
}
