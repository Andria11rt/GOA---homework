// Create a basic Promise that resolves immediately,
// Task: Use the Promise constructor to create a promise that resolves with the message "Hello, Promise!".,

let sayPromise = new Promise(resolve => resolve('Hello Promise'));
console.log(sayPromise);

/*
Create a Promise that rejects with an error,
Task: Write a promise that rejects with the message "Something went wrong!" and handle the rejection with .catch().,
*/

let reject = new Promise((resolve, reject) => reject('Something went wrong'));

reject
  .catch(err => console.log('Failure: ', err));

/*
Use setTimeout to resolve a Promise after 2 seconds,
Task: Create a promise that waits for 2 seconds using setTimeout and then resolves with "2 seconds have passed".,
*/


let promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('2 seconds have passed');
  }, 2000)
});

promise.then(msg => console.log(msg));

/*
Handle both resolve and reject outcomes,
Task: Write a promise that randomly either resolves with "Success!" or rejects with "Failed!"
using Math.random(). Handle both outcomes with .then() and .catch().,
*/

let promise1 = new Promise((resolve, reject) => {
  let random = Math.floor(Math.random() * 10);

  if (random >= 5) {
    resolve('Success');
  } else {
    reject('Failed!');
  }
});

promise1
  .then(res => console.log(res))
  .catch(err => console.log(err));

/*
Create a chain of promises using .then(),
Task: Create a promise that resolves with the number 5.
Chain multiple .then() calls to multiply the number by 2 in each step.,
*/

let promise2 = new Promise((resolve, reject) => resolve(5));

promise2
  .then(num => {
    console.log(num);
    return num * 2;
  })
  .then(num => {
    console.log(num);
    return num * 2;
  })
  .then(num => {
    console.log(num);
    return num * 2;
  })
  .then(num => {
    console.log(num);
    return num * 2;
  });