
let promise = new Promise(resolve => {
  setTimeout(() => {
    resolve("Data fetched!")
  }, 1000)
})

promise.then(msg => console.log(msg))


