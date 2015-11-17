
// Get input from the command line
var numbers = process.argv.slice(2)

// Arrays to hold our output
var oddArray = [] 
var evenArray = []

// loop through the array
for (var i=0; i < numbers.length; i++ ) {
  if (numbers[i] % 2 == 0) {             // even?
    evenArray.push(parseInt(numbers[i])) // yes
  }
  else {
    oddArray.push(parseInt(numbers[i]))  // no
  }
}

console.log(evenArray)        // output even
console.log(oddArray)         // output odd