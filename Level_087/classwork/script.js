// object literal

let person1 = {
    name: "Andria",
    lastName: "Nachkebia",
    fullName: function(){
        return `my name is ${this.name} my lastName is ${this.lastName}`
    }
}

// key/value add in object.
// person1.proffecion = "student"

// value change
// person1.name = "Ana"

// delete key/value pair
// delete person1.lastName

// console.log(person1);


// ------------------------------------------------

// object Constructor Function.

function Car(brand, model, color, weight) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.weight = weight;

    this.carInfo =  function(){
        return `brand is ${this.brand}, model is ${this.model}, car color is ${this.color} and weight is ${this.weight}`
    }
};



let car1 = new Car("mercedes","cls", "black", "1500")

console.log(car1.carInfo())

// let cae2 = new Car("Nissan", "GTR R-35", "silver", 2000)
// console.log(car1.model);
// console.log(car2);

// let brandName = prompt("Enter brand name:")
// let modelName = prompt("Enter model name:")
// let colorName = prompt("Enter color :")
// let weight = prompt("Enter weight:")
/*
if(car1.colorName == "black"){
    console.log("our color is same")
}
else{
    console.log("we dont mach")
}
*/
