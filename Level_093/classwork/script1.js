


// let citrus = fruits.slice[2, 3]

// fruits.splice(-2, 2, 'fig')
/*
let fruitString = fruits.join('-')

function processFruits(fruits) {

    fruits.splice(-2, 2, 'fig');

    return fruits.join('-');
}


let fruits = ["banana", "kiwi", "peach", "melon", "watermelon"]

console.log(fruits);
*/




nestedArray = [1, 2, 3,[4, 5, 6,[7, 8, 9]]]

flatArray = nestedArray.flat(1)

console.log(flatArray);

fullyFlatArray = nestedArray.flat(Infinity)

function checkElement(array, value) {
    console.log(array.includes(value))
}

function findIndexOfElement(array, value) {
    if(array.indexOf(value)){
        console.log("found"  )
    }
    else{
        console.log(-1);
    }
}
