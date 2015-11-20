We assume that you have already done the Flode Arrays Unit and are now familiar with the concept of arrays. (If not, we recommend that you do. It is available in the `An Introduction to Programming > Flode` course)

{Run the code on the left}(node ./content/1-arrays/example1.js)

## Creating arrays
Array creation in Javascript works in exactly the same way as in Flode. 

### String arrays
You create a string array like this

```javascript
strArray = [ 'Alice', 'Shahneila', 'Bobx, 'Tariq' ]
```

### Number arrays
Here's an example of a number array

```javascript
numArray = [1, 3.141, 5, 17.1, 100]
```

### Empty array
If you plan to create your own array then you need to create an empty array variable before you add data to it.

```javascript
numArray[0] = 4
```

will fail if the array was not already created. So, this is the correct way.

```javascript
numArray = []
numArray[0] = 4
```

