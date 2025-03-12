// 1
let book = {
    TitleOfTheBook: "Magari",
    author: "Andria",
    publication: 2025,
    genre: "detective",
    price: 125,
    MyBook: function(){
        return `Hello my name is ${book.author} my book title is ${book.TitleOfTheBook}, publication Year is ${book.publication} and genre my book is ${book.genre} my book price is ${book.price}`
    }
}
console.log(book.author)
console.log(book.TitleOfTheBook)
console.log(book.publication)
console.log(book["genre"]);
console.log(book["price"]);
console.log(book.MyBook());

// --------------------------------------------------------------

// 2
let st = {
    name: "andria",
    age: 18,
    faculty: "construction",
    course: 3,
    score: 83,
    stud: function(){
        return `Hello my name is ${st.name} i am ${st.age} my faculty is ${st.faculty} i am ${st.course}, my score is ${st.score}`
    }
}
console.log(st.name);
console.log(st.age)
console.log(st["faculty"]);
console.log(st["course"]);
console.log(st["score"]);
console.log(st.stud());