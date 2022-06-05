var human1: any = { "name": "Taro", "age": 20, "height" : 180, "weight" : 60 }
var human2:any = { "name2" : "Jiro", "age2" : 30, "height2" : 170, "weight2" : 50 }

var human3 = {...human1, ...human2}
console.log(human3)
