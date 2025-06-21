
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNums = numbers.filter(num => num % 2 === 0) 

console.log(evenNums);

// -----------------------------------------------------------

let strings = ['apple', 'banana', 'cat', 'dog', 'elephant']

let longString = strings.some(str => str.length > 5)

console.log(longString);
