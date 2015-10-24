
var test = require('./test-fw.js');

test.tests('/home/codio/workspace/max.js', [{
    inputs: [1, 5, 8, 23, 78, 22, 0],
    outputs: [4],
  }, {
    inputs: [1,1,1,1,1],
    outputs: [0],
    message: 'Your code is not handling the scenario where every element in the array is the same.'
  }, {
    inputs: [1,1,1,1,2],
    outputs: [4],
  }, 
]);
