
let promise = new Promise((resolve, reject) => {
  let isBatmanYourFavoriteHero = true

  if (isBatmanYourFavoriteHero) {
    resolve("Yes Batman is your favorite hero")
  } else {
    reject("No Batman is not your favorite hero")
  }
})

promise
  .then(res => console.log("You are batmafag:", res))
  .catch(err => console.log("no you are not batmanfag:", err))
  .finally(console.log("thanks for use our site"))


