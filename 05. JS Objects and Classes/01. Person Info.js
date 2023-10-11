function personInfo (firstName, lastName, age){
    const person = {
        firstName, 
        lastName,
        age
    }

    return person
}

person = personInfo("Peter", "Pan", "20")

for (let key of Object.keys(person)){
    console.log(`${key}: ${person[key]}`)
}