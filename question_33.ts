// 配列に入れる前に、その値が含まれているか確認しています
// We will check the contents before it is already inside or not
let intBoxes: number[] = []
for (var i = 0; i < 20; i++) {
  let num = Math.floor( Math.random() * 10 ) + 1
  if (! intBoxes.includes(num)) {
    intBoxes.push(num)
  }
}
console.log(intBoxes)
  
// Setを使って重複を省いています
// We use Set to avoid repetition
let intSet: Set<number> = new Set()
for (var i = 0; i < 20; i++) {
  let num = Math.floor( Math.random() * 10 ) + 1
  intSet.add(num)
}

console.log(Array.from(intSet))
