let fruits = [ { "apple" : 100, "orange" : 50, "mango" : 30},
               { "apple" : 200, "orange" : 250, "mango" : 230},
               { "apple" : 300, "orange" : 350, "mango" : 330},
             ]

let total:number = 0
let val: number
for (var fruit of fruits) {
  val = fruit["apple"] || 0
  total += val
}
console.log(total)
