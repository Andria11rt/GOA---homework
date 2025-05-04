
let array1 = [1, 2, 3, 4, 5, 6]

let array2 = [7, 8, 9, 10, 11, 12]

let concatArray = array1.concat(array2)

console.log(concatArray.copyWithin(0, 2, 10));

let concatArray1 = concatArray.splice(0, 0, 0, 0, 0)

let re