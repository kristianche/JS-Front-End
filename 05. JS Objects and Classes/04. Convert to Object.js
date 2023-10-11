function convertToObject (string){
    return JSON.parse(string)
}

const info = convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')

for (let tuple of Object.entries(info)){
    console.log(`${tuple[0]}: ${tuple[1]}`)
}