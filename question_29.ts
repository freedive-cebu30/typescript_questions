let values: string[] =  ["Ms. Tanaka", "Mr. Suzuki", "Ms. Akagi", "Mrs. Yoko", "Ms. Yoshiki"]
let arrayBox: string[] = []
let arrayBox2: string[] = []
  
arrayBox = values.filter((value) => value.startsWith("Ms."))
console.log(arrayBox)
arrayBox2 = values.filter((value) => value.endsWith("ki"))
console.log(arrayBox2)
