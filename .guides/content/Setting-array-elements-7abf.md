It is easy to set an array element using the same techniques.

`numArray[4] = 50` sets the fifth element of array called `numArray` to `50`.

## Defining an array
If you want to create an array and you know the elements already (which is not that often the case) then you can do it like this.

```javascript
numArray = [1, 55, 3, 16]
```

Often, you will not have any elements to start with and will want to add them later. 

If this is the case, you should create an empty array like this first.

```javascript
numArray = []
```

## Run the code
Take a look at the code on the left. 

{Run code}(node ./content/1-arrays/example2.js)

This shows how you:

1. Define a new array.
1. Assign values to array elements (note we are not assigning values to *contiguous* elements).
1. Show each array element in the console.

When you run the code, notice how some of the elements display as *undefined*. The reason for this is that we only assigned elements 0 and 4. JavaScript automatically inserts array elements in-between for us. Because the elements that JavaScript has inserted are undefined they don't have any values assigned to them.
