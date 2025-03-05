// 1
let book = {
    TitleOfTheBook: "Magari",
    author: "Andria",
    publication: 2025,
    genre: "detective",
    price: 125,
    MyBook: function(){
        return `Hello my name is ${book.author} my book title is ${book.TitleOfTheBook}, publication Year is ${book.publication} 
        and genre my book is ${book.genre} my book price is ${book.price}`
    }
}
console.log(book.author)
console.log(book.MyBook());

// --------------------------------------------------------------

// 2

let students = {
    name: "andria",
    age: 18,
    faculty: "construction",
    course: 3,
    score: 83,
    stud: function(){
        `Hello my name is ${this.name} i am ${this.age} my faculty is ${this.faculty} i am ${this.course},
         my score is ${this.score}`
    }
}
console.log(students.name);
console.log(students.stud);
