// MAP

// In JavaScript, a Map is a built-in object that allows you to store key-value pairs — just like an object ({})
// — but with some extra power and flexibility.

// With a Map, you can:

// - Use any type of data as a key (string, number, object, function, etc.)

// - Keep the order in which items were added

// - Work with useful methods like .set(), .get(), .has(), and more

// It's like a more advanced version of an object, made for better control and flexibility.

// ? ჯავასკრიპტში, Map არის ჩაშენებული ობიექტი, რომელიც გვაძლევს იმის შესაძლებლობას, რომ
// შევინახოთ თვისება-მნიშვნელობების როგორიც ობიექტი, მაგრამ Map არის უფრო ძლიერი და
// მოქნილი.

// ? Map -ით ჩვენ შეგვიძლია:

// ? გამოვიყენოთ ნებისმიერი მონაცემთა ტიპი თვისება/კუთვნილების სახით (String, Number,
// Object, Function, Array, Boolean)

// ? შევინარჩუნოთ თანმიმდევრობა, როგორც დაემატა.

// ? გამოვიყენოთ მასში ჩაშენებული მეთოდები, როგორიც არის set(), get(), has() და უფრო მეტი შემოგვაქვს.

// ? Map არის ობიექტის გაუმჯობესებული ვერსია, რომელიც შეგვქმნა უკეთესი კონტროლისთვის და მოქნილობისთვის.





// ! როგორ შევქმნათ Map კონსტრუქტორი?
const myMap = new Map();

// ? Set() - Map - ში დაამატებს ახალ თვისება-მნიშვნელობების წყვილს.

// ! Set - ის დამატების პირველი გზა.

myMap.set('name', 'Davit');
myMap.set(10, 'Number');
myMap.set(true, 'Current Value is True');

//! Set - ის დამატების მეორე გზა.(Short Way)

myMap.set('x', 100).set('y', 200).set('z', 300);

console.log(myMap);


// set method receives 2 argument. 1. property - 2. value

// set(10, 'Number')
// 10 === Property
// 'Number' === Value;


// -----------------------------------------------------------------

// ? get() - Map - დან გამოაქვს თვისება-მნიშვნელობების წყვილი.

// console.log(myMap.get('name'));
// console.log(myMap.get(10));
// console.log(myMap.get(true));


// -----------------------------------------------------------------

// ? has() - ამოწმებს Map - ში არის თუ არა კონკრეტული თვისება. თუ არის
// გამოაქვს true, ხოლო სხვა შემთხვევაში გამოაქვს false.

// New Version
// console.log(myMap.has('name')); // true
// console.log(myMap.has(10)); // true
// console.log(myMap.has(true)); // true 
// console.log(myMap.has('lastName')); // false
// console.log(myMap.has(300)); // false


// let hasName = myMap.has('name');

// console.log(`Map Returned ${hasName}`);

// Old Version
/*
let person = {
  proff: 'Mentor'
};

if (person.proff) {
  console.log(true)
} else {
  console.log(false)
};
*/

// -----------------------------------------------------------------

// ? delete() - Map - დან შლის თვისება-მნიშვნელობის წყვილს.

// console.log(myMap.get('z'));

myMap.delete('z');
console.log(myMap.has('z'));

// -----------------------------------------------------------------

// ? clear() - Map - დან შლის ყველა თვისება-მნიშვნელობის წყვილს. ასუფთავებს
// მთლიანად Map - ს.

// console.log(myMap);

// myMap.clear();

// console.log(myMap);

// -----------------------------------------------------------------

// ? size - აბრუნებს Map - ში თვისებების რაოდენობას.

// console.log(myMap.size);

// -----------------------------------------------------------------

// ? როგორ გადავუაროთ Map - ს?

// ? ჩვენ შეგვიძლია გადავუაროთ Map - ს, რამოდენიმე გზით.

// ! First Way:

// ? Keys() - Map - დან გამოაქვს ყველა თვისების დასახელება.
/*
for (let key of myMap.keys()) {
  console.log(key);
}
*/
// ? for of - ის გამოყენებით, გადავუაროთ Map - ს და წამოვიღოთ მისი
// თვისებების დასახელება keys მეთოდის გამოყენებით.

// ! Second Way:

// ? Values() - გამოაქვს Map - დან ყველა მნიშვნელობას.
/*
for (let value of myMap.values()) {
  console.log(value);
};
*/

// ! Third Way:

// // ? entries() - Map - დან გამოაქვს თვისება-მნიშვნელობების წყვილი.

// for(let [key, value] of myMap.entries()){
// console.log(`${key}: ${value}`);
// };


// ? Using Array Method:

// myMap.forEach(((key, value) => {
//   console.log(key, value);
// }));

/*
let countries = new Map([
  ['Georgia', 'Tbilisi'],
  ['America', 'Washington D.C'],
  ['Brazil', 'Brasília ']
]);

// Country is Georgia and Capital is Tbilisi

for (let [key, value] of countries.entries()) {
  console.log(`Country is ${key} - Capital is ${value}`);
};
*/


// myMap.set({name: "Daviti"}, true);
// myMap.set(["x", 100], false)

// console.log(myMap.get({name: 'Davit'}));

// ! First Way to log Object && Array data type as property
// // ? myMap.forEach(((value, key) => {
// // ? console.log(key, value)
// // ? }))

// ! Second Way to log Object && Array data type as property

// // ? for(let [key, value] of myMap.entries()) {
// // ? console.log(key,value)
// // ? }

// ! Third Way to log Object && Array data type as property

// // ? [...myMap].forEach((([key, value]) => {
// // ? console.log(key, value)
// // ? }))