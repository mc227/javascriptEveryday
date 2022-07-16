// // https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// // https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// // Strings
// const a = String(999); // explicit string "999"
// console.log(typeof a);

// const b = 999 + '0'; // implicit string --> "999"
// console.log(typeof b);

// // Primitives can be converted to strings
// String(true); // "true"
// console.log(typeof String(true));

// // For booleans
// Boolean(10); // explicit
// !!10 // implicit (logical operator)
// if (10) { } // implicit (logical operator) --> if (true)

// // Numbers
// Number('999'); // explicit typeof Number('999') // number
// console.log(typeof +'999'); // implicit

// // non primitive type coercion needs to first convert to a primitive value, then to the final type
// // non primitives are coerced to true
// // objects are converted to primitives via [[ToPrimitive]] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)
// true + false; // 1 -> 1 + 0
// console.log(true + false)
// 20 / "2"; // 10 -> 20 / 2
// console.log(20/"2")
// "1" + 1 + 1; // "111" ->  "1" + "1" + "1" -- string concatination
// console.log("1" + 1 + 1)
// 1 + 1 + "1"; // "21" -> 1+1 = 2 ... 2 + "1" -> "21"
// console.log(1 + 1 + "1")
// [1] > null; // true
// console.log(typeof [1])
// 'true' == true; // false -> NaN == 1 -> false
// console.log('true' == true)
// 'false' == false; // false -> NaN == 0 -> false
// console.log('false' == false)
// null == ''; // false (null is only equal to null or undefined)

// !+[]+[]+![]; // 'truefalse' -> (!+[]) + [] + (![]) -> !0 + [] + false = true + [] + false = true + '' + false 
// // just for fun
// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase()); // "banana"

// console.log(1 == "1"); // value comparison, true
// console.log(1 === "1"); // value AND type, false
// console.log(1 === 1); // true
// console.log(1 !== 1); // false;