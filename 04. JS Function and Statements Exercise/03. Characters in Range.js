function charactersInRange (char1, char2){
    let char1Ascii = char1.charAt()
    let char2Ascii = char2.charAt()
    let resultArray = [];

    for (let i = char1Ascii; i <= char2Ascii; i++){
        let characher = String.fromCharCode(i)
        resultArray.push(characher)
    }

    console.log(resultArray.join(' '))
}

charactersInRange('a', 'd')