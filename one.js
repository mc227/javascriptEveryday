
// algo expert solution 1
// function twoNumberSum(array, targetSum) {
    
//     for(let i = 0; i < array.length; i++) {
//         let firstNum = array[i];
//         for(let j = i + 1; j < array.length; j++) {
//             let secondNum = array[j]
//             if (firstNum + secondNum === targetSum) {
//                 return [firstNum, secondNum]
//             }
//         }
//     }
//     return [];
// }

// my solution 
function twoNumberSum(array, targetSum) {
    let output = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < i; j++) {
            if (array[i] + array[j] === targetSum) {
                output.push(array[i])
                output.push(array[j])
            }
        }
    }
    return output
}


let rank = new Array(2, 4, 6, 8);
let targetSum = 14;
console.log(twoNumberSum(rank, targetSum))

