function solve (input) {
    let evenSum = 0
    let oddSum = 0

    input.forEach( (number) => {
        if (number % 2 === 0){
            evenSum += number
        } else {
            oddSum += number
        }
    })

    console.log(evenSum - oddSum)
}

solve([3,5,7,9])