function twoNumberSum(array, targetSum) {
    
    for(let i = 0; i < array.length; i++) {
        let firstNum = array[i];
        for(let j = i + 1; j < array.length; j++) {
            let secondNum = array[j]
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum]
            }
        }
    }
    return [];
}

let rank = new Array(2, 4, 6, 8);
let targetSum = 6;
console.log(twoNumberSum(rank, targetSum))

