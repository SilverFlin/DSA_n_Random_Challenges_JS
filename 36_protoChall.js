//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.prototype.lastYear = function () {
  // console.log(Date.prototype)
  return this.getFullYear() - 1;
};
// console.dir(Date.prototype)
new Date("1900-10-10").lastYear();
//'1899'

//#Bonus
Array.prototype.map = function () {
  let result = "";
  for (let val in this) {
    result += val + "🗺, ";
  }
  result[result.length - 1] = "";
  return result.slice(0, result.length - 2);
};
// Mofify .map() to print '🗺' at the end of each item.
console.log([1, 2, 3].map());
//1🗺, 2🗺, 3🗺
