// Amazon shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

// const item: { name: string, price: number};
// const historyLog; {operation, item?}
function moveItemFrom(array, item, arrayToMove) {
  let indexOfItem = array.indexOf(item);

  let itemFound;
  if (indexOfItem === -1) return;
  itemFound = array[indexOfItem];

  if (indexOfItem === array.length - 1) {
    array.pop();
    return;
  } else if (indexOfItem === 0) {
    array.shift();
  } else {
    array = array.slice(0, indexOfItem).concat(array.slice(indexOfItem + 1));
  }
  arrayToMove.push(itemFound);

  return [array, arrayToMove];
}

const Cart = {
  addItem: (user, item) => {
    Cart.makeHistory(user);
    item.price += item.price * 0.03;
    user.cart.push(item);
    user.history.push({ operation: "addItem", item: item });
    return user;
  },
  buyItem: (user, item) => {
    Cart.makeHistory(user);
    let transaction = moveItemFrom(user.cart, item, user.purchases);
    if (transaction) {
      console.log(transaction[0]);
      user.cart = user.purchases = transaction[1];
      user.history.push({ operation: "buyItem", item: item });
    }
  },
  emptyCart: (user) => {
    Cart.makeHistory(user);

    user.history.push({ operation: "emptyCart" });
  },
  refundItem: (user, item) => {
    Cart.makeHistory(user);
    let transaction = moveItemFrom(user.purchases, item, user.cart);
    if (transaction) {
      user.purchases = transaction[0];
      user.cart = transaction[1];
      user.history.push({ operation: "refundItem", item: item });
    }
    user.purchases;
  },
  makeHistory: (user) => {
    if (!user.history) {
      user.history = [];
    }
  },
};

// Cart feature
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart -> purchases
// 4. Empty cart

// Bonus:
// Accept refunds
// Track user history

Cart.addItem(user, { name: "Silver", price: 10 });
Cart.addItem(user, { name: "Flin", price: 7 });
Cart.buyItem(user, { name: "Flin", price: 7 });

// console.log(user.cart)
