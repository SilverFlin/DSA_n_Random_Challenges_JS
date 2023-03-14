//fill array with 60000 elements
const lisat = new Array(60000).join("1.1").split(".");
function removeItemsFromList() {
  let value = lisat.pop();
  console.log(value);
  if (value) setTimeout(removeItemsFromList, 0);
}
removeItemsFromList();
