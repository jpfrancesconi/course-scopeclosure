// strict mode
// Previene el hoisting
'use strict'
pi = 3.1416; // without sctict mode hoisting make his magic
console.log(pi);

function myfunction() {
  'use strict'
  return pi = 3.1416;
}

console.log(myfunction());
