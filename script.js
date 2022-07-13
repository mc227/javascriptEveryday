// if (true) {
//   let x = 1;
// }

// console.log(x)

let x;
{
  x = 1;
  console.log("first block", x);
}
// {
//   x = 2;
//   console.log("second block", x);
// }
// x = 3;
// console.log("outside the block", x);

// if (1 === 1) {
//   let anotherNumber = 2
  
// }

// console.log(anotherNumber);

// {
//   let y = 10;
//   console.log(y);
//   let y = 20; // Uncaught SyntaxError: Identifier 'y' has already been declared
//   // y = 20;
//   console.log(y);
// }


// let x = 1;
// try {
//   console.log('X in try', x)
//   throw new Error('error')
// } catch (error) {
//   console.log('X in catch', x)
// }