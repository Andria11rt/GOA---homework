
let person = {
    name: "Andria",
    lastName: "Nachkebia",
    age: 14,
    countre: "George"
}

for(let info in person){
    console.log(info + ": " + person[info])
}

let productPrices = {
  laptop: 1200,
  keyboard: 75,
  mouse: 25,
  monitor: 300
}

let totalPrice = 0;
for (let info1 in productPrices) {
  totalPrice += productPrices[info1];
}

console.log(totalPrice); // პროდუქტების ფასების ჯამი

