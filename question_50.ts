class People {
name: string
age: number
height: number
weight: number

  constructor(name: string, age: number, height: number, weight: number) {
    this.name = name
    this.age = age
    this.height = height
    this.weight = weight
  }

  showStatus(){
    console.log(`name ${this.name}, age ${this.age}`)
  }
  
  showBMI(){
    console.log(`BMI: ${this.bmi()}`)
  }

  bmi() {
    let mHeight = (this.height / 100) ** 2
    return this.weight / mHeight
  }
}


let people = [{ "name" : "Taro1", "age" : 20, "height" : 180, "weight" : 60 },
              { "name" : "Taro2", "age" : 40, "height" : 160, "weight" : 70 },
              { "name" : "Taro3", "age" : 50, "height" : 150, "weight" : 75 }
             ]

for (let person of people) {
  let personObj = new People(person["name"], person["age"], person["height"], person["weight"])
  personObj.showStatus()
  personObj.showBMI()
}
