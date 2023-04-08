// Jan 2023

// Complete the catAndMouse function below.
function catAndMouse(c1, c2, m) {
  let c1Distance = Math.abs(c1 - m);
  let c2Distance = Math.abs(c2 - m);
  if (c1Distance === c2Distance) return "Mouse C";
  let closestC = Math.min(c1Distance, c2Distance);
  return closestC === c1Distance ? "Cat A" : "Cat B";
}
