// ? PROMISE METHODS: all - race - any - allSettled

// TODO --- all()

// TODO --- all - პარალელურად უშვებს რამდენიმე პრომისს(Promise).
// თუ ყველა პრომისს წარმატებით გაუშვებს, მაშინ ყველა პრომისს გამოვა,
// ხოლო თუ ერთი მაინც ჩაიფუშება, მაშინ არც ერთი პრომისს არ გამოვა.

/*
let firstPromise = Promise.resolve('First Resolve');
let secondPromise = Promise.resolve('Second Resolve');
let thirdPromise = Promise.reject('Third Reject');

Promise.all([
  firstPromise,
  secondPromise,
  thirdPromise
])
  .then(val => console.log('Success:', val))
  .catch(err => console.log('Failure:', err));
*/


// TODO --- race()

// TODO --- race - შექმნილი პრომისებიდან, რომელიც ყველაზე სწრაფად შესრულდება, ის პრომისს დაბრუნდება.

/*
let fast = new Promise(resolve => setTimeout(() => resolve('Faaaast!'), 3000));
let slow = new Promise(resolve => setTimeout(() => resolve('Sloooow!'), 6000));
let faster = new Promise(resolve => setTimeout(() => resolve('Faaaasteeer!'), 1000));

// Promise.race([fast, slow, faster]).then(winner => console.log(winner));


*/



// TODO --- any()

// TODO --- any - რამდენიმე პრომისიდან, დააბრუნებს იმ პრომისს, რომელიც წარმატებით შესრულდება. არ აქვს მნიშვნელობა დანარჩენი პრომისები წარუმატებლად დასრულდა თუ არა
/*
let p1 = Promise.reject('First Promise is Rejected');
let p2 = Promise.reject('Second Promise is Rejected');
let p3 = Promise.reject('Third Promise is Resolved');

Promise.any([p1, p2, p3]).then(res => console.log(res)).catch(err => console.log(err));
*/
// თუ ყველა პრომისს იქნება ჩაიფუშებული, მაშინ გადმოაგდებს AggregateError - რომელიც არის გაერთიანებული შეცდომა.\


// todo - allSettled - ყველას დააბრუნებს პასუხს, არ აქვს მნიშვნელობა პრომისი არის თუ არა ჩავარდნილი ან შედეგიანი.
// --- აბრუნებს მასივში ჩაშენებული ობიექტის სახით, რომელსაც გადაეცემა ორი თვისება.
// სტატუსი და მნიშვნელობა. სტატუსი არის მოცემული მისი მდგომარეობა - Fulfilled/Rejected,
// ხოლო მნიშვნელობაში არის მისი მნიშვნელობა, ან "OK!" ან "NOO".

let p1 = Promise.resolve('OK');
let p2 = Promise.reject('NOO');

Promise.allSettled([p1, p2]).then(result => console.log(result));