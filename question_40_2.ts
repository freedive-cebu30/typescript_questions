let people = [{ "name" : "Taro1", "age" : 20, "height" : 180, "weight" : 60, "country" : "Japan" },
              { "name" : "Taro2", "age" : 30, "height" : 170, "weight" : 65 },
              { "name" : "Taro3", "age" : 40, "height" : 160, "weight" : 70, "country" : "Taiwan" },
              { "name" : "Taro4", "age" : 50, "height" : 150, "weight" : 75, "country" : "Japan" }]


// どちらのやり方でも大丈夫です
// either way is fine
let listPeople = []
listPeople = people.filter((person) => person["age"] > 30)
console.log(listPeople)


for (let person of people) {
  if (person["age"] >  30) {
    listPeople.push(person)
  }
}
console.log(listPeople)
