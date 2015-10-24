Notice the `input0` array is coming from the command line arguments. Since `process.argv` is an array, we just have to remove the first two elements that we do not want, using the array function `slice(2)`.
{Check It!|assessment}(test-3916901719)

|||guidance
### Solution
```javascript
// Get input array from the command line
input0 = process.argv.slice(2)

// variable to keep up with the total 
var total= 0 

// loop through the array
for (var i=0; i < input0.length; i++ ) {
  total += input0[i] // add this array value to the total
}
console.log(total) // output results
```
|||