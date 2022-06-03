let s1: string = 'rubyab'
let s2: string = 'railsb'
  
let answer = compareString(s1, s2)
console.log(answer)
  

function compareString(str1: string, str2: string): string[] {
  let subjectArray1: string[] = str1.split('')
  let subjectArray2: string[] = str2.split('')
  let repetitionArray: string[] = new Array()
  
  for (var str of subjectArray1) {
    if(subjectArray2.includes(str)) {
      if (!repetitionArray.includes(str)) {
        repetitionArray.push(str)  
      }
    }
  }
  
  return repetitionArray
}
