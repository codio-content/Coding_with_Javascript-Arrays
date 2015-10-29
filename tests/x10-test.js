
var test = require('../test-fw.js');

test.tests('/home/codio/workspace/challenges/x10.js', [{
    inputs: [1, 2, 3, 4, 5, 6, 5, 3],
    outputs: [[ 1, 2, 15, 4, 5, 30 ]],
  }, {
    inputs: [1, 2, 3, 4, 5, 6, 2, 7],
    outputs: [[1, 2, 3, 4, 5, 6]],    
    message: 'Your code is not handling the case where there are less thatn N elements in the array.'
  }
]);
