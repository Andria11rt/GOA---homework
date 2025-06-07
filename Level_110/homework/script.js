
function countTruthiesAndFalsies(arr) {
  let truthyCount = 0
  let falsyCount = 0

  for (let item of arr) {
    if (item) {
      truthyCount++
    } else {
      falsyCount++
    }
  }

  return {
    truthy: truthyCount,
    falsy: falsyCount
  }
}