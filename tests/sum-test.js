
var test = require('../test-fw.js');

test.tests('/home/codio/workspace/challenges/sum.js', [{
    inputs: [1,3,5,7,9],
    outputs: [25],
  }, {
    inputs: [0,0,0],
    outputs: [0],
  }, {
    inputs: [-2,-2,-2],
    outputs: [-6],
  },
]);
