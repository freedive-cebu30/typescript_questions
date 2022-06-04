let languages: string[] = ["ruby", "php", "python", "java"]
let languages2: string[] = languages.map((language) => language.substring(0, 1).toUpperCase() + language.substring(1))

console.log(languages2)
