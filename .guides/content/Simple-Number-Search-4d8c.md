{Check It!|assessment}(test-1147907621)

|||guidance
## Solution
```javascript

// Get input from the command line
N = process.argv.pop()          // Remove the last argument to get N
input0 = process.argv.slice(2)  // use the rest for our array

// Your code goes here

//
// Have we found the value yet?
var foundIt= false  // initialize to false

// loop until we have found the value 
// or we are out of elements to check
for(var i=0; !foundIt && i < input0.length; i++){
  if(input0[i] == N){      // a match?
    console.log(i)         // Yes! output it.
    foundIt= true          // foundIt is true
  }
}

if(!foundIt){       // Did we find it?
  console.log(-1)   // Yes - print a -1
}
```
|||