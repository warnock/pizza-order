function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.value = 0;
}
Pizza.prototype.pizzaSize = function () {
  if (this.size === "small") {
    this.value += 10;
  } else if (this.size === "medium") {
    this.value += 12;
  } else if (this.size === "large") {
    this.value += 15;
  }
}
