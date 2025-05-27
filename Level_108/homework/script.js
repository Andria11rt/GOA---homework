
let isPrime = (num) => {
  if (num <= 1) {
    return false
  }
  if (num === 2) {
    return true
  }
  if (num % 2 === 0) {
    return false
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const checkNumber = (num1) => {
  if (num1 > 0) {
    return "Positive"
  } else if (num1 < 0) {
    return "Negative"
  } else {
    return "Zero"
  }
}
