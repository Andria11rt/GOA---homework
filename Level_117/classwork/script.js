// ? destructing assignment გამოიყენება იმისთვის,
// რომ მას მივანიჭოთ ობიექტიდან მნიშვნელობები და ობიექტიდან ამოვიღოთ თვისებები.


// მაგალითი 1: მასივიდან მნიშვნელობების ამოღება.

// შევქმნათ მასივი.
// let arr = [1, 2, 3, 4, 5];

// მასივიდან ამოვიღოთ მნიშვნელობები და შევინახოთ ცვლადებში. a=1 b=2 c=3 d=4 e=5
// let [a, b, c, d, e] = arr;

// console.log(a, b, c, d, e); // 1 2 3 4 5
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4
// console.log(e); // 5


// მაგალითი 2: ობიექტიდან თვისებების ამოღება.
/*
let person = {
  name: 'Davit',
  lastName: 'Janezashvili'
};

let {name, lastName} = person;

console.log(name);
console.log(lastName);
*/



// მაგალითი 3: მასივიდან მნიშვნელობების ამოღება + default პარამეტრები.

// შევქმნათ მასივი.
// let arr2 = [1];

// მასივიდან ამოვიღოთ მნიშვნელობები და შევინახოთ ცვლადებში.
// ამასთან ერთად შევქმნათ კიდევ ერთი ცვლადი და ვუგულოთ საწყისი მნიშვნელობა.
// let [a, b = 10] = arr2;

// დავბეჭდოთ a და b ცვლადები.
// console.log(a, b); // 1, 10

// console.log(a); // გამოვა: 1
// console.log(b); // გამოვა: 10



// ! მაგალითი 4: ჩაშენებული მასივიდან მნიშვნელობების ამოღება + ჩაშენებული ობიექტიდან მნიშვნელობების ამოღება.

// let nestedArr = [1, 2, 3, [4, 5]];

// let [a, b, c, [d, e]] = nestedArr;

// console.log(a); // გამოვა: 1
// console.log(b); // გამოვა: 2
// console.log(c); // გამოვა: 3
// console.log(d); // გამოვა: 4
// console.log(e); // გამოვა: 5



// ! ჩაშენებული ობიექტი.
/*
let person = {
  name: 'Davit',
  address: {
    city: 'Tbilisi',
    zip: 1322
  }
};
*/
// let {name, address: {city, zip}} = person;

// console.log(name); // გამოვა: 'Davit'
// console.log(city); // გამოვა: 'Tbilisi'
// console.log(zip); // გამოვა: 13220


// 
/*
let obj = {
  name: 'Davit',
  age: 18
};

let {name: userName, age: userAge} = obj;

let obj2 = {
  name: 'amiko',
  age: 11
};

let {name, age} = obj2;

console.log(userName);
console.log(userAge);

console.log();
*/

let firstName = "John";
let lastName = "Doe";

// Destructuring          John        Doe
[firstName, lastName] = [lastName, firstName];