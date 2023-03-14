/*
Write a recursive function called reverse
which accepts a string and returns a new string in reverse.
*/

function reverse(str) {
  let tempStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tempStr = tempStr.concat(str[i]);
    console.log(str[i]);
  }
  return tempStr;
}

reverse("awesome"); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
