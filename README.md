# mean-number-generator

generates random numbers and their mean value

### install

```
npm install mean-number-generator --save
```

### use

```javascript
const mean = require('mean-number-generator');

const numberOfSets = 10;
const numberOfNumbersInEachSet = 5;
const minimumNumber = 1;
const maximumNumber = 100;

const sets = mean.generateBatchSet(numberOfSets, numberOfNumbersInEachSet, minimumNumber, maximumNumber);

console.log(sets);
/*
output:
[ { numbers: [ 46, 41, 53, 30, 19 ], average: 37.8 },
  { numbers: [ 64, 36, 47, 78, 23 ], average: 49.6 },
  { numbers: [ 97, 66, 42, 20, 12 ], average: 47.4 },
  { numbers: [ 33, 32, 1, 77, 99 ], average: 48.4 },
  { numbers: [ 22, 30, 86, 28, 41 ], average: 41.4 },
  { numbers: [ 97, 9, 14, 24, 71 ], average: 43 },
  { numbers: [ 74, 91, 91, 42, 66 ], average: 72.8 },
  { numbers: [ 92, 34, 64, 4, 76 ], average: 54 },
  { numbers: [ 100, 59, 53, 43, 42 ], average: 59.4 },
  { numbers: [ 11, 94, 55, 99, 25 ], average: 56.8 } ]
*/
```

### license

MIT