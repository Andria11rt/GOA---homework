
let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")

imgs = [
    "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg",

    "https://hips.hearstapps.com/hmg-prod/images/close-up-of-blossoming-rose-flower-royalty-free-image-1580853844.jpg?crop=0.668xw:1.00xh;0.248xw,0&resize=980:*",

    "https://cdn.pixabay.com/photo/2022/12/21/08/40/rose-7669467_640.jpg"
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