
// Get input from the command line
var N = process.argv.pop()
var M = process.argv.pop()
var numbers = process.argv.slice(2)

// Make sure JavaScript treats everything as Integers
N= parseInt(N)
M= parseInt(M)
for (var i=0; i < numbers.length; i++ ) {
  numbers[i]= parseInt(numbers[i])
}

for (var i=N-1; i < numbers.length; i += N ) {
  numbers[i] = numbers[i] * M
}
console.log(numbers)