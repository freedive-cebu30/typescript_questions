let listBox1: number[] = [1, 2, 3, 4, 5, 8, 9]
let listBox2: number[] = [9, 7, 6, 5, 4]
  
let set1: Set<number> = new Set(listBox1)
let set2: Set<number> = new Set(listBox2)
  
let answer = symmetricDifference(set1, set2)

console.log(answer)
console.log(Array.from(answer))

function symmetricDifference(setA: Set<number>, setB: Set<number>) {
  for (let value of setB) {
    if (setA.has(value)) {
      setA.delete(value)
    } else {
      setA.add(value)
    }
  }
  return setA
}
