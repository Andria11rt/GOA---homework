let Resolve = new Promise((resolve) => {
  resolve({ status: "OK", code: 200 })
})

Resolve.then(result => {
  console.log("Resolve:", result)
})

let Reject = new Promise((_, reject) => {
  reject(new Error("fail"))
})

Reject
  .then(() => {
    console.log("No")
  })
  .catch(error => {
    console.log("Rejecte:", error.message)
  })

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}

delay(1500).then(message => {
  console.log(message)
})
