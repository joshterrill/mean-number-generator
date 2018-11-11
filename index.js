const self = {
  generateNumber: (min, max, decimals) => {
    let num = Math.random() * (max - min) + min;
    if (decimals) num = num.toFixed(decimals);
    return num;
  },
  generateWholeNumber: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  getSum: (total, num) => {
    return total + num;
  },
  
  findMean: (numbers) => {
    return {numbers, average: (numbers.reduce(self.getSum)/numbers.length)};
  },
  generateSet: (howManyNumbers, min, max) => {
    const numbers = [];
    while (numbers.length < howManyNumbers) {
      numbers.push(self.generateWholeNumber(min, max))
    }
    return self.findMean(numbers);
  },
  generateBatchSet: (howManySets, howManyNumbers, min, max) => {
    const sets = [];
    while (sets.length < howManySets) {
      sets.push(self.generateSet(howManyNumbers, min, max))
    }
    return sets;
  },
};

module.exports = self;