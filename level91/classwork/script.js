
// let arr = [1, 2, 3, "text", true, false, {name: "Daviti", lastName: "Janezashvili", proffesion: "Mentor"} ]



// let num = [10, 20, 15, 11, 49, 60, 99]

/*
for(let i = 3; i < num.length; i++) {
    console.log(num[i] + 10)
}
*/

// let firstVal = num[0] + 10
// let secondVal = num[1] + 10
// let thirdVal = num[2] + 10

// console.log(firstVal, secondVal, thirdVal);


/*
ARRAY METHODS!
concat() - Method
// concat() is a method that joins two or more arrays into one new array.


// concat() ეს მეთოდი აერთიანებს 2 -ს ან მეტ მასივს და ქმნის 1 დიდ ახალ მასივს.
// როდესაც გავაერთიანებთ მასივებს, მაშინ ორიგინალი მასივი არ იცვლება.


// მაგალითი 1:

// შევქმენით arr1 და arr2 მასივები.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
// concat() მეთოდის დახმარებით გავაერთიანეთ ეს მასივები და მივიღეთ ერთი დიდი მასივი.
let combinedArr = arr1.concat(arr2);
// დავბეჭდეთ მასივები და ერთი დიდი მასივი.
console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [6, 7, 8, 9, 10]
console.log(combinedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// შევქმენით მესამე მასივი.
let arr3 = [11, 12, 13, 14, 15];
// ყველა მასივი გავაერთიანეთ და მივიღეთ ერთი დიდი მასივი.
let allCombined = arr1.concat(arr2, arr3)
// დავბეჭდეთ allCombined ცვლადი, რომელშიც არის გაერთიანებული ყველა მასივი.
console.log(allCombined);
--------------------------------
pop() - Method
// pop() is a method that removes the last element from an array and returs that element.

// pop() მეთოდი მასივიდან შლის ბოლო ელემენტს და შემდეგ აბრუნებს.


// მაგალითი 1:

// შევქმენით მასივი.
let fruits = ['apple', 'banana', 'cherry'];
// pop() ელემენტის დახმარებით ამოვშალეთ ბოლო ელემენტი და შევინახეთ lastElem ცვლადში.
let lastVal = fruits.pop();
// დავბეჭდეთ fruits მასივი.
console.log(fruits); // ['apple', 'banana']
// დავბეჭდეთ lastVal ცვლადში შენახული ბოლო მნიშვნელობა.
console.log(lastVal); // cherry

-------------------------

push() - Method
// push() is a method that adds one or more elements to the end of an array and returns the new length of the array.

// push() მეთოდი სიაში ამატებს 1 - ს ან მეტ მნიშვნელობას, დამატების შემდეგ მასივის სიგრძეც იზრდება.


// მაგალითი 1:

// შევქმენით მასივი.
let fruits = ["Apple", "Banana"];
// push() მეთოდის გამოყენებით სიაში დავამატეთ 'orange' მნიშვნელობა.
let newVal = fruits.push('Cherry');
// დავბეჭდეთ newLength ცვლადი, ეს გამოიტანს მასივის სიგრძეს ანუ 3 - ს.
console.log(fruits);
// დავბეჭდეთ fruits მასივი, რომელიც გამოიტანს განახლებულ მასივს - ['apple', 'banana', 'orange'].
console.log(newVal);
----------------------
includes() method
// includes() is a method that checks if an array contains a specific element and returns true if it does, and false if it doesn't.

// includes() მეთოდი ამოწმებს მასივში არის თუ არა კონკრეტული მნიშვნელობა, თუ არის გამოიტანს true - ს, ხოლო თუ არ არის, გამოიტანს false - ს.


// includes === შეიცავს/მოიცავს

// მაგალითი 1:

// შევქმენით მასივი.
let fruits = ['apple', 'banana', 'mango', 'kiwi'];
// includes() მეთოდით შევამოწმეთ მასივი შეიცავს თუ არა 'mango' - ს.
let hasMango = fruits.includes('mango');
// დავბეჭდეთ hasMango ცვლადი.
console.log(hasMango)



// if(hasMango == true) {
//     console.log('we have that value in fruits array')
// } else {
//     console.log('we dont have that value in fruits array')

// }


// მაგალითი 2:

// შევქმენით მასივი.
let nums = [1, 2, 3, 4, 5, 6];
// შევამოწმეთ არის თუ არა მნიშვნელობა 25 მასივში.
let hasNum = nums.includes(25);
// დავბეჭდეთ hasNum ცვლადი.
console.log(hasNum)
*/