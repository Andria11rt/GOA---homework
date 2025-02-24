// 1

function fizzBuzz(res) {
    let result = [];

    for (let i = 1; i <= res; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            alert("Fi");
        } 
        else if (i % 3 == 0) {
            alert("Fizz");
        } 
        else if (i % 5 == 0) {
            alert("Buzz");
        } 
        else {
            alert(i);
        }
    }

    return result;
}

const res = prompt('Enter number:')
alert(fizzBuzz(res));