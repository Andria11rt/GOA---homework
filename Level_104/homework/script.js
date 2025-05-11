
let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")

imgs = [
    "https://www.imgworlds.com/_next/static/media/iron-man.cbce2b80.png",

    "https://www.imgworlds.com/_next/static/media/captain-america.e49a7de3.png",

    "https://www.imgworlds.com/_next/static/media/spiderman.8071ace6.png"
]

let num = 0

function next() {
    let slider = document.querySelector(".slider")
    num++;
    if(num >= imgs.length){
        num = 0
    }

    slider.src = imgs[num]
}

function prev() {
    let slider = document.querySelector(".slider")
    num--;
    if(num < 0){
        num = imgs.length - 1
    }

    slider.src = imgs[num]
}

nextBtn.addEventListener("click", next)

prevBtn.addEventListener("click", prev)