
var test = require('./test-fw.js');

test.tests('/home/codio/workspace/split.js', [{
    inputs: [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
    outputs: [[ 2, 4, 6, 8 ],[ 1, 3, 5, 7, 9 ]],
  }, {
    inputs: [[1, 3,  5, 7, 9]],
    outputs: [[],[ 1, 3, 5, 7, 9 ]],
    message: 'Your code is not handling the case where there are no positive numbers in the input array.'
  }, {
    inputs: [[2,4,6]],
    outputs: [[2,4,6],[]],
    message: 'Your code is not handling the case where there are no negative numbers in the input array.'
  }
]);
