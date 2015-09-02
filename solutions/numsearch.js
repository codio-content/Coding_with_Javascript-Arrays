
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
