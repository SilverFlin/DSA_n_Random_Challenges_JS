function countingValleys(steps, path) {
  let count = 0;
  let currentPos = 0;
  path.split("").forEach((e) => {
    console.log(currentPos);
    if (e === "U") {
      currentPos++;
      if (currentPos === 0) count += 0.5;
    }
    if (e === "D") {
      if (currentPos === 0) count += 0.5;
      currentPos--;
    }
  });

  return Math.floor(count);
}

countingValleys(0, "DDUDDUUDUU");

/*

    o             o
     o  o    o  o
      o  o o  o
          o    
*/
