
// Using setInterval

// 1.Create a timer that starts counting from 0 and updates every second.

function Timer() {
    let count = 0
    setInterval(() => {
      console.log(count);
      count++;
    }, 1000)
}

// 2.Write a function that logs a random number between 0 and 1 to the console every second using setInterval.

function RandomNumEverySec() {
    setInterval(() => {
      let randomNumber = Math.random()
      console.log(randomNumber);
    }, 1000)
}