let message: string
message = fizzBuzz(6)
console.log(message)
message = fizzBuzz(10)
console.log(message)
message = fizzBuzz(15)
console.log(message)
message = fizzBuzz(16)
console.log(message)
message = fizzBuzz(0)

function fizzBuzz(n: number): string {
  let message  = 'Nothing'
  try {
    if (n < 1) {
      throw("1より大きい値を入力して下さい")
    }

    if (n % 15 == 0) {
      message = 'FizzBuzz'
    } else if ( n % 5 == 0 ) {
      message = 'Buzz'
    } else if ( n % 3 == 0) {
      message = 'Fizz'
    } 
  } catch (e) {
    console.log(e)
  }
    
  return message
}
