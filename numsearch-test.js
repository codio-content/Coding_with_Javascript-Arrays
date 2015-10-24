
var test = require('./test-fw.js');

test.tests('/home/codio/workspace/numsearch.js', [{
    inputs: [1,3,11,42,12, 42],
    outputs: [3],
  }, {
    inputs: [1,3,11,42,12, 2],
    outputs: [-1],
  }, {
    inputs: [1],
    outputs: [-1],
    message: 'Your code is does not handle the scenario where an empty array is input'
  }
]);
