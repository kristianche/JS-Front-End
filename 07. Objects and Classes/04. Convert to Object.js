function convertToObject (string){
    let person = JSON.parse(string)
    for (let tuple of Object.entries(person)){
        console.log(`${tuple[0]}: ${tuple[1]}`)
    }
}

const info = convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')