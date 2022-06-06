console.log(cal(3))
console.log(cal(4))


function cal(num: number): number {
  let stringNumber: string = num.toString()
  let threeTimesNumber: string = stringNumber.repeat(3)
  let intNumber: number = parseInt(threeTimesNumber)

  return num + intNumber
}
