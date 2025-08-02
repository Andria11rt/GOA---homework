
/*// object literal
let obj = {
  prop1: 'val1',
  prop2: 'val2'
}

// object constructor
function Product(name, price) {
  this.name = name;
  this.price = price;
}

let prod1 = new Product('T-shirt', 10.99);
let prod2 = new Product('shorts', 20.99);

console.log(prod1);
console.log(prod2);
*/
/*
// pascal case
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

let animal1 = new Animal('Zebra');

animal1.speak()

console.log(animal1);
*/







class MathStuff {
  constructor(name) {
    this.name = name;
  }

  static add(a, b) {
    return a + b;
  }
}

console.log(MathStuff.add(1, 4));

let obj1 = new MathStuff('პითაგორას თეორემა');

obj1.add(1, 2)

console.log(obj1);