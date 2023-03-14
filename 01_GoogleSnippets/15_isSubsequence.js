function isSubsequence(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let pointer1 = 0;
  let pointer2 = 0;
  for (let i = 0; i < str2.length + 1; i++) {
    // console.log(arr1[pointer1])
    // console.log(arr2[pointer2])

    if (arr1[pointer1] === arr2[pointer2]) {
      pointer1++;
      pointer2++;
    } else pointer2++;
    if (pointer1 === str1.length) return true;
  }
  return false;
}

let answer = isSubsequence("abc", "abraadaac");
console.log(answer);
