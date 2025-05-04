// 1 შექმენით ფუნქცია findMax(a, b, c), რომელიც მიიღებს სამ რიცხვს და დააბრუნებს მათგან ყველაზე დიდს.

let a = prompt("Enter Number a:")

let b = prompt("Enter Number b:")

let c = prompt("Enter Number c:")

function findMax(a,b,c){
    if(a > b && a > c){
        alert(a)
    }
    else if(b > a && b > c){
        alert(b)
    }
    else if(c > a && c > b){
        alert(c)
    }
    else{
        alert("შენ იპოვე ბაგი")
    }

}

alert(findMax(a,b,c))


// 2 შექმენით ფუნქცია isEven(number), რომელიც დააბრუნებს true თუ რიცხვი არის ლუწი და false თუ რიცხვი არის კენტი.


let num = prompt("Enter Number:")

function even(num) {
    if(num % 2 === 0){
        alert("Even")
    }

    else{
        alert("Noteven")
    }
}
alert(even(num))

// 3 ?


// 4 შექმენით ფუნქცია findMin(a, b, c),
// რომელიც დააბრუნებს სამ რიცხვიდან ყველაზე მცირეს ტერნარის ოპერატორის გამოყენებით.

let A = prompt("Enter Number a:")

let B = prompt("Enter Number b:")

let C = prompt("Enter Number c:")

function findMin(A,B,C){
    if(A < B && A < C){
        alert(A)
    }
    else if(B < A && B < C){
        alert(B)
    }
    else if(C < A && C < B){
        alert(C)
    }
    else{
        alert("შენ იპოვე ბაგი")
    }

}

alert(findMin(A,B,C))
