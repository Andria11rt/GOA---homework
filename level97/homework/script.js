// Use the style property to change the CSS styles of an element. Modify the text content of an element using innerText.


// Create a simple HTML document with a few elements and use document.getElementById to access and manipulate the element with a specific id.

let h1 = document.getElementById("H1")
h1.style.color = "red"
h1.style.fontFamily = "cursive"
console.log(h1.textContent);

// Add multiple elements with the same class name to your HTML document and use document.getElementsByClassName to access and manipulate them.

let p = document.getElementsByClassName("paragrap")
p[0].style.color = "orange"
console.log(p[0].textContent);

// Use document.getElementsByTagName to manipulate all elements of a specific tag type in your HTML document.

let btn = document.getElementsByTagName("button")
btn[0].style.color = "orange"
console.log(btn[0].textContent);
