function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  let letterCounter1 = {};
  let letterCounter2 = {};

  for (let letter of string1) {
    letterCounter1[letter] = (letterCounter1[letter] || 0) + 1;
  }
  for (let letter of string2) {
    letterCounter2[letter] = (letterCounter2[letter] || 0) + 1;
  }

  for (let key in letterCounter1) {
    if (!key in letterCounter2) return false;
    if (letterCounter2[key] !== letterCounter1[key]) return false;
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("car", "rat"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
