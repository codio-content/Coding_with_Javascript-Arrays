You can easily set an array element with the same techniques.

`numArray[4] = 50` sets the 5th element of array called `numArray` to `100`.

## Defining an array
If you want to create an array and you know the elements already (which is not that often the case) then you can do it like this.

```javascript
numArray = [1, 55, 3, 16]
```

But often you will not have any elements to start with and will want to add them later. 

In this case, you should create an empty array like this first.

```javascript
numArray = []
```

## Run the code
Take a look at the code on the left. 

{Run code}(node run-user.js ./1-arrays/example2.js)

This shows how you 

1. Define a new array
1. Assign values to array elements (note we are not assigning values to *contiguous* elements)
1. Show each array element in the console

When you run the code, notice how some of the elements are *undefined*. This is because we only assigned elements 0 and 4. Javascript automatically inserts array elements in between but they are at that point undefined as they don't have any values assigned to them.
