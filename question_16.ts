let array1: string[] = ["banana", "apple", "orange"]
let array2: string[] = ["mango", "banana", "apple"]

let array3: string[] = ["banana", "apple", "orange"]
let array4: string[] = ["mango", "banana", "melon"]
  
let setAnswer1 = compareList(array1, array2)
let setAnswer2 = compareList(array3, array4)


// Setを配列に変換
// exchange from Set to Array
let arrayAnswer1: string[] = Array.from(setAnswer1)
let arrayAnswer2: string[] = Array.from(setAnswer2)
console.log(arrayAnswer1)
console.log(arrayAnswer2)


function compareList(array1: string[], array2: string[]): Set<string> {
  let set1: Set<string> = new Set(array1)
  let set2: Set<string> = new Set(array2)
  const intersection = new Set([...set1].filter(value => set2.has(value)))
  
  return intersection
}
