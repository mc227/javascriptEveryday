// // // const harry = { name: 'Harry Smith', 'favorite beer': 'IPA'}
// // // console.log(harry['favorite beer'])
// // // harry['favorite beer'] = 'Lager'
// // // console.log(harry['favorite beer'])
// // // const harry = { name: 'Harry Smith', age: 42, }
// // // console.log(harry)
// // const numbers = [1, 2, 3, 'many']
// // // console.log(numbers['2'])
// // // const someNumbers = [, 2, , 9]
// // // console.log(someNumbers[0])
// // const developers = [
// //     'Mark Costales',
// //     'developer2',
// //     'developer3',
// // ]
// // numbers.lucky = true
// // // console.log(Array.isArray(numbers))
// // // console.log(''+[1,2,3])
// // const melancholyMagicSquare = [
// //     [16,3,2,13],
// //     [5,10,11,8],
// //     [9,6,7,12],
// //     [4,15,14,1]
// // ]
// // // console.log(melancholyMagicSquare[1][2])
// // const harry = {
// //                 name:"Harry",
// //                 age:42,
// //                 "lucky numbers": [17,29],
// //                 lucky: false,
// //             }
// // // console.log(`harry=${JSON.stringify(harry)}`)
// // console.log(`harry=${harry}`)
// const harry = { name: 'Harry Smith', age: 42 }
// console.log(harry)
// harry.age = 39
// console.log(harry)
// delete harry.age
// console.log(harry)
// harry.salary = 90000
// console.log(harry)
// console.log(JSON.stringify(harry))
// console.log(`harry = ${JSON.stringify(harry)}`)
// console.log('harry =', harry)
// console.log({harry})
// console.log(harry)
// let numbers = [3,1,4,1,5,9]
// let [first, second] = numbers
// // console.log(first)
// // console.log(second)
// // let [f, s, ...remainder] = numbers
// // console.log(remainder)
// let [f, s, ...others] = [3]
// console.log(f)
// console.log(s)
// console.log(others)
// const harry = { name: 'Harry', age: 42 }

// // let { name, age } = harry
// // console.log(name)
// // console.log(age)
// let {name, ...rest} = harry
// console.log(name)
// console.log(rest)
// let { nickname = 'None' } = harry
// console.log(nickname)

// let { name, nickname = name} =  harry
// console.log(nickname)

