input0 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
oddArray = []
evenArray = []

for (i=0, o=0, e=0; i<input0.length; i++ ) {
  if (input0[i] % 2 == 0) {
    oddArray[o++] = input0[i]  
  }
  else {
    evenArray[e++] = input0[i]      
  }
}

output(oddArray)
output(evenArray)