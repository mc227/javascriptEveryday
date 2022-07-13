let name = 'Jack'; // string 'x' "y"
const age = 33; // integer / number
const x = 1.2; // "number"
const admin = false; // boolean
const bigNumber = 909949594949294n; // BigInt
const a = function() {}; // Function
const b = ['str', 1, false]; // Array
const arr = [[1, 1], [2, 2]] // Multi dimensional array (data type: Array)
const arr2 = [{}, {}]; // array of objects (data type: Array)
const c = {
  name: 'Pete',
  age: 22,
  hobbies: ['tennis', 'boardgames'],
  address: {
    zip: 11111,
    city: "London"
  },
  greet: function() { return 'hello '}
}; // Object
console.log(typeof b);
console.log(b instanceof Array);
console.log(Array.isArray(b));
console.log(b instanceof Array);
console.log(typeof name)

const result = 0.2 + 0.1; // 0.3
console.log(result); // 0.30000000000000004

const s1 = Symbol(); // unique value (x is not the value, x is a description)
const s2 = Symbol(); // unique value (x is not the value, x is a description)
console.log(s1 === s2);

const o = {
  name: 'Peter'
};

Object.seal(o);
o.name = 'John'
o.age = 11;
console.log(o);