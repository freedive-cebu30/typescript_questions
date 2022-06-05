let values: number[] = [1, 2, 3, 4, 5, 8, 9, 10, 18, 20]
let values2: number[] = [1, 2, 3, 4, 5, 8, 10, 20]
  
let answer1: number = multiple9(values)
let answer2: number = multiple9(values2)

console.log(answer1)
console.log(answer2)

function multiple9 (values: number[]): number {
  let res = 0
  for (let value of values) {
      if (value % 9 == 0) {
        res = value
        break
      }
  }
  
  return res
}
