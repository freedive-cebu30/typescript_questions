let people = [{ "name" : "Taro1", "age" : 20, "height" : 180, "weight" : 60 },
              { "name" : "Taro2", "age" : 40, "height" : 160, "weight" : 70 },
              { "name" : "Taro3", "age" : 50, "height" : 150, "weight" : 75 }
             ];

for (let person of people) {
  console.log(`name ${person["name"]}, age ${person["weight"]}`);
  console.log(`BMI: ${bmi(person["height"], person["weight"])}`);
}


function bmi(height: number, weight: number) {
  let mHeight = (height / 100) ** 2;
  
  return weight / mHeight;
}
