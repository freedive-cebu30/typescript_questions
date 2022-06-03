showString("world")


function showString(str: string): void {
  console.log(str.substring(0, 1))
  console.log(str.substring(str.length - 1))
  console.log(str.substring(0, 2))
  console.log(str.substring(1, 4))
}
