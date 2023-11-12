function solve (startingNumber, endingNumber){
    let sum = 0;
    let numbers = ''

    for (i = startingNumber; i <= endingNumber; i++){
        sum += i
        numbers += `${i} `
    }

    console.log(numbers)
    console.log(`Sum: ${sum}`)
}

solve(5, 10) 