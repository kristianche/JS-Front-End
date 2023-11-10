function solve (input){

    function usernameReverse (username) {
        let usernameArr = username.split('')
        usernameArr.reverse()
        let string = usernameArr.join('')
        return string
    }

    let [username, ...passwords] = input
    let counter = 1
    let reversedUsername = usernameReverse(username)

    for (let password of passwords){
        if (password === reversedUsername){
            console.log(`User ${username} logged in.`)
            break;
        } else if (counter === 4){
            console.log(`User ${username} blocked!`)
            break
        } else {
            console.log('Incorrect password. Try again.')
        }
        counter++  
    }
}

solve(['Acer','login','go','let me in','recA'])