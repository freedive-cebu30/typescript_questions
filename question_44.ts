let fruits: string[] = ["apple", "apple", "orange", "mango", "mango", "mango", "mango"]
let mapFruits = new Map()
let current_num: number = 0

for (let fruit of fruits) {
  if (mapFruits.has(fruit)) {
    current_num = mapFruits.get(fruit)
  } else {
    current_num = 0 
  }
  
  console.log(current_num)
  mapFruits.set(fruit, current_num + 1)
}
console.log(mapFruits)
