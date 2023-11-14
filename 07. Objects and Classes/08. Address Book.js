function addressBook (array) {
    const addressBook = {}
    let key, value
    for (let el of array.sort()){
        key = el.split(':')[0]
        value = el.split(':')[1]
        addressBook[key] = value
    }

    for (let tuple of Object.entries(addressBook)){
        console.log(`${tuple[0]} -> ${tuple[1]}`)
    }
} 

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)
