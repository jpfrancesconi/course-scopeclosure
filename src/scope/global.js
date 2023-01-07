// variables
var a; // declaring
var b = 'b'; // declare and assigne
b = 'bb'; // re assigne
var a = 'aa'; // redeclaration

// global scope
var fruit = 'Apple'; // global
console.log(fruit);
function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countires() {
  country = 'Colombia'; // Assige but isn't declare, so is global
  console.log(country);
}
countires();
console.log(country);
