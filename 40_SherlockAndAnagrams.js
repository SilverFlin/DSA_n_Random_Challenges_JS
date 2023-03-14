function factorialize(num) {
  let rval = 1;
  for (let i = 2; i <= num; i++) rval = rval * i;
  return rval;
}

function sherlockAndAnagrams(s) {
  let count = 0;

  let currSubstr;

  for (let j = 0; j < s.length - 1; j++) {
    // substr size
    let appearances = {};
    for (let i = 0; i < s.length; i++) {
      // starting point of compar
      if (i + j + 1 > s.length) break;
      currSubstr = s
        .substring(i, i + j + 1)
        .split("")
        .sort()
        .join("");
      // console.log(currSubstr)
      if (appearances[currSubstr]) {
        appearances[currSubstr] += 1;
      } else appearances[currSubstr] = 1;
    }
    // console.log(appearances)
    Object.entries(appearances).forEach((e) => {
      let key = e[0];
      let value = e[1];
      if (value === 1) return;
      console.log(key, value);
      if (key.length === 1) {
        let combination =
          factorialize(value) / (factorialize(2) * factorialize(value - 2));
        console.log(combination, "comb");
        count += combination;
        return;
      }
      if (value === 2) count++;
      if (value > 2) count += value;
    });
  }

  return count;
}

sherlockAndAnagrams(
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
);
