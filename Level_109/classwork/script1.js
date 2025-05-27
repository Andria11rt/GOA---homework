
let car = {
    brand: "Nissan",
    model: 7865,
    color: "White",
    enginModel: 12.3211
}

let other = {
    T: true,
    F: false
}

for(let info in car) { 

    console.log(car[info])
}

for(let info in TF) { 

    console.log(TF[info])
}
