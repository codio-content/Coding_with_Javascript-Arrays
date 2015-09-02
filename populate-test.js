
var test = require('./test-fw.js');

test.tests('/home/codio/workspace/populate.js', [{
    inputs: [8],
    outputs: [[0,10,20,30,40,50,60,70]],
  }, {
    inputs: [0],
    outputs: [[]],
    message: 'Your code does not hande the scenario when "0" is input'  
  }, {
    inputs: [1],
    outputs: [[0]],
    message: 'Your code does not hande the scenario when "1" is input'  
  }, {
    inputs: [-2],
    outputs: [[]],
    message: 'Your code does not hande the scenario when a negative number is input'  
  }                                                 
]);
