// Dec 2022
/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(birds) {
  const birdDictionary = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  birds = birds.sort();
  for (let birdId of birds) {
    birdDictionary[birdId] += 1;
  }
  // console.log(birdDictionary)
  let currentMax = -Infinity;
  let currentId;
  for (let birdId in birdDictionary) {
    // console.log(birdDictionary[birdId])
    if (birdDictionary[birdId] > currentMax) {
      console.log(birdDictionary[birdId], currentMax);
      // console.log('cuM',currentMax)
      currentMax = birdDictionary[birdId];
      currentId = birdId;
    }
  }
  return currentId;
}
