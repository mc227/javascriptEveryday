// hoisting
// var number;

// number = 1;
// console.log(number);
// console.log(window);
// var number = 1; // LHS RHS

// number = 1;

// console.log(number);

// number = 1;
// console.log(number);
// var number;
// var myVariable

// console.log(myVariable);
// myVariable = 2;

// var x = 3;
// if (true) {
//   var x = 2;
//   console.log(x)
// }
// // var x = 3;
// console.log(x)



var a = [];

(function() {
   'use strict';
   for (let i = 0; i < 5; ++i) { // *** `let` works as expected *** // i = 5
     a.push( function() {return i;} );
   }
}()); // IIFE "iffy"
console.log(a.map(function(f) {
  return f();
}));