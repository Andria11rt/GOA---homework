// Level_112 გაგრძელება

//                                               every

// The every() method in JavaScript checks if all elements in an array pass a test provided by a function. 
// It returns true if all elements pass the test, and false otherwise.

// every() მეთოდი ამოწმებს მასივის ყველა მნიშვნელობა აკმაყოფილებს თუ არა
// პირობას. თუ აკმაყოფილებს(დააკმაყოფილებს), მაშინ გამოვა true, თუ არ
// აკმაყოფილებს, მაშინ გამოვა false.

// მაგალითი 1:

// შევქმნათ მასივი.
// let nums = [1, 2, 3, 4, 5];

// every() მეთოდის გამოყენებით შევამოწმოთ ყველა მნიშვნელობა მეტია თუ არა 0 - ზე.
// let greaterThan5 = nums.every(num => num > 0);

// დავბეჭდოთ greaterThanZero ცვლადი.
// console.log(greaterThan5);


// მაგალითი 2:

// შევქმნათ მასივი.
// let words = ['Building', 'Car', 'AirPlane', 'chair'];

// every() მეთოდის გამოყენებით შევამოწმოთ ყველა მნიშვნელობის სიმბოლოების რაოდენობა
// მეტია თუ არა 3 - ზე.
// let checkLongWords = words.every(word => word.length > 4);

// დავბეჭდოთ allLongWords ცვლადი.
// console.log(checkLongWords); // false

// მაგალითი 3:

// შევქმნათ მასივი.
/*
let users = [
    {name: 'Alice', active: true},
    {name: 'John', active: true},
    {name: 'Bob', active: false}
];

// every() მეთოდის გამოყენებით შევამოწმოთ ყველა მნიშვნელობა აქტიურია თუ არა.
let isActive = users.every(user => user.active);

// დავბეჭდოთ isActive ცვლადი.
console.log(isActive);
*/

// ---------------------------------------------------------------------------------------------------------------

//                                               some

// The some() method in JavaScript checks if at least one element in
// an array passes a test provided by a function. It returns true if at
// least one element passes the test, and false otherwise.

// some() მეთოდი ამოწმებს მასივს ერთი მნიშვნელობა მაინც თუ აკმაყოფილებს პირობას, თუ
// დააკმაყოფილებს, მაშინ გამოვა true, თუ არა გამოვა false.

// მაგალითი 1:

// let numbers = [4, 7, 12, 33, 1];

// let isNumGreaterThan12 = numbers.some(num => num > 12);

// console.log(isNumGreaterThan12);

// 4 - false
// 7 - false
// 12 - false
// 33 - true
// 1 - false


// მაგალითი 2:

// let words = ['apple', 'dog', 'banana', 'cat'];

// let hasLongWord = words.some(char => char.length > 5);

// console.log(hasLongWord);

// apple(5) - false
// dog(3) - false
// banana(6) - true
// cat(3) - false

// ---------------------------------------------------------------------------------------------------------------

//                                              map

// map() is a method that creates a new array by applying a function to
// every element in an existing array.

// map() მეთოდი მასივის მნიშვნელობებზე გამოიყენებს ფუნქციას, რომელიც
// მნიშვნელობებიდან დაამზადებს ფუნქციის პირობას, რაც
// შექმნის ახალ მასივს.

// map() მეთოდი ძალიან გავს forEach() მეთოდს, თითქმის ერთი და იგივეა,
// მაგრამ მას შორის არის განსხვავება, რადგანაც მასივის მნიშვნელობები
// აკმაყოფილებს ფუნქციის პირობას, რაც დროის map() მეთოდი ავტომატურად ქმნის ახალ
// მასივს სადაც იქნება ისეთი მნიშვნელობები, რომლებმაც დააკმაყოფილეს ფუნქციის
// პირობა.


// მაგალითი 1:
/*
// შევქმნათ მასივი
let nums = [1, 2, 3, 4, 5];

// map() მეთოდის გამოყენებით მასივის მნიშვნელობები გავაორმაგოთ.
let doubledNums = nums.map(number => number * 2);

// დავბეჭდოთ ორიგინალი მასივი.
console.log(nums); // [1, 2, 3, 4, 5]

// დავბეჭდოთ map ის მიერ შექმნილი მასივი.
console.log(doubledNums); // [2, 4, 6, 8, 10]
*/
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// 4 * 2 = 8
// 5 * 2 = 10


// ---------------------------------------------------------------------------------------------------------------

//                                            filter

// The filter() method in JavaScript creates a new array with all elements
// that pass a test provided by a function. Simply put, it allows you to
// filter out certain items from an array based on a condition.

// filter() მეთოდი ჯავასკრიპტში ქმნის ახალ მასივს და მასში შედის ისეთი
// მნიშვნელობები, რომლებიც აკმაყოფილებს პირობას.

// მაგალითი 1:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNums = numbers.filter(num => num % 2 === 0); // აკეთებს ლუწს num % 2 === 0

// console.log(evenNums);

// მაგალითი 2:

// შევქმნათ მასივი.
// let words = ['apple', 'banana', 'mercedes', 'nissan', 'amiko', 'nodari', 'amounobi arseba romelic izaxis datooo'];

// filter() მეთოდით გავფილტროთ მასივი და ამოვიღოთ მნიშვნელობები,
// რომლებიც 5 სიმბოლოზე მეტი აქვს სიგრძე.
// let wordLength = words.filter(char => char.length > 10);

// დავბეჭდოთ words მასივი.
// console.log(words);

// დავბეჭდოთ wordLength მასივი.
// console.log(wordLength);
/*
let users = [
    {name: 'Alice', active: true},
    {name: 'John', active: false},
    {name: 'yes Papa', active: true}
];

let isActive = users.filter(checkStatus => checkStatus.active);

console.log(users);
console.log(isActive);
*/

// ---------------------------------------------------------------------------------------------------------------

//                                            filter