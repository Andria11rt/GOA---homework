
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' }
]

let userWithId3 = users.find(user => user.id === 3)

console.log(userWithId3);

// -----------------------------------------------------------------

let colors = ['red', 'green', 'blue', 'yellow', 'purple']

colors.reverse();

console.log(colors);

// -----------------------------------------------------------------

let productPrices = [25.50, 10.00, 75.25, 5.75, 50.00]

productPrices.sort((a, b) => b - a);

console.log(productPrices);