function solve (words, text) {
    const replacingWordsArr = words.split(', ')
    let substring;

    for (let word of replacingWordsArr){
        substring = '*'.repeat(word.length)
        text = text.replace(substring, word)
    }

    console.log(text)
}

solve("great", "softuni is ***** place for learning new programming languages");