
input0 = [10, 20, 30, 40, 50, 60]

for ( index = 0; index < 3; index++ ) {
  input0.unshift(index)
  console.log(input0) 
}

console.log( '--- Remove \'em')

for ( index = 0; index < 3; index++ ) {
  input0.shift()
  console.log(input0) 
}
