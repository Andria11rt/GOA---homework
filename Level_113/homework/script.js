
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNums = numbers.filter(num => num % 2 === 0) 

console.log(evenNums);

// --------------------------------------------------------------

let users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 19 },
  { name: 'David', age: 18 }
]

let Adults = users.every(user => user.age >= 18)

console.log(Adults);