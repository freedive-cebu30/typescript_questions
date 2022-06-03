// どちらのメソッドでも大丈夫です
// Either method is fine

console.log(bmi(187, 61))
console.log(bmi2(187, 61))
// 17.444021847922443
// 17.444021847922446


function bmi(height: number, weight: number): number {
  let mHeight = (height / 100) ** 2
  
  return weight / mHeight
}

function bmi2(height: number, weight: number): number {
  return weight * 10000 / height ** 2
}
