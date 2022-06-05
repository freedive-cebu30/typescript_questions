let values:string[] = ["Taiwan-tokyo", "Taiwan-osaka", "Taiwan-kyoto"]
let replacedValues = values.map((value) => value.replaceAll("Taiwan", "Japan"))
console.log(replacedValues)
