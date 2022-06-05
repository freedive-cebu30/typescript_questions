let value: string = "ph-cebu, japan-tokyo, japan-osaka, Taiwan-taipei, japan-kyoto"
let arrayValue: string[] = value.split(",").map((v) => v.trim())
let arrayValueJapan: string[] = arrayValue.filter((value => value.startsWith("japan-")))
let capitalValueJapan: string[] = arrayValueJapan.map((valueJapan) => valueJapan.substring(0, 1).toUpperCase() + valueJapan.substring(1))
let stringJapan: string = capitalValueJapan.join(",")
console.log(stringJapan)
