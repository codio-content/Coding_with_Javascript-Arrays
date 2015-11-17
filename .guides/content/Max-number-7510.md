{Check It!|assessment}(test-1116072670)

|||guidance
### Solution
```javascript
// Get input from the command line
var numbers = process.argv.slice(2)

// highest number so far
// initialize to the lowest possible value.
var maxSoFar= 0 - Number.MAX_VALUE
          
// position of highest number
// initialize to -1
var indexOfMax= -1

// loop through all the values in numbers
for (var i=0; i < numbers.length; i++) {
  var thisNumber= parseInt(numbers[i])
  if (thisNumber > maxSoFar) {
    maxSoFar = thisNumber
    indexOfMax = i
  }
}

// output
console.log(indexOfMax)

```
|||