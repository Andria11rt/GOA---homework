

let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")
let div = document.querySelector("#divBox")


function increase() {
    div.classList.add("big")
    div.classList.remove("small")
}

function decrease() {
    div.classList.add("small")
    div.classList.remove("big")
}
