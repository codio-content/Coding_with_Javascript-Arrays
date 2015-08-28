{Run code}(node run-user.js numsearch.js)

{Check It!|assessment}(test-1147907621)

|||guidance
## Solution
```javascript
input0 = [1,3,11,42,12]
input1 = 42

for ( i=0, found=0; i< input0.length; i++ ) {
  if ( input0[i] == input1) {
    found = i
    // The break statement exits the loop
    break
  }
}
if (found==0) {
  output(-1)
}
else {
  output(found)
}
```
|||