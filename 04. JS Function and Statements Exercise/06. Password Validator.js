function passwordValidator (password) {
    const passwordRegex = /^(?=(?:[^0-9]*[0-9]){2})[a-zA-Z0-9]{6,10}$/
    
    console.log(passwordRegex.test(password))
}

passwordValidator('MyPass123')