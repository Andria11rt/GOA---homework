// გაუმჯობესებული ობიექტის literal-ების გაფართოებას თებერვალში უტარდებოდა უჩვეულო ყურადღება და წაგიკითხავს 
// ობიექტებს. თავისი თვისებებით, იგი წარდგენილი იქნა 2015 წლის, აგვისტოში 6 - ში.

// მაგალითი 1:

// შევქმნათ ცვლადები და მივანიჭოთ მნიშვნელობები.
// let userName = 'Davit';
// let lastName = 'Janezashvili';

// შევქმნათ ობიექტი და გადავცეთ ცვლადები, თვისებების სახით.
/*
let person = {
    userName,
    lastName
};

// დავბეჭდოთ person ობიექტი.
console.log(person); // გამოგვაქვს: { userName: 'Davit', lastName: 'Janezashvili' }
console.log(person.userName); // გამოგვაქვს: Davit
console.log(person.lastName); // გამოგვაქვს: Janezashvili
*/

// მაგალითი 2:

// გაუმჯობესებული ობიექტის ტიპი გთავაზობს მეთოდის შექმნის შემცირებულ
// ვერსიას, აღარ გვიწევს function keyword - ის გამოყენება.

// შევქმნათ ობიექტი.
const newPerson = {
    name: 'Davit',
    lastName: 'Janezashvili',

    fullName() {
         console.log(`${this.name} ${this.lastName}`);
}
}
// newPerson.fullName();


// მაგალითი 3:


// ? გაუმჯობესებული ობიექტის ტიპი გთავაზობს ცვლადის მნიშვნელობის ჩასმას
// ობიექტში თვისების სახით.

// შევქმნათ ცვლადი და მივანიჭოთ მნიშვნელობა.
// let mod = 'model';

// ? შევქმნათ ობიექტი და გადავცეთ თვისება/მნიშვნელობა, შემდეგ რაც ჩვენ ობიექტის
// გარეთ შექმნილი ცვლადი ავიღოთ და ჩავსვათ ობიექტში თვისების სახით.
/*
let car = {
    brand: 'Nissan',
    [mod]: 'GTR'
};
*/
// console.log(car); // გამოგვაქვს: { brand: 'Nissan', model: 'GTR' }
// console.log(car.brand); // გამომავალი: 'Nissan'
// console.log(car.model); // გამომავალი: 'GTR'










// მაგალითი 4: გაუმჯობესებული მეთოდული ვერსია.

// შევქმნათ ცვლადები და მივანიჭოთ მნიშვნელობები.
let book = 'Goals';
let author = 'Brian Tracy';

// შექმნილი ცვლადები გადავცეთ ობიექტში თვისების სახით.
let bookInfo = {
    book,
    author,
    // შევქმნათ fullInfo მეთოდი შემცირებული გზით.
    fullInfo() {
        return `${this.book} written by ${this.author}`
    }
};

// დავბეჭდოთ ობიექტი.
console.log(bookInfo);
console.log(bookInfo.fullInfo());