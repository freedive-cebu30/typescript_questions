let fruits = []
let fruit1 = new Map<string, number>([["apple", 100], ["orange", 50], ["mango", 30]])
let fruit2 = new Map<string, number>([["apple", 200], ["orange", 250], ["mango", 230]])
let fruit3 = new Map<string, number>([["apple", 300], ["orange", 350], ["mango", 330]])

fruits.push(fruit1)
fruits.push(fruit2)
fruits.push(fruit3)

let total: number = 0
let val: number
for (var fruit of fruits) {
  val = fruit.get("apple") || 0
  total += val
}
console.log(total)
