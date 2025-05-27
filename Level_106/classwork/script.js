/*
function submit() {

    let inp1 = document.getElementById("num1");
    let inp2 = document.getElementById("num2");
    let btn = document.getElementById("btn")


  if (inp1.value != "" && inp2.value != "") {  // != - ეს ნიშანი არის არ უდრის
    if (inp1.value === inp2.value) {
        alert("Succeass!")
        return true;
    }
  }
  alert("Enter values");
  return false;
}

btn.addEventListener("click", submit)
*/






let parent = document.querySelector("div")
let child = document.querySelector("p")

parent.addEventListener("click", function() {
    console.log("This is a capturing type");
}, true)

child.addEventListener("Click", function() {
    console.log("This is a bubling type");
}, false)