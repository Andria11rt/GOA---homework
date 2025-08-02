// 1
let mySet = new Set()

// 2
mySet.add(1)
mySet.add(2)
mySet.add(3)

// 3
console.log(mySet.has(2));
console.log(mySet.has(5)); 

// 4
console.log(mySet.size);

// 5
mySet.delete(2)
console.log(mySet);

// 6
mySet.clear()
console.log(mySet);

// 7
const numberSet = new Set([10, 20, 30]);
numberSet.forEach(value => {
  console.log(value)
});

// 8
const arrayFromSet = [...numberSet]
console.log(arrayFromSet)

// 9
const setA = new Set([1, 2, 3])
const setB = new Set([3, 4, 5])
const unionSet = new Set([...setA, ...setB])
console.log(unionSet);

// 10
const intersectionSet = new Set([...setA].filter(value => setB.has(value)))
console.log(intersectionSet)