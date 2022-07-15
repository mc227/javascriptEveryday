const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.length);

// for loop
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for...of loop
// for (let num of numbers) {
//   console.log(num);
// }

// do-while loop
// let i = 0;
// do {
//  // i = i + 1 -> i += 1 -> i++ ||||| i = i - 1 -> i -= 1 -> i--
//   console.log(numbers[i]);
//   // i += 1;
//   i++;
// } while (i < numbers.length)

// while loop
// let n = 0;
// let square;
// while (n < 3) {
//   n++; // n = n + 1 = n += 1 = n++ ++ will always increment by one - google: ++n | n++ (pre-increment and post increment)
//   square = n * n;
//   console.log(square);
// }

const person = {
  name: 'Steve',
  age: 30,
  hobbies: ['waterpolo', 'reading']
};

// "for...in" loop
// for (let prop in person) {
//   console.log(prop + ' has this value: ' + person[prop])
// }

// "for...of" loop (ES6+)
// const nums = [1, 2, 3, 4];
// for (let num of nums) {
//   console.log(num)
// }
for (let hobby of person.hobbies) {
  console.log(hobby);
}

for (let i = 0; i < person.hobbies.length; i++) {
  console.log(person.hobbies[i])
}

console.log(Object.keys(person).slice(0, 2)) // first 2 props
console.log(Object.values(person).slice(0, 2)) // first 2 values
for (let x of Object.keys(person).slice(0, 2)) {
  console.log(person[x])
}

