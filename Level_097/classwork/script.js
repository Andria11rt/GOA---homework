// document.body.innerHTML = '<button>Hello</button>'

// console.log(document);



// 1. innerHTML      2. innerText   3. texetContent

// document.body.innerHTML = "<u><i><b>Hello world!</b></u></i>";

// document.body.innerText = "<button>Hello world!</button>";

// document.body.textContent = "<button>Hello world!</button>";




// let h1 = document.getElementById("headingOne");
// let p = document.getElementsByClassName("p1");
// let btn = document.getElementsByName("button");

// console.log(h1.textContent)
// console.log(p[0].textContent)
// console.log(btn[0].textContent);


// let h1 = document.querySelector("#headingOne")
// let p = document.querySelector(".p1")
// let btn = document.querySelector("button")

// console.log(h1)
// console.log(p)
// console.log(btn)


let arrOfH1s = document.querySelectorAll("#headingOne")

arrOfH1s[3].textContent = "Hello"

for(let i = 0; i < arrOfH1s.length; i++){
    arrOfH1s[i].style.color = "red";
    arrOfH1s[i].style.fontFamily = "cursive";
    arrOfH1s[i].style.fontSize = "1.5em";
}
