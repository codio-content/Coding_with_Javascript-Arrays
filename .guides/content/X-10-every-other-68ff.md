{Check It!|assessment}(test-4030970452)

|||guidance
### Solution
```javascript

// Get input from the command line
N = process.argv.pop()
M = process.argv.pop()
input0 = process.argv.slice(2)

// Your code goes here

for ( i=N - 1; i < input0.length; i += N ) {
  input0[i] = input0[i] * M
}

output(input0)
```
|||