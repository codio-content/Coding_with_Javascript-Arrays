input0 = [1, 2, 3, 4, 5, 6]
input1 = 5
input2 = 3

for ( i=input2 - 1; i < input0.length; i += input2 ) {
  input0[i] = input0[i] * input1
}

output(input0)
