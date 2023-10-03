function repeatString (string, repeatCount){
    let returnString = ''

    for (let i = 1; i <= repeatCount; i++){
        returnString += string
    }

    return returnString
}

let result = repeatString('abc', 3)
console.log(result)