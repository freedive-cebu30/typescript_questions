let message = checkAlcohol(19)
console.log(`あなたの場合は、お酒は${message}です`)
  
message = checkAlcoholIf(20)
console.log(`あなたの場合は、お酒は${message}です`)

function checkAlcohol(age: number): string {
  let message = age > 19 ?  'OK' : 'NG'
  
  return message
}

function checkAlcoholIf(age: number): string {
  let message;
  if (age > 19) {
    message = 'OK'
  } else {
    message = 'NG'
  }
  
  return message
}
