// A rest parameter allows a function to accept an indefinite number of arguments as an array;

// rest პარამეტრი ფუნქციას აძლევს იმის შესაძლებლობას,
// რომ მიიღოს მრავალი არგუმენტები და გადააქციოს ისინი მასივის სახით.
/*
const numberToArr = (...num) => num;

console.log(numberToArr(1, 2, 3, 4, 5));

// Strings - Works!
console.log(numberToArr('a', 'b', 'c', 'd'));

// Booleans - Works!
console.log(numberToArr(true, false, true, false, true));

// Floats - Works!
console.log(numberToArr(1.23, 544.1, 65.55, 12.44));

// Arrays - Works!
console.log(numberToArr([1], ['Hello'], ['Whatsuuuup'], ['Zdarova chemi zma']));

// Objects - Works!
console.log(numberToArr({name: 'Davit'}, {name: 'Avto'}, {name: 'gio'}));
*/


// ? მაგალითი 1:
/*
// მნიშვნელობების გაფილტვრა rest ოპერატორის გამოყენებით.

const filterNums = (...nums) => {
    let filteredNums = nums.filter(num => num % 2 === 0);
    return filteredNums;
};

console.log(filterNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));
*/


// ? მაგალითი 2:

// ? ამ მაგალითში rest ოპერატორი გამოიყენება array destructing -ისთვის.

// ? ამ შემთხვევაში ჩვენ დავშალეთ მოცემული მასივი,
// მივიღეთ 4 ცვლადი. პირველი 3 ცვლადი მიიღებს მასივის
// პირველ სამ მნიშვნელობას, ხოლო მეოთხე ცვლადში
// მოთავსდება დარჩენილი მნიშვნელობები.
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [a, b, c, ...lonely] = arr;

console.log(a, b, c);

console.log(lonely);
*/


// ? მაგალითი 3:

// let person = {
//     name: 'Davit',
//     lastName: 'Janezashvili',
//     proffesion: 'Mentor'
// };

// let {name, ...info} = person;
// console.log(name);
// console.log(info);


const processNumbers = (operation, ...numbers) => {
    switch (operation) {
        case 'sum':
            return numbers.reduce((acc, curr) => acc + curr, 0);
            break;
        case 'multiply':
            return numbers.reduce((acc, curr) => acc * curr, 1);
            break;
        case 'filterEven':
            return numbers.filter(num => num % 2 === 0);
            break;
        case 'filterOdd':
            return numbers.filter(num => num % 2 !== 0);
            break;
        default:
            return 'Invalid Operation';
    }
};

console.log(processNumbers('sum', 1, 2, 3, 4));     // გამოაქვეყნებს: 10
console.log(processNumbers('multiply', 1, 2, 3, 4)); // გამოაქვეყნებს: 24
console.log(processNumbers('filterEven', 1, 2, 3, 4)); // გამოაქვეყნებს: [2, 4]
console.log(processNumbers('filterOdd', 1, 2, 3, 4));  // გამოაქვეყნებს: [1, 3]
console.log(processNumbers('invalid', 1, 2, 3, 4)); // გამოაქვეყნებს: Invalid Operation

//                              Spread Operator
// The spread operator (...) allows you to expand elements of an iterable (like an array, object, or string) 
// into individual elements. It is the opposite of the rest parameter, which gathers elements into an array.

// spread ოპერატორი, rest ოპერატორის საპირისპიროა. rest აგროვებს ელემენტებს და გარდაქმნის მასივად,
// ხოლო spread მასივს, ობიექტებს და სტრიქონებს გარდაქმნის ინდივიდუალურ ელემენტებად - ანუ შლის.
// ასევე spread აკოპირებს და აერთიანებს ელემენტებს.

// Array

// ? მაგალითი 1: copying arr with spread operator.

let arr1 = [1, 2, 3];
let copiedArr = [...arr1];

// Original Arr
// console.log(arr1);

// Copied Arr
// console.log(copiedArr);


// ? მაგალითი 2: Combining two arrays with spread operator.

let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let combinedArr = [...arr2, ...arr3];

// console.log(arr2);
// console.log(arr3);
// console.log(combinedArr);

// ? მაგალითი 3: adding element in arr with spread operator.

let original = [2, 3, 4];

let added = [1, ...original, 5];

// console.log(added);

// Object

// ? მაგალითი 4: copying object with spread operator.

let obj = {name: 'Davit', lastName: 'Janezashvili'};
let copiedObj = {...obj};
// console.log(copiedObj);

// ? მაგალითი 5: combining two object with spread operator.

let obj1 = {name: 'John', age: 10};
let obj2 = {city: 'New york', country: 'USA'};

let combiendObj = {...obj1, ...obj2};
// console.log(combiendObj);






// Disband values from array with spread operator without using destructing.

const nums = [1, 2, 3, 4, 5];
// console.log(...nums);

let a = [1, 2, 3];
let b = [];

console.log(a);
console.log(b);

b.push(...a);
console.log(a);
console.log(b);