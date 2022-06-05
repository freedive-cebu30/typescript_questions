let values: number[] = [1, 2, 3, 4, 5, 8, 9, 10, 18, 20]
let values2: number[] = [1, 2, 3, 4, 5, 8, 10, 20]
  
let answer1 = values.some((value) => value % 9 == 0 )
console.log(answer1)

let answer2 = values2.some((value) => value % 9 == 0 )
console.log(answer2)
