// How would you be able to create your own .bind() method using call or apply.

Function.prototype.bind = function (value) {
  let fn = this;
  return function () {
    return value[fn.name]();
  };
};

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
