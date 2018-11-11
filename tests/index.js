const mean = require('../index');

const numberOfSets = 10;
const numberOfNumbersInEachSet = 5;
const minimumNumber = 1;
const maximumNumber = 100;

const sets = mean.generateBatchSet(numberOfSets, numberOfNumbersInEachSet, minimumNumber, maximumNumber);

console.log(sets);