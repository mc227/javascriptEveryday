// function sum(arr) {
//     let sum = 0;
//     for (const val of arr) {
//         sum += val;
//     }
//     return sum;
// }

function sum(arr) {
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue)
}

console.log(sum([1,3,5,7]))