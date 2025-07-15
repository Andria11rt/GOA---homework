// Object Literal Type
/*
let user1 = {
  name: 'John',
  age: 30
};
*/

// Object Constructor Type
/*
function Users(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new Users('Davit', 18);
let user2 = new Users('Nika', 118);
let user3 = new Users('AAA', 128);

console.log(user1);
console.log(user2);
console.log(user3);
*/
/*
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

let dog = new Dog('Rex');
dog.speak(); // Rex barks.
*/

// class არის es6 ის თვისება, რომელიც უზრუნველყოფს ობიექტებთან მუშაობას,
// ობიექტებთან მუშაობა ხდება უფრო სტრუქტურული, მარტივი და სუფთაა
/*
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name} --- price: ${this.price}`);
  }
}

let product1 = new Product('T-shirt', 29.99);
let product2 = new Product('pants', 85.99);

product1.displayProduct();
product2.displayProduct();
*/
// console.log(product1);
// console.log(product2);


let a1 = Number(prompt('Enter A:'));
let b1 = Number(prompt('Enter B:'));

class Calculator {
  add(a, b) {
    return a + b;
  }

  substract(a, b) { 
    return a - b;
  }
}

let calculation = new Calculator();

console.log(calculation.add(a1, b1));
console.log(calculation.substract(a1, b1));

