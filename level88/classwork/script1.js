
let academy = {
    name: "Goal-Oriented Academy",
    course: "Programming",
    socialLink: "htpps://Goal-Oriented Academy",
    reviews:{
        st1: { name: "Luka",
             status: "parent",
             review: "Great academy!" },
        st2: { name: "Nino",
             status: "child",
             review: "Good academy" },
        st3: { name: "Nika",
             status: "Child",
             review: "Good teacher" }
    }
}
// 1
console.log(Object.entries(academy))

// 2
console.log(Object.keys(academy));

// 3
console.log(Object.values(academy))

// 4
console.log(academy.hasOwnProperty(academy, "name"));

console.log(academy.hasOwnProperty(academy, "course"));

// 5

let mem = {
    member: 999
}
academy.mem

// 6 
Object.freeze(academy)

// 7
console.log(Object.isFrozen(academy))