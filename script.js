const quotient = {
  numbers: [1,2,3,4,5,6,7],
  results: [],
  divideFn: function(divisor) {
    return this.numbers.map((number) => {
      if(number % divisor === 0) {
        return this.results.push(number);
      }
    })
  }
};

quotient.divideFn(2);
console.log(quotient.results)