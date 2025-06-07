/*
ამოცანა: arrow function და default parameter,
დაწერეთ arrow function, რომელიც მიიღებს ორ რიცხვს პარამეტრად და დააბრუნებს მათ ჯამს. მეორე პარამეტრს მიანიჭეთ default მნიშვნელობა 0.

 
მაგალითი:
თუ ფუნქციას გადავცემთ 5 და 3, ფუნქციამ უნდა დააბრუნოს 8.
თუ ფუნქციას გადავცემთ მხოლოდ 5, ფუნქციამ უნდა დააბრუნოს 5.,
,
,
*/
let sumNumbers = (num1, num2 = 0) => num1 + num2;

console.log(sumNumbers(5, 3)); 
console.log(sumNumbers(5)); 