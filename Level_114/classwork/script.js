
// forEach() is a way to do something for each item in an array.
// Runs a function for every item in the array.

// forEach() მეთოდი მასივის თითოეული მნიშვნელობისთვის აკეთებს რაღაცას.
// მასივში გაუშვებს ფუნქციას, მასში მნიშვნელობებისთვის.

// key points:
// 1. დანიშნულება: შეასრულოს ფუნქცია მასივის მნიშვნელობებისთვის.
// 2. არ აბრუნებს: არ აბრუნებს ახალ მასივს ან ნებისმიერ მნიშვნელობას, ის უბრალოდ ასრულებს ქმედებას.
// 3. ორიგინალი მასივი: ორიგინალი მასივი არ იცვლება, იქამდე სანამ ჩვენ არ შევცვლით ფუნქციაში.


// მაგალითი 1:
/*
let nums = [1, 2, 3, 4, 5];

nums.forEach(number => {
  console.log(number)
});
*/

// მაგალითი 2:
/*
// ყველა მნიშვნელობისათვის 1 - ის დამატება.

// შევქმნათ მასივი.

let nums = [1, 2, 3, 4, 5];

// nums მასივს გადავუაროთ forEach - ით და თითოეულ
// მნიშვნელობას დავუმატოთ 1.

// 1. number - ეს არის მასივის ამჟამინდელი მნიშვნელობა.
// 2. index - ეს არის მნიშვნელობის ინდექსი.

nums.forEach((number, index) => {
  nums[index] = number + 1;
  console.log(nums[index]);
});
*/
/*
let cars = ['Nissan', 'BMW', 'AUDI', 'MERCEDES', 'TOYOTA'];

// Car: Nissan, Index: 0 - Car: BMW, index: 1 -

// cars.forEach((number, index) => console.log(`Car: ${number}, Index: ${index}`));

cars.forEach((car, i) => {
  console.log(`Car: ${car}, Index: ${i}`);
});
*/

// ---------------------------------------------------------------------------------------------------------------

// reduce() method takes an array and reduces it to a single value. it does this by going through each item in the array
// and applying a function that combines them in some way.

// reduce() მეთოდი იღებს მასივს და ამცირებს 1 მნიშვნელობამდე. ეს ამას აკეთებს მასივში თითოეული ელემენტის გავლით და
// ფუნქციის გამოყენებით, რომელიც მათ გარკვეულწილად აერთიანებს.


// მაგალითი 1:

// let numbers = [1, 2, 3, 4, 5];

// reduce() მეთოდის გამოყენებით შევაჯამებთ მასივის მნიშვნელობებს და გამოვიტანოთ ჯამი.

// reduce() - ს გადაეცემა 3 პარამეტრი. --- 1. total   2. number   3. 5(სურვიათი). ამ
// შემთხვევაში 5 არის ინიციალი. ანუ total იქნება 5 და number იქნება მასივის მნიშვნელობა, ამ
// შემთხვევაში დავიწყებთ შეკრებაას 5 - დან და პასუხს მივიღებთ 20 - ს.

// let sum = numbers.reduce((total, number) => total + number, 5);

// total(5) + number(1, 2, 3, 4, 5) = 5 + 1 = 6
// total(6) + number(2, 3, 4, 5) = 6 + 2 = 8
// total(8) + number(3, 4, 5) = 8 + 3 = 11
// total(11) + number(4, 5) = 11 + 4 = 15
// total(15) + number(5) = 15 + 5 = 20
// SUM = 20

// console.log(sum);



// ნაბიჯ-ნაბიჯ მუშაობს ასე:
// Here's a step-by-step explanation of how the reduce() method works in your code:

// 1. Initial Call: The reduce() method is called with an initial value of 5.

// 2. First Iteration:
// total is 5 (initial value).
// number is 1 (first element of the array).
// The function returns 5 + 1 = 6.

// 3. Second Iteration:
// total is 6 (result from the previous iteration).
// number is 2 (second element of the array).
// The function returns 6 + 2 = 8.

// 4. Third Iteration:
// total is 8 (result from the previous iteration).
// number is 3 (third element of the array).
// The function returns 8 + 3 = 11.

// 5. Fourth Iteration:
// total is 11 (result from the previous iteration).
// number is 4 (fourth element of the array).
// The function returns 11 + 4 = 15.

// 6.Fifth Iteration:
// total is 15 (result from the previous iteration).
// number is 5 (fifth element of the array).
// The function returns 15 + 5 = 20.

// -------------------------------------------------------------------------------------

// The reduceRight() method in JavaScript works like the reduce() method but processes the array elements from
// right to left. It reduces an array to a single value by executing a reducer function on each element, starting
// from the last element to the first. -------- It combines all items in an array to produce a single result, but
// it starts from the last item and goes to the first.

// reduceRight() მეთოდი მუშაობს ისევე როგორც reduce() მეთოდი, მაგრამ ამ შემთხვევაში მასივის ელემენტებზე
// მარჯვნიდან მარცხნივ.

// reduce - [1, 2, 3, 4, 5] >>> 1, 2, 3, 4, 5
// reduceRight - [1, 2, 3, 4, 5] >>> 5, 4, 3, 2, 1

// მაგალითი 1:
let numbers = [1, 2, 3, 4];

let result = numbers.reduceRight((total, number) => total - number, 0);

console.log(result);
// 1. 0 - 4 = -4
// 2. -4 - 3 = -7
// 3. -7 - 2 = -9
// 4. -9 - 1 = -10