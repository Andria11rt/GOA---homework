
// let date = new Date()
// console.log(date);

// document.write(date) // გამოტანა საიტზე

// document.write("Hello Andria")

/*
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()
let dayOfTheWeek = date.getDay()
let hours = date.getHours()
let minutes = date.getMinutes()
let second = date.getSeconds()
let milisecond = date.getMilliseconds()

console.log(year, month, day, dayOfTheWeek, hours, minutes, second, milisecond);
*/
/*
let date = new Date()
date.setFullYear(2016)
date.setMonth(6)
date.setDate(18)
date.setHours(16)
date.setMinutes(43)

consol.log(date)
*/

// let date = new Date('2016-06-18T14:43:13.999')
// console.log(date);


/*
let date1 = new Date('2016-11-31T23:59:59.999')
let date2 = new Date('2016-11-31T23:59:59.995')

if(date1 > date2){
    console.log("Happy New Year");
}
else{
    console.log("რა დროს ნიუ იერი არის")
}

// 1 year = 12 month
// 0 - 11
*/
/*
function myConsole() {
    console.log("say Hi every 2 second")
}

setInterval(myConsole, 2000)

function sayHiToEvery5Sec() {
    console.log("say Hi every 5 second")
}

setInterval(sayHiToEvery5Sec, 5000)
*/

/*
function myConsole() {
    console.log("say Hi every 2 second")
}
setTimeout(myConsole, 2000)

setTimeout(function(){
    console.log("Hello world")
}, 5000)

*/
/*
let count = 0

function sayHi3Times() {
    console.log("say hi only 3 times");
    count++;
    if(count === 3){
        clearInterval(interval)
    }
}

const interval = setInterval(sayHi3Times, 2000)
*/
// მასწავლებელის ტაიმერი

function updateClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
  
    let currentTime = hours + ':' + minutes + ':' + seconds;
  
    document.getElementById('clock').innerText = currentTime;
}

setInterval(updateClock, 1000)