let values: any = [1, "a", 2, "b", "c", 3, "4", "5", "6"]
let intArray: number[] = []
let stringArray: string[] = []
  

for (let value of values) {
  if (! isNaN(value)) {
    value = parseInt(value)
    intArray.push(value)
  } else {
    stringArray.push(value)
  }
}

console.log(intArray.sort((v1, v2) => v2 - v1))
