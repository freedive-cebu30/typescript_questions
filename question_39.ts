let people = []
let mapPeople1 = new Map<string, any>([["name", "Taro1"], ["age", 20], ["height", 180], ["weight", 60], ["country", "Japan"]])
let mapPeople2 = new Map<string, any>([["name", "Taro2"], ["age", 30], ["height", 170], ["weight", 65]])
let mapPeople3 = new Map<string, any>([["name", "Taro3"], ["age", 40], ["height", 160], ["weight", 70], ["country", "Taiwan"]])
let mapPeople4 = new Map<string, any>([["name", "Taro4"], ["age", 50], ["height", 150], ["weight", 75], ["country", "Japan"]])

people.push(mapPeople1)
people.push(mapPeople2)
people.push(mapPeople3)
people.push(mapPeople4)

let listPeople = []

for (var person of people ) {
  for (var value of person.values() ) {
    if (value == "Japan"){
      listPeople.push(person)
      break
    }
  }
}

console.log(listPeople)
