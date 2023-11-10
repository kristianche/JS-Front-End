function charactersInRange (char1, char2){
    let char1Ascii = char1.charCodeAt()
    let char2Ascii = char2.charCodeAt()
    let resultArray = [];

    for (let i = char1Ascii + 1; i < char2Ascii; i++){
        let characher = String.fromCharCode(i)
        resultArray.push(characher)
    }

    console.log(resultArray.join(' '))
}

charactersInRange('#', 'C')