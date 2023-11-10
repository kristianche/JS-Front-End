function solve(sentence, censoredWord){
    let textArr = sentence.split(' ')

    textArr.forEach( (word) => {
        if (word === censoredWord ){
            let index = textArr.indexOf(word)
            textArr[index] = '*'.repeat(word.length)
        }
    })

    console.log(textArr.join(' '))
}

solve('A small sentence with small small', 'small')