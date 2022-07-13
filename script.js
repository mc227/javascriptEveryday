if (true) {
    // const num = 1;
    var num = 1;
    console.log(num);
    num = 2; // Assignment to constant variable.
    console.log(num); // 1 not printed
  }
    
  
//   const name = 'John';
let name = 'John';
name = 'Susan';
console.log(name);
  
const myObj = {
name: 'John'
};
  
myObj.name = 'Susan';
console.log(myObj);
  
  
{
    const myName = 'Steve'; 
    const abc = 'Test';  
    console.log(myName)
}
  
const person = Object.freeze({
    name: 'John'
});
  
person.name = 'Samuel';
person.age = 23;
console.log(person.name, person.age);