let people = [{ "name" : "Taro1", "age" : 20, "height" : 180, "weight" : 60, "country" : "Japan" },
              { "name" : "Taro2", "age" : 30, "height" : 170, "weight" : 65 },
              { "name" : "Taro3", "age" : 40, "height" : 160, "weight" : 70, "country" : "Taiwan" },
              { "name" : "Taro4", "age" : 20, "height" : 160, "weight" : 75, "country" : "Japan" },
              { "name" : 'Taro5', "age" : 60, "height" : 160, "weight" : 75, "country" : 'Japan' },
              { "name" : 'Taro6', "age" : 50, "height" : 150, "weight" : 75, "country" : 'Japan' },
             ]


let sortPeople = people.sort(function(v1, v2){
                   if (v1["height"] == v2["height"] ) {
                     return v2["age"] - v1["age"] 
                   } else {
                     return v1["height"] - v2["height"] 
                   }
                 })

console.log(sortPeople)
