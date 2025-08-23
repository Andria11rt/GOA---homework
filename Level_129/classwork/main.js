/*
import { hi, txt, pi, arr, person } from './sayHi.js'
import { txt } from "./sayHi"
import { pi } from './sayHi.js'
import { arr } from './sayHi.js'
import { person } from './sayHi.js'
*/
/*
console.log(hi());
console.log(txt);
console.log(pi);
console.log(arr);
console.log(person);
*/

// import sayHiTxt from './sayHi.js';

// console.log(sayHiTxt);

// import sum from './sayHi.js';

// console.log(sum(5, 10));

// import sum, { txt, pi arr, person } from './sayHi.js';

// console.log(sum(5, 10));
// console.log(txt);
// console.log(pi);
// console.log(arr);
// console.log(person);


import * as codes from './sayHi.js';

// console.log(codes.sum(1, 5));
console.log(codes.txt);
console.log(codes.pi);
console.log(codes.arr);
console.log(codes.person);


codes = {
    sayHi() {
        //
    },
    txt: 'Hello World!',
    pi: 3.14,
    arr: [1, 2, 3]
}