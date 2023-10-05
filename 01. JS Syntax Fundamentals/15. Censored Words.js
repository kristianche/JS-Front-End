function censoredWords (text, word) {

    function stars (word) {
        let repacingWord = '';
        let wordLength = word.length

        for (i = 0; i <= wordLength; i++){
            repacingWord += '*'
        }

        return repacingWord
    }

    let censored = text.replace(word, stars(word))

    while (censored.includes(word)) {
        censored = censored.replace(word, stars(word))
    }

    console.log(censored)
}

censoredWords('A small sentence with some words', 'small')

