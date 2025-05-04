// 1 Define a constructor function named Person that takes name, age, and profession as parameters.
// Inside the constructor, assign these parameters to the properties of the object using the this keyword.
// Add a method named introduce that logs a message to the console introducing the person (e.g., "Hi, I'm [name], a [age]-year-old [profession].").
function Person (name, age, profession) {
    this.name = name
    this.age = age
    this.profession = profession

    this.introduce = function() {
        return`Hi, I'm ${this.name}, a ${this.age} year-old ${this.profession}.`
    };
}

let person1 = new Person("Andria", 14, "Student");
person1.introduce()

// 2 Book Collection
// Create an Object Constructor named Book that takes three parameters: title, author, and year.
// Declare a method getSummary that returns a brief summary of the book (e.g., "Title by Author, published in Year").
// Create three book objects and call the getSummary method for each object.

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    };
}

let book1 = new Book("magari", "Tom Shapfield", 2015);
let book2 = new Book("To Kill king", "Li snafer", 2001);
let book3 = new Book("revolution", "George shamp", 1901);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

// User Management
// Create an Object Constructor named User that takes three parameters: username, email, and password.
// Add a method named changePassword that takes a new password as a parameter and changes the object's password.
// Add a method named getDetails that returns the user's information (excluding the password).

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.changePassword = function(newPassword) {
        this.password = newPassword;
        console.log("Password changed successfully.");
    };

    this.getDetails = function() {
        return `Username: ${this.username}, Email: ${this.email}`;
    };
}

let user1 = new User("john", "john@gmail.com", "12345678");

console.log(user1.getDetails()); 

user1.changePassword("87654321");

console.log(user1.getDetails());