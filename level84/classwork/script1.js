
/*
let width = prompt("Enter width:")

let length = prompt("Enter length:")


function area(width, length){
    console.log(width * length);
}

console.log(area(width, length));
*/

function usname(name){
    return name;
};

function uslastname(lastname){
    return lastname;
};

function usage(age){
    return age;
};

let name = usname("Andria")
let lastname = uslastname("Nachkebia")
let age = usage(13)

let newname = prompt("Enter name:")
let newlastname = prompt("Enter lastName:")
let newage = prompt("Enter age:")

if(name == newname && lastname == newlastname && age == newage){
    alert("info is same")
}

else{
    alert("info different")
}