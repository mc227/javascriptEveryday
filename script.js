// const numbers = [0, 1, 2];
// // const mappingFunction = function(number) {
// //   return number * number;
// // };
// const mappingFunction = number => number * number;

// const newArray = numbers.map(mappingFunction);
// console.log(newArray);

// const x = () => 'Hello'; // implicit return

// const x = function() {
//   return 'Hello';
// }

// console.log(x());

// const y = a => a; // implicit return

// const y = function(a) {
//   return a;
// };

// const z = (a, b = 1) => a + b; // implicit return

// const z = function(a, b = 1) {
//   return a + b;
// };

// const m = function(a, b) {
//   if (a < 1) {
//     return a + b
//   }
//   return a - b;
// };

// const m = (a, b) => { // explicit return
//   if (a < 1) {
//     return a + b;
//   }
//   return a - b;
// }

// const greet = function(name, age) {
//   return {
//     name,
//     age
//   }
// }

// const greet = (name, age) => {
//   return {
//     name,
//     age
//   }
// }

// const greet = (name, age) => ({ // implicit return
//   name,
//   age
// });

// console.log(
//   greet('Steve', 18)
// );

// const quotient = {
//   numbers: [1, 2, 3, 4, 5, 6, 7],
//   results: [],
//   divideFn: function(divisor) {
//     return this.numbers.map((number) => {
//       if (number % divisor === 0) {
//         console.log(this)
//         return this.results.push(number);
//       }
//     })
//   }
// };

// quotient.divideFn(3);
// console.log(quotient.results);


const greet = (name, age) => {
  return name.toUpperCase()
};

