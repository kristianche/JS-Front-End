function sumFirstAndLastArrayElements (input) {
    let firstNumber = Number(input[0])
    let lastNumber = Number(input[input.length - 1])

    console.log(firstNumber + lastNumber)
}

sumFirstAndLastArrayElements([10, 17, 22, 33] )