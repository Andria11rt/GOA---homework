/*
let nums = [1, 2, 3, 4, 5]

for(let i = 0; i < nums.length; i++){
    console.log(nums[i])
}
*/
/*

TODO --- for ..in - გამოიყენება ობიექტებზე გამოსაყენებლად.
იგი გადაუვლის ობიექტს და ობიექტში არსებულ თვისებათა მნიშვნელობებზე წვდომა გვექნება.



let person = {
    name: "Andria",
    lastName: "Nachkebia",
    age: 18,
    profession: "Mentor",
    countre: "George",
    city: "Samegrelo"
}

/*
let KeysOfObject = Object.keys(person)

for (let i = 0; i < keysOfObj.length; i++) {
  console.log(keysOfObj[i])
}

console.log(keysOfObj);
*/
/*

for(let info in person) {  
    console.log(info) // გამომავალი გამოიტანს ობიექტის თვისებებს: name, lastName, age, profession, countre, city

    console.log(person[info]) // გამოაქვს ობიექტში შენახული მნიშვნელობები: Andria, Nachkebia, 18, Mentor, Georgia, Samegrelo

    console.log(info + ": " + person[info]) //  გამოაქვს თვისებები და მნიშვნელობები ერთად.

//   შეცვლა შეიძლება |                                  n     l        a    p            c        c 
    console.log(info[0]) // გამოაქვს ობიექტის თვისებებს: name, lastName, age, profession, countre, city პირველი ასო

}
*/


// TODO --- for of - გამოიყენება მასივებისთვის. for of ის საშუალებით, ჩვენ გადავყვებით მასივს და მასივში არსებულ მნიშვნელობებზე წვდომა გვექნება.
/*
let names = ['Davit', 'Andria', 'amiko', 'luke', 'erekle'];

for(let val of names) {
    console.log(val);
}
*/

let txr = "Hello World"

for(let char of txt){
    console.log(char);
    
}