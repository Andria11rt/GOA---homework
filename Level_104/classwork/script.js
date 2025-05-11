/*
let btn = document.querySelector('button')
let input = document.querySelector('.input1')
let div = document.querySelector('div')

function displayContent() {
  if(input.value) {
    div.textContent = input.value;
    console.log(input.value)
  } else {
    div.textContent = 'Please Enter Something'
  }
}

btn.addEventListener('click', displayContent)

document.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        displayContent()
    }
})
*/

let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")

let imges = [

    "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH-oIAvcVSDEN54K4XFbmUAynW9xva-dQ0g&s",

    "https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png"
]

let num = 0

function next(){
    let slider = document.querySelector(".slider")
    num++;
    if(num >= imges.length){
        num = 0
    }
    slider.src = imges[num]
}

function prev() {
    let slider = document.querySelector('.slider');
    num--;
    if (num < 0) {
      num = imges.length - 1;
    };
    slider.src = imges[num];
  };
  
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);