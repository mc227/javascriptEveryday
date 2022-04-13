
/*
This is algo expert's first solution to twoNumberSum
supposedly this is O(n^2)T | O(1)S
*/
function twoNumberSum(someArray,someSum) {

    // loop through array first time
    // loop through array second time
    // sum item in first loop to second loop to check if equals to the Sum
    // if equal then return 
    // if not try a new sum.
    for(let i = 0; i < someArray.length; i++) {
        let firstNum = someArray[i];
        for(let j = i + 1; j < someArray.length; j++) {
            let secondNum = someArray[j];
            if (firstNum + secondNum === someSum) {
                return new Array(firstNum, secondNum);
            }
        }
    }
    return [];
}



let rank = new Array(1, 2, 6, 8);
let targetSum = 14;
// console.log("rank: ",rank)
// console.log("targetSum: ",targetSum)
console.log(twoNumberSum(rank, targetSum))
