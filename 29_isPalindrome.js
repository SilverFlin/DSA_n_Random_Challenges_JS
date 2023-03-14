function isPalindrome(str1) {
  let tempStr = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    tempStr = tempStr.concat(str1[i]);
  }
  return tempStr === str1;
}
