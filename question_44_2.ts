let fruits: string[] = ["apple", "apple", "orange", "mango", "mango", "mango", "mango"]
let mapFruits: any = {}
let current_num = 0

for (let fruit of fruits) {
  if (isNaN(mapFruits[fruit])) {
    mapFruits[fruit] = 1
  } else {
    mapFruits[fruit] += 1
  }
}
console.log(mapFruits)
