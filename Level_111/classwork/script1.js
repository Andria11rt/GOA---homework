
const greet = (user = 'Guest') => {
  if (user === '') {
    user = 'Guest';
  }
  return `Hello ${user}`;
};

console.log(greet('MasterJaneza'));
console.log(greet(''));
console.log(greet());


const power = (base, exponent = 2) => base ** exponent;

console.log(power(2, 5)); // 2 * 2 * 2 * 2 * 2 = 32
console.log(power(2)); // 2 * 2 = 4