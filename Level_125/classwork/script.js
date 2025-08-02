// What is a Set in JavaScript?

// A Set is a built-in JavaScript object that lets you store unique values — no duplicates allowed.

// 💡 When Do You Use Set?
// Use a Set when:

// - You want to store unique values only

// - You don't care about indexes like arrays

// - You need to quickly check if a value is in the collection

// - You want to remove duplicates from an array:


// ? რა არის Set?

// Set არის ჩაშენებული JavaScript ობიექტი, რომელიც გვაძლევს უნიკალურ მნიშვნელობებს.
// არანაირი განმეორებითი მნიშვნელობები, მხოლოდ უნიკალური.

// ! როდის ვიყენებთ Set-ს?

// ? ვიყენებთ Set-ს, როდესაც:

// ? - გინდა, რომ შეინახოთ მხოლოდ უნიკალური მნიშვნელობები.

// ? - როდესაც არ გაგინტერესებს ინდექსები.

// ? - როდესაც გჭირდება, რომ სწრაფად და მარტივად შეამოწმოთ მნიშვნელობა კოლექციაში.

// ? - როდესაც გინდა, რომ ამოაგდოთ განმეორებითი მნიშვნელობები მასივიდან.



// ! Set - ის შექმნა:
const mySet = new Set();

// ! ----------------------------------------------------

// // ? add() - Set - ში ამატებს ახალ მნიშვნელობას.

// // ? add() - ის გამოყენების პირველი გზა.

mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.add(4); // ! დაიგნორდება 4, რადგან ის უკვე დამატებულია.

// // ? add() - ის გამოყენების მეორე გზა.

mySet.add(10).add(20).add(30);

// console.log(mySet);

// // ! ----------------------------------------------------

// // ? has() - ამოწმებს არსებობს თუ არა მნიშვნელობა Set - ში.
// თუ არსებობს, გამოიტანს true, ხოლო სხვა შემთხვევაში false - ს.

// console.log(mySet.has(10)); // ! True
// console.log(mySet.has(100)); // ! False


// // ! ----------------------------------------------------


// // ? delete() - Set - დან შლის მნიშვნელობას.

// mySet.delete(5); // ! ამოვაგდოთ მნიშვნელობა 5.
// console.log(mySet.has(5)); // ! შევამოწმოთ Set- ში არის
// თუ მნიშვნელობა 5.

// // ! ----------------------------------------------------

// // ? clear() - Set - დან შლის ყველა მნიშვნელობას.

// mySet.clear(); // ! გავასუფთავოთ Set, ყველა
// მნიშვნელობისგან.
// console.log(mySet); // ! დავბეჭდოთ Set.

// !!!----------------------------------------------------

// ? size - Set - დან გამოსახავს მნიშვნელობების რაოდენობას.
// ? size - Set - displays the number of values.

// console.log(mySet.size); // ? 6

// if(mySet.size >= 3) {
//   console.log('Set has too many values')
// } else {
//   console.log('X')
// }

// !!!----------------------------------------------------

// ? Set - ს შეგიძლიათ გადაუაროთ ისე, როგორც მასივს.
// ? You can iterate over a Set just like an array.

// ! for of way

// for(let val of mySet) {
//   console.log(val);
// };

// ! -------------------------------------------------------------------------

// ! forEach() Way

// mySet.forEach(val => console.log(val));

// ! -------------------------------------------------------------------------

// ! Example of Set Filter

// let filterSet = mySet.filter(n => n >= 4);
// console.log(filterSet);

// ! შეგიძლიათ თუ არა გამოიყენოთ მასივზე მეთოდები Set - ზე?
// ! Can you use array methods on a Set?

// ? პასუხი: არა, რადგან Set არ არის მასივი, Set არის ობიექტი
// ? და ობიექტზე ვერ გამოიყენებთ მასივის მეთოდებს.
// ? Answer: No, because Set is not an array, Set is an object
// ? and you cannot use array methods on an object.

// ! თუ მაინც გინდათ, რომ გამოიყენოთ მასივის მეთოდები,
// ! მაგალითად filter, მაშინ Set უნდა გადააქციოთ მასივად და
// ! შემდეგ შეგეძლებათ მასივის მეთოდების გამოყენება.
// ! If you still want to use array methods,
// ! for example filter, then you need to convert the Set to an array and
// ! then you will be able to use array methods.

// let filterSet = [...mySet].filter(n => n > 4);
// console.log(filterSet); // ? გამომავალი: 5, 10, 20, 30
// console.log(filterSet); // ? Output: 5, 10, 20, 30

// ! Set - ის მასივად გადაქცევის შემთხვევაში, ჩვენ ვეღარ
// ! გამოვიყენებთ მას, როგორც Set - ს. ახლა იგი არის უბრალოდ
// ! მასივი.
// ! In case of converting Set to an array, we can no longer
// ! use it as a Set. Now it is simply
// ! an array.

// TODO ------- თუ გვინდა, რომ მასივიდან ისევ Set - ად
// TODO ------- If we want to convert from an array back to a Set,
// გადავაქციოთ, მაშინ უნდა გავაკეთოთ მოცემული რამ:
// then we need to do the following:

// const newSet = new Set([...mySet]);
// console.log(newSet);

