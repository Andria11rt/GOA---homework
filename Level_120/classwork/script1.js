
// for in-ი გამოიყენება იტერაციისთვის მაგრამ for of-ის განსხვავებით გამოიყენება
// person ის ნაირებთან

let person = {
  name: 'Andria',
  lastName: 'Nachkebia',
  group: '24&25'
};

for (let info in person) {
console.log(person[info]);
}

