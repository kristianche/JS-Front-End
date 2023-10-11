function covertToJSON (name, lastName, hairColor) {
    const person = {
        name,
        lastName,
        hairColor,
    }

    console.log(JSON.stringify(person))
}

covertToJSON('George', 'Jones', 'Brown')