// redeclare and reassigne
var firstName; // Undefined
firstName = 'Juan';
console.log(firstName);

var lastName = 'Francesconi'; // Declare and assign
lastName = 'Garcia'; // re assign
console.log(lastName);

var secondName = 'David'; // Declare and assigne
var secondName = 'Ana'; // reasign
console.log(secondName);

// Let allow redreclare but not reasign
let fruit = 'Apple'; // Declare and assign
fruit = 'Kiwi'; // Let allows reasign
console.log(fruit);
// let fruit = 'Banana';
// console.log(fruit);

// Const is not allow redeclare and not allow reassign
const animal = 'Dog'; // Declare and assign
//animal = 'cat'; // reassign is not allowed
//const animal = 'Snake';  // redeclare is not allowed
console.log(animal);

const vehicles = [];
vehicles.push("Carrito");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);
