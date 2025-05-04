let btn = document.querySelector("#btn")

// add - adds a class to the element
// btn.classList.add("btnStyle")

// remove - removes class from element
// btn.classList.remove("headingStyle")


// replace - replaces class to the element
// btn.classList.replace("btnStyle", "newBtnStyle")
/*
function myFunc(){
if(btn.classList.contains("btnStyle")) {
    btn.classList.replace("btnStyle", "newBtnStyle")
    console.log("Button Change Class!")
}
}

myFunc() */

// toggle - toggles to the element. If the class is present, it removes it. If not, it adds it

btn.classList.toggle("btnStyle")