// //function definition
// function hello() {
//   // function body
//   return 'Hello';
// }

// console.log(hello());

// ES6+
// // plus "template literal syntax"
// function hello(who, lang = 'en') {
//   if (lang === 'en') {
//     // return 'Hello ' + who + '!';
//     return `Hello ${who}!`
//   } else if (lang === 'es') {
//     return 'Hola ' + who + '!';
//   } else {
//     return 'Yo ' + who + '!'
//   }
// }

// console.log(hello('Sam'));
// console.log(hello('Mark', 1))

// function sumMyNumbers() {
//   console.log(arguments); // lists the args for the function
//   return Array.prototype.reduce.call(arguments, function(a, b) {
//     return a + b
//   })
// }

// console.log(
//   sumMyNumbers(1, 2, 3)
// );

// Rest (...) Params
// function sumMyNumbers(...numbers) {
//   // numbers --> Array
//   console.log(numbers)
//   return numbers.reduce((sum, element) => sum + element);
// }
// // console.log(sumMyNumbers(1, 2, 4, 50, 1, 1, 2, 45, 213, 12));
// console.log(sumMyNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Spread / Object Destructuring in functions
// const person = {
//   name: 'John',
//   age: 23
// };

// // function greet(obj) {
// //   return `Hi ${obj.name}`
// // }

// // console.log(greet(person));


// function greet({ name, age }) { // we know that the parameter is going to be the person object
//   return `Hi ${name} you are ${age} years old`;
// }

// console.log(greet(person));

// function expression (named)
// const hello = function() {
//   return 'Hello'
// };
// console.log(hello());

// const numbers = [1, 2];
// // const mapperFunction = function(elements) {
// //   return elements + 5;
// // }
// // const newNumbers = numbers.map(mapperFunction);
// // console.log(newNumbers);

// // // const a = numbers.forEach(mapperFunction);
// // console.log(a);

// const mapperFunction = function(elements) { 
//   return elements * 2;
// };
// const newNumbers = numbers.map(mapperFunction);
// console.log(newNumbers);

// const n = [1, 2];
// // const abc = function(element) {
// //   console.log(element);
// // };
// // n.forEach(abc); // .forEach() does not return anything
// // console.log(n)
// const newArray = n.map(function(element) {
//   return element + 10;
// }); // .map() returns a new array
// console.log(newArray);

// const response = {
//   count: 2,
//   data: [{
//     name: 'Luke Skywalker',
//     films: ['Empire Strikes Back', 'The Force Awakens']
//   }, {
//     name: 'Han Solo',
//     films: ['Empire Strikes Back', 'The Force Awakens']
//   }]
// };

// const filterFn = function(element) {
//   return element.name === 'Han Solo'
// };

// const hanssolofilms = response.data.filter(filterFn);
// console.log(hanssolofilms);

const numbers = [1, 2, 3, 4];
// // // return an array of numbers that can be divided by 2
// const filterFun = function(el) {
//   return el % 2 === 0
// }
// const divisibleBy2 = numbers.filter(filterFun);
// console.log(divisibleBy2);

const sum = numbers.reduce(function(prev, current) {
  return prev * current
})
console.log(sum);