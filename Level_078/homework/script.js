// 1
let choce = parseInt(prompt("აირჩიეთ დღის რიცხვი"))

switch(choce) {
    case 1:
        alert("ორშაბათი")
        break;
    case 2:
        alert("სამშაბათი")
        break;
    case 3:
        alert("ოთხშაბათი")
        break;
    case 4:
        alert("ხუთშაბათი")
        break;
    case 5:
        alert("პარასკევი")
        break;
    case 6:
        alert("შაბათი")
        break;
    case 7:
        alert("კვირა")
        break;
    default: {
        alert("არასწორი დღე")
    }
}

// 2

let num = parseInt(prompt("შეიყვანეთ რიცხვი: "));
let result = (num % 2 === 0) ? "ლუწი" : "კენტი";
console.log(result);

// 3

let არჩევანი = parseInt(prompt("აირჩიეთ ამინდის რიცხვი"))

switch(არჩევანი) {
    case 1:
        alert("მზიანი")
        break;
    case 2:
        alert("წვიმიანი")
        break;
    case 3:
        alert("მოღრუბლული")
        break;
    case 4:
        alert("ქარიანი")
        break;
    default: {
        alert("არ არის დადგენილი")
    }
}
