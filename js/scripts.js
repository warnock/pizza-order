//Business Logic
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
  } else if (this.toppingOne === "noMeat") {
    0;
  } else if (this.toppingOne === "sausage" || this.toppingOne === "bacon"){
    this.value += 5;
  }
}
Pizza.prototype.veggieTopping = function () {
  if (this.toppingTwo === "allTheVeggies") {
    this.value += 3;
  } else if (this.toppingTwo === "mushrooms" || this.toppingTwo === "olives") {
    this.value += 1;
  }
}
Pizza.prototype.extraCheese = function () {
  if (this.toppingThree === "extraCheese"){
    this.value += 2;
  } else {
    0;
  }
}

//User Interface Logic
$(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var size =  $("input:radio[name=size]:checked").val();
    var toppingOne =  $("input:radio[name=meatTopping]:checked").val();
    var toppingTwo =  $("input:radio[name=vegieTopping]:checked").val();
    var toppingThree =  $("input:radio[name=extraCheese]:checked").val();

    var newPizza = new Pizza(size, toppingOne, toppingTwo, toppingThree);
    newPizza.totalCost();

    $(".pizzaTotal").text("Your pizza pie total is: $" + newPizza.value);
  });
});
