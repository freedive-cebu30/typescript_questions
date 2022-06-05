let values: string[] = ["090-1111-22223", "090-1111-22224", "090-1111-22225"]
let replacedValues = values.map((value) => value.replaceAll("-", ""))
console.log(replacedValues)
