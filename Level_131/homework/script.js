// დაწერეთ 3 მაგალითი სინქრონულ და ასინქრონულ პროგრამირებაზე.

setTimeout(function() {
  console.log(2);
}, 7000);

setTimeout(function() {
  console.log("I am");
}, 8000);

setTimeout(function() {
  console.log("Batman");
}, 9000);

console.log(3);

console.log("Hello");

console.log("World");