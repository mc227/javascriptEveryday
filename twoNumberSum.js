// let array = new Array(1, 2, 6, 8);
let array = new Array(8, 6, 2, 1);
let targetSum = 14;

// // Algo expert solution 1
// // O(n^2) time | O(1) Space
// function twoNumberSum(array, targetSum) {
//     for(let i  = 0; i < array.length-1; i++) {
//         for (let j = i + 1; j < array.length; j++){
//             if(array[i] + array[j] === targetSum) {
//                 return [array[i], array[j]]
//             }
//         }
//     }
//     return []
// }
// console.log(twoNumberSum(array, targetSum))

// // Algo expert solution 2
// // O(n) time | O(n) Space
// function twoNumberSum(array, targetSum) {
//     let nums = {}
//     for(let i = 0; i < array.length; i++) { 
//         let potentialMatch = targetSum - array[i]
//         if (potentialMatch in nums) {
//             return [potentialMatch, array[i]]
//         } else {
//             nums[array[i]] = true
//         }
//     }
//     return []
// }
// console.log(twoNumberSum(array, targetSum))

// Algo expert solution 3
// O(nlog(n)) time | O(1) Space
function twoNumberSum(array, targetSum) {
    let left = 0
    let right = array.length - 1
    array.sort();
    while(left < right) {
        if (array[left] + array[right] === targetSum) {
            return [array[left], array[right]]
        } else if(array[left] + array[right] < targetSum) {
            left++;
        } else if(array[left] + array[right] > targetSum) {
            right--;
        }
    }
    console.log(array)
    return []
}
console.log(twoNumberSum(array, targetSum))