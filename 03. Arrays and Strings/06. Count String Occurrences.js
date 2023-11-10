function solve (text, searchedWord){
    let textArr = text.split(' ')
    let counter = 0

    textArr.forEach( (word) => {
        if (word === searchedWord){
            counter++;
        }
    })

    console.log(counter)
}

solve('This is a word and it also is a sentence', 'is')