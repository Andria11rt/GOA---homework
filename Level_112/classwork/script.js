//                                    find
// find() is a method that looks for the first element in an array that meets a condition and returns that element.
// If no element is found, it returns undefined.

// find() მეთოდი მასივში ეძებს პირველ ელემენტს, რომელიც აკმაყოფილებს პირობას.
// თუ მნიშვნელობა მოიძებნება, მაშინ დააბრუნდება მოძებნილი მნიშვნელობა, თუ არადა დააბრუნდება undefined.

// მაგალითი 1:
/*
let numbers = [1, 2, 3, 4, 5];

let found = numbers.find(num => num === 3);

console.log(found);
*/
// მაგალითი 2:
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let greaterThan5 = numbers.find(num => num > 5);

console.log(greaterThan5);
*/

// მაგალითი 3:
/*
let students = [{
  name: 'Luka',
  score: 85
}, {
  name: 'Nodari',
  score: 90
}, {
  name: 'Andria',
  score: 95
}, ];

// find() მეთოდი შეამოწმებს თითოეულ ობიექტს და ნახავს თუ რომელი ობიექტის score თვისება არის 90-ზე მეტი,
// რომელიც იპოვება, გამოიყვანს მას, ხოლო თუ არ მოიძებნა, მაშინ გამოიყვანს undefined-ს.

let stud = students.find(student => student.score > 90);

// დავბეჭდოთ stud ცვლადი.

console.log(stud);
*/

// -----------------------------------------------------------------------------------------------------------------

//                                            from

// Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

// Array.from() ეს მეთოდი ქმნის ახალ მასივს სხვა სტრუქტურებიდან, როგორიც არის სტრინგი ან NodeList(კვანძები).

// მაგალითი 1: with strings and functions.

// With string.

// console.log(Array.from('Hello World!'));

// with function.

// let converted = num => Number(num);

// console.log(Array.from('123', converted))


// მაგალითი 2: - with nodelist.
/*
let nodelist = document.querySelectorAll('div');

let arrOfDivs = Array.from(nodelist)

arrOfDivs.forEach(div => {
  div.style.backgroundColor = 'lightblue';
  div.style.fontSize = '30px';
  div.style.fontFamily = 'cursive';
  div.style.color = 'red';
});
*/

// ------------------------------------------------------------------------------------------------------------------

//                                            sort

// sort() is a method that arranges the elements of an array in order, either in ascending or descending order.

// sort() მეთოდი ალაგებს მასივის მნიშვნელობებს ქრონოლოგიის,
// რიცხვითი მნიშვნელობების შემთხვევაში აღმავალი და კლებადობით, ხოლო სტრინგის მნიშვნელობებზე ანბანის მიხედვით.

// მაგალითი 1: რიცხვითი მნიშვნელობების დალაგება ზრდადობით.

// let nums = [5, 1, 3, 19, 32, 99, 96, 37, 111];

// nums.sort((a, b) => a - b); // მატულობს ზრდადობით

// console.log(nums);


// მაგალითი 2: რიცხვითი მნიშვნელობების დალაგება კლებადობით.

// let nums = [5, 1, 3, 19, 32, 99, 96, 37, 111];

// nums.sort((a, b) => b - a);

// console.log(nums);

// -----------------------------------------------------------------------------------------------------------------

//                                            reverse

// reverse() is a method that reverses the order of elements in an array.

// reverse() მეთოდი, მასივის მნიშვნელობების თანმიმდევრობას ცვლის, აბრუნებს.


// მაგალითი 1:

// შევქმნათ მასივი.
// let arr = [1, 2, 3, 4, 5];

// reverse() მეთოდის გამოყენებით შევაბრუნოთ მასივი.
// arr.reverse();

// დავბეჭდოთ მასივი.
// console.log(arr);


// მაგალითი 2:

// let fruits = ['apple', 'banana', 'cherry'];

// fruits.reverse();

// console.log(fruits);

