
// მაგალითი 1

let int = [1, 2, 3, 4, 5]

let [a, b, c, d, e] = int

console.log(a, b, c, d, e);

// მაგალითი 1.2

let fl = [1.1, 3.4, 5.2, 7.8]

let [z, x, n, v] = fl

console.log(z, x, n, v);

// მაგალითი 1.3

let str = ["Hello", "boy", "Girl"]

let [g, h, j] = str

console.log(g, h, j)

// მაგალითი 2

let person = {
  name: 'Andria',
  lastName: 'Nachkebia'
}

let {name, lastName} = person

console.log(name, lastName);

// მაგალითი 2.1

let person2 = {
    hobby: "driving",
    job: "Taxi"
}

let {hobby, job} = person2

console.log(hobby, job);

// მაგალითი 2.2

let person3 = {
    love: "programing",
    hate: "videogames"
}

let {love, hate} = person3

console.log(love, hate);


// მაგალითი 3


let arr = [3]

let [r, m = 7] = arr

console.log(r, m);


// მაგალითი 3.1

let arr1 = [3]

let [y, l = 7.6] = arr1

console.log(y, l);


// მაგალითი 3.2

let arr2 = [3]

let [q, w = "hello"] = arr2

console.log(q, w);

// მაგალითი 4

let nestedArr = [3, [4, 5]];

let [o, [p, k]] = nestedArr;

console.log(o, p, k)

// მაგალითი 5

let obj = {
  name: 'Andria',
  age: 101
};

let {name: userName, age: userAge} = obj

console.log(userAge, userName);
