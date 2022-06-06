console.log(checkMultiple1(9))
console.log(checkMultiple1(10))
console.log(checkMultiple1(14))
console.log(checkMultiple1(15))
console.log(checkMultiple1(30))
  
console.log(checkMultiple2(9))
console.log(checkMultiple2(10))
console.log(checkMultiple2(14))
console.log(checkMultiple2(15))
console.log(checkMultiple2(30))


function checkMultiple1(number: number): boolean {
  if (number % 3 == 0 || number % 5 == 0) {
    return true
  } else {
    return false
  }
}

function checkMultiple2(number: number): boolean {
  if (number % 3 != 0 && number % 5 != 0) {
    return false
  } else {
    return true
  }
}
