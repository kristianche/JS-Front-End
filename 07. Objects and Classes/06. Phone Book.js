function phoneBook (array) {
    const phoneBook = {}
    let key, value
    for (let el of array){
        key = el.split(' ')[0]
        value = el.split(' ')[1]
        phoneBook[key] = value
    }

    for (let tuple of Object.entries(phoneBook)){
        console.log(`${tuple[0]} -> ${tuple[1]}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)