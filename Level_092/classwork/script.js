/*
copyWithin() - Method
// copyWithin() is a method in JavaScript that allows you to copy a portion of an array to another location within the same array.


// copyWithin() მეთოდი მასივიდან აკოპირებს ელემენტებს და უცვლის პოზიციას იგივე მასივში.

// გადაეცემა 3 მნიშვნელობა

// 1. target - დაკოპირებული მნიშვნელობები რომელ ინდექსზე უნდა დადგეს.
// 2. start - საიდან უნდა დაიწყოს დაკოპირება.
// 3. end - სადამდე უნდა გაგრძელდეს.(თუ არ მივუთითებთ ამ მნიშვნელობას, მაშინ default - ზე ავტომატურად ბოლომდე ჩავა და ყველა ელემენტს დააკოპირებს)


// მაგალითი 1:

// შევქმენით მასივი.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// copyWithin() მეთოდის გამოყენებით მივუთითეთ თუ რომელ პოზიციაზე უნდა გადავიტანოთ დაკოპირებული მნიშვნელობები და ასევე საიდან უნდა დაიწყოს დაკოპირება.


// 1. 0 - სად უნდა ჩაჯდეს მნიშვნელობები
// 2. 3 - რომელი ინდექსიდან უნდა დაიწყოს მნიშვნელობების ჩასმა.
// 3. 5 - რომელ ინდექსამდე უნდა გაგრძელდეს მნიშვნელობების ჩასმა.
arr.copyWithin(0, 3, 6);

console.log(arr);
------------
fill() - Method
// /fill() is a method that fills all elements in an array with a static value from a start index to an end index.

// fill() მეთოდი ავსებს მასივს კონკრეტული მნიშვნელობით,საწყის ინდექსიდან სასრულ ინდექსამდე.


// 1. value: მნიშვნელობა, რომლითაც მასივი უნდა შევავსოთ.
// 2. start: რომელი ინდექსიდან უნდა შევიტანოთ მნიშვნელობა.
// 3. end: რომელ ინდექსამდე უნდა გაგრძელდეს მნიშვნელობების შემოტანა.


// მაგალითი 1:

// შევქმენით მასივი
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fill() მეთოდით მასივში შევიტანეთ მნიშვნელობები 0 ინდექსიდან 5 ინდექსამდე.

// 1. value: 20 - მნიშვნელობა, რომელიც უნდა შევიტანოთ მასივში.
// 2. start: 0 - მენულე ინდექსიდან უნდა დაიწყოს შეტანა.
// 3. end: 5 - მეხუთე ინდექსამდე უნდა შეიტანოს 
arr.fill(20, 0, 5);

// გამოიტანს განახლებულ მასივს.
console.log(arr);



// მაგალითი 2:



// შევქმენით მასივი, რომელშიც არის შეტანილი რიცხვითი მნიშვნელობები.
let serverStatus = [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0];

// 0 - ინდექსიდან 6 - ინდექსამდე შევიტანეთ მნიშვნელობა 5.
serverStatus.fill(0, 0, 6);

console.log("Status after first maintenance:", serverStatus);
// გამომავალი: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0]

// მე - 10 - თე ინდექსის შემდეგ შევიტანეთ მნიშვნელობა 0.
serverStatus.fill(0, 10);

console.log("Status after second maintenance:", serverStatus);
// გამომავალი: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]

// მთლიანი მასივი შევავსეთ მნიშვნელობა 1 - ით.
serverStatus.fill(1);

console.log("Status after resetting all servers:", serverStatus);
// გამომავალი: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
--------------- 
-----------------------
shift() - Method
// shift() is a method that removes the first element from an array and returns that element.

// shift() მეთოდი მასივიდან შლის პირველ ელემენტს და შემდეგ აბრუნებს.


// მაგალითი 1:

// შევქმენით მასივი.
let fruits = ["Apple", "Banana", "Cherry"];
// shift() მეთოდის გამოყენებით სიიდან ამოვშალეთ პირველი მნიშვნელობა.
let firstVal = fruits.shift();
// დავბეჭდეთ firstVal ცვლადი, რომელიც გამოიტანს 'apple' - ს.
console.log(firstVal);
// დავბეჭდეთ fruits მასივი, რომელიც გამოიტანს [ 'Banana', 'Orange' ] - ს.
console.log(fruits);



// მაგალითი 2:

let fruits = ["Apple", "Banana", "Cherry", "Banana", "Cherry" , "Banana", "Cherry"];

for(let i = 0; i <= 5; i++) {
    fruits.shift();
};

console.log(fruits);

-------------------
unshift() - Method
// unshift() is a method that adds one or more elements to the beginning of an array and returns the new length of the array.

// unshift() მეთოდი მასივის დასაწყისში ამატებს 1 - ს ან რამოდენიმე მნიშვნელობას და აბრუნებს მასივის ახალ სიგრძეს.



// მაგალითი 1:

// შევქმენით მასივი.
let fruits = ['Banana', 'Cherry'];
// unshift() მეთოდის გამოყენებით დავამატეთ 'apple', 'orange', 'kiwi' მნიშვნელობა.
let newElem = fruits.unshift('Apple', 'orange', 'kiwi');
// დავბეჭდეთ fruits მასივი, რომელიც დააბრუნებს ['apple', 'Banana', 'Orange'] მასივს.
console.log(fruits); // ['Apple', 'orange', 'kiwi', 'Banana', 'Cherry']
// დავბეჭდეთ newElem ცვლადი, რომელიც დააბრუნებს მასივის სიგრძეს - 3 - ს.
console.log(newElem);
----------------
splice() method
// splice() is a method that changes an array by adding, removing, or replacing elements at specified positions.

// splice() მეთოდი მასივში მნიშვნელობებს ამატებს, შლის ან სხვა ელემენტებიც ანაცვლებს.


// მაგალითი 1: 

// მნიშვნელობების ამოშლა მასივიდან.


// შევქმენით მასივი.
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// splice() მეთოდის გამოყენებით ამოვშალეთ მნიშვნელობები პირველი ინდექსიდან მესამე ინდექსის ჩათვლით.
// 1: განსაზღვრავს თუ რომელი ინდექსიდან უნდა დაიწყოს მნიშვნელობების ამოშლა.
// 3: განსაზღვრავს თუ რომელ ინდექსამდე უნდა გაგრძელდეს მნიშვნელობების ამოშლა. 
let removed = fruits.splice(1, 3);

// დავბეჭდეთ removed ცვლადი. removed ცვლადი ინახავს ამოშლილ მნიშვნელობებს და შემდეგ აბრუნებს
console.log(removed);

// დავბეჭდეთ fruits ცვლადი. რომელიც გამოიტანს ორიგინალ მასივში დარჩენილ მნიშვნელობებს.
console.log(fruits);




// მაგალითი 2:

// მნიშვნელობების დამატება მასივში.


// შევქმენით მასივი.
let fruits = ['Banana'];

// 1. 1 - მიუთითებს თუ რომელი ინდექსიდან უნდა დაიწყოს მნიშვნელობების დამატება.
// 2. 0 - მიუთითებს, რომ არ უნდა ამოშალოს არცერთი მნიშვნელობა.
// 3. "orange", "Apple", "Mango" - მიუთითებს თუ რომელი მნიშვნელობები უნდა დაემატოს მასივში.
fruits.splice(1, 0, 'Orange', 'Apple', 'Mango');

// დავბეჭდეთ fruits მასივი. ეს მასივი გამოიტანს განახლებულ სიას.
console.log(fruits);
//მაგალითი 3:

// მნიშვნელობების ჩანაცვლება მასივში.

// მნიშვნელობების ჩანაცვლება მასივში.

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// splice() მეთოდის გამოყენებით, მასივში მნიშვნელობა ჩავანაცვლეთ სხვა მნიშვნელობით. 
fruits.splice(1, 3, 'Kiwi');

// დავბეჭდეთ fruits მასივი.
console.log(fruits)
*/