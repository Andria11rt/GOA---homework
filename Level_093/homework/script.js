/* 
Create three arrays: arr1, arr2, and arr3 with the following elements:

Concatenate arr1 and arr2 into a new array called mergedArray.

Use the copyWithin method to copy the first three elements of mergedArray to the positions starting from index 5.

Use the fill method to replace elements from index 6 to the end with the number 0.

Remove the last element from mergedArray using the pop method.

Remove the first element from mergedArray using the shift method.

Add the elements 100 and 200 to the beginning of mergedArray using the unshift method.

Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements of arr3.

9, Use the slice method to create a new array slicedArray that contains the last five elements of mergedArray.

Use the join method to create a string from slicedArray, with elements separated by a comma ,.
*/

// 1
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8]

// 2
let mergedArray = arr1.concat(arr2)

// 3

mergedArray.copyWithin(5, 0, 3)

// 4
mergedArray.fill(0, 6)

// 5
mergedArray.pop()

// 6
mergedArray.shift()

// 7
mergedArray.unshift(100, 200)

// 8
mergedArray.splice(2, 2, arr3)

// 9 
let slicedArray = mergedArray.slice(-5)

// 10
let resultString = slicedArray.join(',')