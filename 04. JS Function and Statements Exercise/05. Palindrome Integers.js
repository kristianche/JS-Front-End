function reversedNumber(numberAsString){
    let result = ''
    let numberAsStringLenght = numberAsString.length
    for (i = numberAsStringLenght - 1; i >= 0; i--){
        result += numberAsString[i]
    }

    return result
}


function palindromeIntegers (array) {
    let stringArray = []
    let stringElement, numberAsString

    for (let el of array){
        stringElement = el.toString()
        stringArray.push(stringElement)
    }

    for (numberAsString of stringArray){
        if (reversedNumber(numberAsString) === numberAsString){
            console.log('True')
        } else {
            console.log('False')
        }
    }
}

palindromeIntegers([32,2,232,1010]) 