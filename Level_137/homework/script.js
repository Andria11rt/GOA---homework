// Task 1: Filter inactive objects
function getInactive(jsonStr) {
  let arr = JSON.parse(jsonStr)
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].active === false) {
      res.push(arr[i])
    }
  }
  console.log(res);
}

// Task 2
function extractNames(jsonStr) {
  let arr1 = JSON.parse(jsonStr)
  let names = []
  for (let i = 0; i < arr1.length; i++) {
    names.push(arr1[i].name)
  }
  console.log(names);
}

// Task 3
function countHighScores(jsonStr) {
  let arr2 = JSON.parse(jsonStr)
  let count = 0
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].score > 80 && arr2[i].passed === true) {
      count = count + 1
    }
  }
  consool.log(count);
}
