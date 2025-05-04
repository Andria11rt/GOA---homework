
// let h1 = document.getElementsByClassName("headingOne")

// h1.innerHTML = "<b>Hello world!</b>"

// console.log(h1[0].textContent = "Hello world!");

// let p1 = document.getElementById("p1")


// let btn = document.getElementsByTagName("button")

// console.log(btn);

/*
let h1 = document.querySelector(".headingOne")

let p1 = document.querySelector("#p1")

let btn = document.querySelector("button")

console.log(h1, p1, btn);
*/


// let img = document.querySelector("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s"
/*
let imgs = document.getElementsByTagName("img")

for(let i = 0; i < imgs.length; i++){
    imgs[i].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s"

}
*/









// 1. createElement() - creates a new element.

let headingOne = document.createElement("h1")

headingOne.textContent = "Hello world"

// 2. appendChild() - add element into parent element.

document.body.appendChild(headingOne)

// 3. removeChild - removes elemnt from parent elemnt

document.body.removeChild(headingOne)

// 4. firstElemntChild() - returns first elemnt from parent element

let parentElement = querySelector("div")

let firstElem = parentElement.firstElemntChild

console.log(firstElem);

// 5. lastElementChild() - returns last element from parent element.
let lastElem = parentElement.lastElementChild;
console.log(lastElem);

// 6. insertBefore() - inserts element before existing element.
parentElement.insertBefore(btn, parentElement.firstElementChild);

// 7. parentNode() - return parent element.
let pElement = firstElem.parentNode;
console.log(pElement);
