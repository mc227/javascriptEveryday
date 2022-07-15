// const person = {
//   name: 'James Bond'
// };

// console.log(person.name); // dot-walking

// const person = {
//   name: 'Steve',
//   age: 30,
//   hobbies: ['waterpolo', 'reading'], // person.hobbies.length === 2
//   address: {
//     zip: 1234,
//     street: 'John St, London'
//   },
//   isAdmin: false,
//   'favourite food': 'apple',
//   // the below is ES5
//   // greet: function(name) {
//   //   return 'Hello ' + name;
//   //   // return `Hello ${name}!`;
//   // },
//   // the below is ES6
//   greet(name) {
//     return `Hello ${name}!`; // template literal syntax
//   },
// };

// console.log(person.greet('John'))

// const street = person.address.street; // dot walking
// console.log(street);
// const hobbies = person.hobbies;
// console.log(hobbies);
// const favFood = person['favourite food'];
// console.log(favFood);

// ES6 = ECMA2015 = ECMA-2015 = ECMA 2015 = ES 2015 (Object Destructuring)
// let name = person.name;
// const age = person.age;
// console.log(name, age);

// const { name, age, isAdmin } = person;
// console.log(name, age, isAdmin);
// const { name: firstName, age: myAge } = person;
// console.log(firstName, myAge);


// REST API / JSON.parse() JSON.stringify()
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
// const { count, data: [{ name: characterName, films: [firstFilm, secondFilm] }]} = response;
// console.log(characterName, secondFilm);

// const { data } = response;
// const hanSolo = data.filter(data => data.name === 'Han Solo'); // filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// console.log(hanSolo)
  
// ES 5
// const name = 'Steve';
// const age = 30;
// const myObj = {
//   name: name,
//   age: age
// }
// // console.log("here")
// console.log(myObj);
// ES6
// const x = {
//   name,
//   age
// };
// console.log(x);

// ES 6
// function nameMe(name) {
//     return {
//         [name.toLowerCase()]: {
//             message: `My name is ${name}`
//         }
//     };
// }

// console.log(nameMe('John'));
  
  // ES 6
// const x = {
//     name: 'Jack',
//     greet() {
//         return `Hi ${this.name}!`
//     }
// };
  
// console.log(x.greet());


const person = {
    name: 'James Bond',
};
  
console.log(
// Object.keys(person),
// Object.values(person),
Object.entries(person)
)
  
  Object.defineProperty(person, 'name', {
    enumerable: true,
    configurable: false,
    get() {
      return 'Redacted by MI5'
    }
    // set()
  });
  
  person.name = 'M';
  console.log(person.name);
  
  const x = 'propKey';
  
  const myObj = {
    [x]: 'whatever is my value'
  };
  
  console.log(myObj);
  
  