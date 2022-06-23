// // const harry = { name: 'Harry Smith', 'favorite beer': 'IPA'}
// // console.log(harry['favorite beer'])
// // harry['favorite beer'] = 'Lager'
// // console.log(harry['favorite beer'])

// // const harry = { name: 'Harry Smith', age: 42, }

// // console.log(harry)
// const numbers = [1, 2, 3, 'many']
// // console.log(numbers['2'])
// // const someNumbers = [, 2, , 9]
// // console.log(someNumbers[0])
// const developers = [
//     'Mark Costales',
//     'developer2',
//     'developer3',
// ]
// numbers.lucky = true
// // console.log(Array.isArray(numbers))
// // console.log(''+[1,2,3])
// const melancholyMagicSquare = [
//     [16,3,2,13],
//     [5,10,11,8],
//     [9,6,7,12],
//     [4,15,14,1]
// ]
// // console.log(melancholyMagicSquare[1][2])
// const harry = {
//                 name:"Harry",
//                 age:42,
//                 "lucky numbers": [17,29],
//                 lucky: false,
//             }
// // console.log(`harry=${JSON.stringify(harry)}`)
// console.log(`harry=${harry}`)
const harry = { name: 'Harry Smith', age: 42 }
console.log(harry)
harry.age = 39
console.log(harry)
delete harry.age
console.log(harry)
harry.salary = 90000
console.log(harry)
console.log(JSON.stringify(harry))
console.log(`harry = ${JSON.stringify(harry)}`)
console.log('harry =', harry)
console.log({harry})
console.log(harry)
