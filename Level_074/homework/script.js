 
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