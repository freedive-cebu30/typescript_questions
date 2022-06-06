let message: string

message = fizzBuzz(6)
console.log(message)
message = fizzBuzz(10)
console.log(message)
message = fizzBuzz(15)
console.log(message)
message = fizzBuzz(16)
console.log(message)


function fizzBuzz(n: number): string {
  let message  = 'Nothing'
  
  if (n % 15 == 0) {
    message = 'FizzBuzz'
  } else if ( n % 5 == 0 ) {
    message = 'Buzz'
  } else if ( n % 3 == 0) {
    message = 'Fizz'
  }
    
  return message
}
