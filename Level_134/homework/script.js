let p1 = Promise.resolve("Sucess 1")
let p2 = Promise.resolve("Sucess 2")
let p3 = Promise.resolve("Sucess 3")

Promise.all([p1, p2, p3]).then(values => {
  console.log("All Sucess:", values)
})

let ok1 = Promise.resolve("OK 1")
let ok2 = Promise.resolve("OK 2")
let fail = Promise.reject("Faile Promise")

Promise.all([ok1, ok2, fail])
  .then(values => {
    console.log(values)
  })
  .catch(error => {
    console.log(error)
  })

let fast = new Promise(resolve => setTimeout(() => resolve("1:"), 1000))
let normal = new Promise(resolve => setTimeout(() => resolve("2:"), 2000))
let neli = new Promise(resolve => setTimeout(() => resolve("3:"), 3000))

Promise.race([fast, normak, neli]).then(result => {
  console.log(result)
})
