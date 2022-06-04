let numbers: number[] = [1, 12, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3]
let set1: Set<number> = new Set(numbers)
let uniqNumbers: number[] = Array.from(set1)
uniqNumbers.sort((v1, v2) => v2 - v1)

console.log(uniqNumbers)
