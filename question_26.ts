let intBoxes: number[]

while (true) {
  intBoxes = []
  for (let i = 0; i < 10; i++) {
    let num: number = Math.floor( Math.random() * 30 ) + 1
    intBoxes.push(num + 1)
  }

  let answer: boolean = intBoxes.some((value) => value % 11 == 0 )
  if (answer) {
    break
  } else {
    // debug
    // デバッグ用です
    console.log(answer)
    console.log(intBoxes)
  }
}
console.log(intBoxes)
