// ? A Promise is a JavaScript object that represents a value that will be available in
// the future - either a success or a failure.

// ? Promise არის მომავლის დაპირება. ჩვენ ვგეგმავთ გავაკეთოთ რაღაც და ის
// დაგვიბრუნდება პასუხს, მაგრამ პასუხი იქნება მომავალში. პასუხი შეიძლება იყოს წარმატებული ან
// წარუმატებელი.

// // ? Promise აქვს სამი მდგომარეობა/ეტაპი. 1. pending/მოცდენილი, 2. fulfilled/შესრულებულია 3. reject/უარყოფილი.

/*
                     pending moment

let promise = new Promise((resolve, reject) => {
  
});

console.log(promise);
*/


// ! Conclusion / დასკვნა:

// ? A promise is a constuctor function in JavaScript,
// created using the new keyword. It represents the result of an
// asynchronous operation - either success (resolve) or failure
// (reject).

// // ? Promises are useful for managing asynchronous code, such
// as handling API requests with fetch, adding delays with
// setTimeout, or wrapping any task that takes time to complete.

// // ? Every Promise has 3 possible sstates: pending (waiting),
// fulfilled (success), and rejected (failure).

// // ? The executor function of a Promise takes two Arguments -
// resolve and reject. Even if you write more than two argument,
// only first two argument will be used.

// // ? We can controll promise using this three method: 1. then
// (works if promise returns resolve), 2. catch(works if promise
// returns reject), 3. finally(works every time, it doesn't care
// if promise either is success or failure)


let promise = new Promise((resolve, reject) => {
  let isBookAvaiable = true;

  if (isBookAvaiable) {
    resolve('This is the book');
  } else {
    reject(`I'm sorry man, i didn't have time to take the book`);
  }
});

promise
  .then(res => console.log('Success:', res)) // Success: This is the book
  .catch(err => console.log('Failed:', err)) // Failed: I'm sorry man, i didn't have time to take the book
  .finally(console.log('This is a finally message it doesnt care it promise return either success or failure'));


// resolve - success
// reject - failure

// then === resolve
// catch === reject