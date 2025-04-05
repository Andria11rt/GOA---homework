// 1. თქვენ აპირებთ დაწეროთ ფუნქცია, რომელიც შეარჩევს შემთხვევით სახელს სახელების სიიდან. შერჩეულმა პირმა უნდა გადაიხადოს ყველას საკვების გადასახადი.

function chooseWhoPays(names) {
    let randomIndex = Math.floor(Math.random() * names.length)
    return `${names[randomIndex]} გადაიხდის ყველაფერს!`
  }
  
let names = ["ანა", "გიორგი", "მარი", "ლუკა"]
console.log(chooseWhoPays(names));

