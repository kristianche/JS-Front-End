function employees (name) {
    let personalNumber = name.length

    const employee = {
        name,
        personalNumber
    }

    console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
}


const workers = ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'].forEach(employees)