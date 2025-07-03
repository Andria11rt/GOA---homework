
// გააკეთეთ 5 მაგალითი Object Literal enhancment - ზე.

const newPerson = {
    name: 'Davit',
    lastName: 'Janezashvili',

    fullName() {
         console.log(`${this.name} ${this.lastName}`);
}
}

// -----------------------------------------------------

let car = {
    brand: 'Nissan',
    [mod]: 'GTR'
};

console.log(car);
console.log(car.brand);
console.log(car.model);

// -----------------------------------------------------

let book = 'Goals';
let author = 'Brian Tracy';


let bookInfo = {
    book,
    author,
    
    fullInfo() {
        return `${this.book} written by ${this.author}`
    }
};


console.log(bookInfo);
console.log(bookInfo.fullInfo());

// -----------------------------------------------------

let userName = 'Davit';
let lastName = 'Janezashvili';



let person = {
    userName,
    lastName
};


console.log(person);
console.log(person.userName); 
console.log(person.lastName);