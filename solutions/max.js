
input0 = [1, 5, 8, 23, 78, 22, 0]

for ( i=0, max=0, pos=-1; i < input0.length; i++) {
  if ( input0[i] > max) {
    max = input0[i]
    pos = i
  }
}

output(pos)
