Let's take a look at the code on the left hand side. We have 2 input variables. You can see how each of them has been defined as an array.

Each array has the same number of elements, so we can *iterate* through the array using a loop. 

{Run code}(node run-user.js 1-arrays/example1.js)

## Length of an array
Notice that we are using a special *property* of the array, `length`. This tells us how many elements there are in the array.

## Accessing an array element
Note that `index` is our counter variable. Using our index, we can get the value of any individual array element.

Take a look at the debug statement `console.log( input1[index] + ' is ' + input0[index] )`. You can see how we reference elements.

- `input1[0]` references the first element of `input1`, `'Richard'`.
- `input0[2]` references the 3rd element of `input0`, `68`.

## Play with the code
Feel free to play with the code. If you want to restore it to its initial state, select 'Reset Chapter' from the Settings menu at the top of this page.
