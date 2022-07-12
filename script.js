// Why did the programmer quit their job?
// They didn't get arrays (a raise...lol)

const numbers = [1, 2, 3, 4, 5, 6, 7]; // first element is accessible at index 0
const x = [1, 'b', true, { a: 'hello' }];
console.log(numbers[1]);

// const newNumbers = numbers.slice(2, 5); // slice start index, end index
// console.log(newNumbers)
// console.log(numbers)
// console.log(numbers.splice(0, 3)); // start index, length
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);
// numbers.push(4444)
// console.log(numbers);
// numbers.push(123)
// console.log(numbers)
// console.log(newNumbers)
// console.log(numbers);
// console.log(numbers[3]);
// console.log(numbers[1])

// console.log(numbers.length)
// delete numbers[1]
// console.log(numbers.length)
// console.log(numbers)


// const a = numbers.splice(0, 2)
// console.log(numbers);
// console.log(numbers.length)

// numbers[0] = 10
// numbers[18] = 15;
// console.log(numbers)

// numbers.push(15)
// console.log(numbers);

// const a = [1, 2];
// const b = [3, 4];
// const x = [5, 6];

// const c = a.concat(b).concat(x);
// console.log(c)
// ES6
// const c = [...a, ...b, ...x];
// console.log(c);

// adding a new element to the beginning of an array
// const num = [1, 2];
// num.unshift(0);
// console.log(num);

// console.log(numbers);
// console.log(numbers.at(0))
// console.log(numbers.at(-1)) // console.log(numbers[numbers.length - 1])

// console.log(a.includes(2))

// ES6 array destructuring

const x = [1, 2];
// const x1 = x[0]; // 1
// const x2 = x[1]; // 2

// const [x1, x2] = x;
// console.log(x1, x2);

// const names = ['John', 'Kate'];
// const [name1, name2] = names;
// console.log(name2)

// map, filter, reduce

// const numbers = [1, 2, 3, 4];
// const squared = numbers.map(function(element) {
//   return element * element; 
// });
// console.log(squared);

// const filtered = numbers.filter(function(element) {
//   return element % 2 === 0
// })
// console.log(filtered);

// reducing the values of the array to a single value
// const summed = numbers.reduce(function(rollingSum, element) {
//   console.log('element is', element);
//   console.log('rollingSum is', rollingSum);
//   return rollingSum * element;
// });
// console.log(summed);