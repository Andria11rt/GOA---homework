/*
Task: Working with Strings and Numbers
Objective: Use array methods to manipulate arrays containing both numbers and strings.

Instructions:

Create two arrays, numsArray and strArray, with the following elements:

Concatenate numsArray and strArray into a new array called combinedArray.

Use the copyWithin method to copy the first three elements of combinedArray to the positions starting from index 4.

Use the fill method to replace the elements from index 2 to index 4 with the string "filled".

Remove the last element from combinedArray using the pop method.

Remove the first element from combinedArray using the shift method.

Add the elements 100 and 200 to the beginning of combinedArray using the unshift method.
*/

let numsArray = [1, 2, 3, 4, 5]

let strArray = ["a", "b", "c", "d", "e"]


let combinedArray = numsArray.concat(strArray)
console.log(combinedArray);

combinedArray.copyWithin(4, 0, 3)
console.log(combinedArray);

combinedArray.fill(2, 5)
console.log(combinedArray);

combinedArray.pop()
console.log(combinedArray);

combinedArray.shift()
console.log(combinedArray);

combinedArray.unshift(100, 200)
console.log(combinedArray);
