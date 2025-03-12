/*
let person1 = {
    name: "Sandro",
    lastName: "Random",
    age: 15,
    family: {
        mom: "Eka",
        dad: "mamuka",
        bro: "giga",
        sister: "salome",
        broInfo: {
            lastName: "random",
            age: 15,
            form: "good",
            adress: "tbilisi",
            adressInfo:{
                foundedYear: "0455",
                founder: "gorgasali",
                population: "150000000"
            }
        }
    }
}

console.log(person1.family.broInfo.adressInfo.population);
*/

// ---------------------------------------------------------------

// OBJECT METHODES

// asign() - იღებს რამოდენიმე ობიექტს და აერთიანებს
/*
let p1 = {
    name: "gurami",
    lastName: "facalauri"
}

let p2 = {
    sport: "football"
}

let p3 = {
    hobby: "Programming"
}

let combinedobj = Object.assign(p1, p2, p3)
console.log(combinedobj);
*/

// =========================================================================

// entries() - ობიექტიდან გამოაქვს თვისება-მნიშვნელობები(key-value) მასივთა(სია) სახით
/*
let car = {
    brand: "Mercedes",
    model:  "cls",
    year:  "2018",
    color:  "black"
}

let keyvalue = Object.entries(car)

console.log(car);
*/

// =====================================================================

// keys() - ობიექტიდან გამოაქვს მხოლოდ თვისებების სია
/*
let car = {
    brand: "Mercedes",
    model:  "cls",
    year:  "2018",
    color:  "black"
}

let key = Object.keys(car)

console.log(key);
*/


// ====================================================================
/*
let car = {
    brand: "Mercedes",
    model:  "cls",
    year:  "2018",
    color:  "black"
}
let key = Object.keys(car)

let value = Object.values(car)

console.log("Property is: " + key + " " + "Values is: " + value);
*/


// ====================================================================

// frezze() - ყინავს ობიექტს, რაც იმას ნიშნავს, რომ ვეღარ მიოხვდება ობიექტში ცვლილებები,
// როგორიც არის დამატება, ამოშლა ან შეცვლა.

// isfrozen() - ამოწმებს გაყინულია თუ არა ობიექტი. თუ გაყინულია მაშინ გამოიტანს true-ს თუ არა, false-ს.
/*
let car = {
    brand: "Mercedes",
    model:  "cls",
    year:  "2018",
    color:  "black"
}
Object.freeze(car)
console.log(Object.isFrozen(car))
/*
car.model = "cla 250"
delete car.color
car.weight = "1300"
*/

// let keys  = Object.values(car)
// console.log(keys)

// =====================================================================

// seal() - ობიექტს ლუქავს, ანუ უშლის მონაცემთა თვისებების დამატებას და წაშლას,
// თუმცა არსებული თვისებების მნიშვნელობის ტიპოლოგიური ცვლილებების შეტანა შესაძლებელია.


// isseal() - ამოწმებს ლუქლუქულია თუ არა ობიექტი, თუ დაულუქავია, მაშინ აბრუნებს true-ს, თუ არა, მაშინ false-ს.
/*
let car = {
    brand: "Mercedes",
    model:  "cls",
    year:  "2018",
    color:  "black"
}
Object.seal(car)

car.model = "CLA250"

car.weight = "2000"

delete car.color

console.log(Object.isSealed(car));

console.log(car);
*/

// ==============================================================

// hasOwn() - ამოწმებს ობიექტში არის თუ არა კონკრეტული თვისება.
/*
let person = {
    name: "Sandro",
    lastName: "Random"
}

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "lastName")); // true
console.log(Object.hasOwn(person, "proffession")); // false
*/

// ==================================================================

// fromEntries() - entries მეთოდის გამოყენების შემდეგ, სიის სახით დაბრუნებულ
// თვისება-მნიშნელობებს გადააქცევს ისევ ობიექტად
/*
let person = {
    name: "Sandro",
    lastName: "Random"
}

let keyVal = Object.entries(person)
console.log(keyVal);

let obj = Object.fromEntries(keyVal)
console.log(obj)
*/