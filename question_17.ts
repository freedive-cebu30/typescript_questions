let array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total: number = 0
  
// forを使った方法
// the way of for
for (let num of array1) {
  total += num
}

console.log(total)
// reduceを使った方法
// the way of reduce
total = array1.reduce((init, val) => init + val)
console.log(total)
