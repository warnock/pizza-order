function Pizza(size, toppingOne, toppingTwo, toppingThree) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo
  this.toppingThree = toppingThree
  this.value = 0;
}
Pizza.prototype.totalCost = function (){
  this.pizzaSize();
  this.meatTopping();
  this.veggieTopping();
  this.extraCheese();
  return this.value;
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
Pizza.prototype.meatTopping = function () {
  if (this.toppingOne === "pepperoni") {
    this.value += 2;
  } else {
    this.value += 5;
  }
}
Pizza.prototype.veggieTopping = function () {
  if (this.toppingTwo === "allTheVeggies") {
    this.value += 3;
  }else {
    this.value += 1;
  }
}
Pizza.prototype.extraCheese = function () {
  if (this.toppingThree === "extra cheese"){
    this.value += 2;
  }
}
