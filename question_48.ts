let capital_letter_start: number = 65
let capital_letter_end: number = capital_letter_start + 25

var alphabet_array: string[] = []
for (var i = 0; i < 10; i++){
  var num = getRandom(capital_letter_start, capital_letter_end)
  alphabet_array.push(String.fromCharCode(num))
}

console.log(alphabet_array.join(''))


// getRandom(2, 5)で、2から5の数字がランダムで出ます
function getRandom(min: number, max: number): number {
  var random = Math.floor(Math.random() * (max + 1 - min)) + min
  return random
}
