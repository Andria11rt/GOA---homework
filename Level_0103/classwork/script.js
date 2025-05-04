
// let btn =  document.querySelector("button")

// console.log(btn);

// function showAlert() {
//    alert("This is alert!")
// }
/*
btn.addEventListener("mouseover", function() {
    alert("This is alert!")
})
*/

let btn =  document.querySelector("button")

let img = document.querySelector("img")

function imgChange() {
    img.src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg"
}

btn.addEventListener("click", imgChange)

function prevImg() {
    img.src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"

}

img.addEventListener("mouseover", prevImg)
